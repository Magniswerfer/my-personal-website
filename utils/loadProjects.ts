import { parse as parseYAML} from "@std/yaml";
import { Marked } from "marked";

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    order?: number;
    thumbnail?: string;
    slug: string;
    content?: string;
}

// Helper function to split front matter and content (reused from blog implementation)
function splitFrontMatter(fileContent: string): { frontMatter: string; content: string } {
    const lines = fileContent.trim().split("\n");
    if (lines[0] !== "---") {
        throw new Error("Invalid front matter format. File must start with ---");
    }
    const closingMarkerIndex = lines.slice(1).indexOf("---") + 1;
    if (closingMarkerIndex === 0) {
        throw new Error("Invalid front matter format. Missing closing --- marker");
    }
    const frontMatter = lines.slice(1, closingMarkerIndex).join("\n");
    const content = lines.slice(closingMarkerIndex + 1).join("\n").trim();
    return { frontMatter, content };
}

export async function loadProjectSummaries(): Promise<Project[]> {
    const projects: Project[] = [];
    
    for await (const entry of Deno.readDir("./projects")) {
        if (entry.isFile && entry.name.endsWith(".md")) {
            const filePath = `./projects/${entry.name}`;
            const content = await Deno.readTextFile(filePath);
            
            try {
                const { frontMatter } = splitFrontMatter(content);
                const parsedFrontMatter = parseYAML(frontMatter);
                const slug = entry.name.replace(".md", "");
                
                projects.push({
                    title: parsedFrontMatter.title,
                    description: parsedFrontMatter.description,
                    technologies: parsedFrontMatter.technologies || [],
                    githubUrl: parsedFrontMatter.githubUrl,
                    liveUrl: parsedFrontMatter.liveUrl,
                    featured: parsedFrontMatter.featured || false,
                    order: parsedFrontMatter.order || 0,
                    thumbnail: parsedFrontMatter.thumbnail,
                    slug,
                });
            } catch (e) {
                console.error(`Error processing project ${entry.name}:`, e);
            }
        }
    }
    
    // Sort projects by order (for featured projects) and then by title
    return projects.sort((a, b) => {
        if (a.featured !== b.featured) {
            return b.featured ? 1 : -1;
        }
        if (a.order !== b.order) {
            return (a.order || 0) - (b.order || 0);
        }
        return a.title.localeCompare(b.title);
    });
}

export async function loadProject(slug: string): Promise<Project | null> {
    try {
        const filePath = `./projects/${slug}.md`;
        const content = await Deno.readTextFile(filePath);
        const { frontMatter, content: body } = splitFrontMatter(content);
        const parsedFrontMatter = parseYAML(frontMatter);
        
        const marked = new Marked();
        const htmlContent = marked.parse(body);
        
        return {
            title: parsedFrontMatter.title,
            description: parsedFrontMatter.description,
            technologies: parsedFrontMatter.technologies || [],
            githubUrl: parsedFrontMatter.githubUrl,
            liveUrl: parsedFrontMatter.liveUrl,
            featured: parsedFrontMatter.featured || false,
            order: parsedFrontMatter.order || 0,
            thumbnail: parsedFrontMatter.thumbnail,
            content: htmlContent,
            slug,
        };
    } catch (e) {
        console.error(`Error loading project ${slug}:`, e);
        return null;
    }
}
