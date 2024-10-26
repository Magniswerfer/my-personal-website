import { parse as parseYAML} from "@std/yaml";
import { Marked } from "marked";

export interface BlogPost{
    title: string;
    date: string;
    summary: string;
    slug: string;
    content?: string;
}

// Helper function to split front matter and content
function splitFrontMatter(fileContent: string): { frontMatter: string; content: string } {
    const lines = fileContent.trim().split("\n");

    // Check if the file starts with ---
    if (lines[0] !== "---") {
        throw new Error("Invalid front matter format. File must start with ---");
    }

    // Find the closing --- marker
    const closingMarkerIndex = lines.slice(1).indexOf("---") + 1;
    if (closingMarkerIndex === 0) {
        throw new Error("Invalid front matter format. Missing closing --- marker");
    }

    const frontMatter = lines.slice(1, closingMarkerIndex).join("\n");
    const content = lines.slice(closingMarkerIndex + 1).join("\n").trim();

    return { frontMatter, content };
}

export async function loadPostSummaries(): Promise<BlogPost[]>{

    const posts: BlogPost[] = [];

    for await (const entry of Deno.readDir("./posts")) {
        if(entry.isFile &&  entry.name.endsWith(".md")){
            const filePath = `./posts/${entry.name}`;
            const content = await Deno.readTextFile(filePath);

            try {
                const { frontMatter } = splitFrontMatter(content);
                const parsedFrontMatter = parseYAML(frontMatter);
                // For TOML, replace with `parseToml(frontMatter);`

                const slug = entry.name.replace(".md", "");
                posts.push({
                    title: parsedFrontMatter.title,
                    date: parsedFrontMatter.date,
                    summary: parsedFrontMatter.summary || "",
                    slug,
                });
            } catch (e) {
                console.error(`Error processing ${entry.name}:`, e);
            }
        }
    }

    return posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function loadPost(slug: string): Promise<BlogPost | null> {
    try {
        const filePath = `./posts/${slug}.md`    
        const content = await Deno.readTextFile(filePath);

        const { frontMatter, content: body } = splitFrontMatter(content);
        const parsedFrontMatter = parseYAML(frontMatter);
         
        // Create a new markdown parser instance
        const marked = new Marked();
        const htmlContent = marked.parse(body);

        return {
            title: parsedFrontMatter.title,
            date: parsedFrontMatter.date,
            summary: parsedFrontMatter.summary || "",
            content: htmlContent,
            slug,
        };   

    } catch (e) {
        console.error(`Error loading post ${slug}`, e);
        return null;
    }
}
