import { Handlers, PageProps } from "$fresh/server.ts";
import { loadProjectSummaries, Project } from "../utils/loadProjects.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import PageHeader from "../components/PageHeader.tsx";
import CustomIcon from "../components/CustomIcons.tsx";

export const handler: Handlers = {
    async GET(_, ctx) {
        const projects = await loadProjectSummaries();
        return ctx.render({ projects });
    },
};

// Simple icon components using SVG
const GitHubIcon = () => (
    <svg 
    class="w-5 h-5" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

const GlobeIcon = () => (
    <svg 
    class="w-5 h-5" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

export default function ProjectsPage({ data }: PageProps<{ projects: Project[] }>) {
    const { projects } = data;

    return (
        <Layout title="Projects | Magnus H. Kaspersen">
        <div class="min-h-screen bg-gray-50">
        <Navbar />
        <PageHeader 
        title="Projects" 
        subtitle="A collection of my work and side projects"
        />

        <main class="container mx-auto px-4 py-12">
        {/* Featured Projects Section */}
        {projects.some(p => p.featured) && (
            <div class="mb-16">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
                <FeaturedProjectCard key={project.slug} project={project} />
            ))}
            </div>
            </div>
        )}

        {/* All Projects Section */}
        <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-8">All Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.filter(p => !p.featured).map((project) => (
            <ProjectCard key={project.slug} project={project} />
        ))}
        </div>
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
            <div class="text-center py-12">
            <p class="text-gray-600">No projects yet. Check back soon!</p>
            </div>
        )}
        </main>
        </div>
        </Layout>
    );
}

function FeaturedProjectCard({ project }: { project: Project }) {
    return (
        <article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        {project.thumbnail && (
            <div class="aspect-video w-full overflow-hidden">
            <img 
            src={project.thumbnail} 
            alt={`${project.title} thumbnail`}
            class="w-full h-full object-cover"
            />
            </div>
        )}
        <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-3">
        <a href={`/projects/${project.slug}`} class="hover:text-gray-600">
        {project.title}
        </a>
        </h3>
        <p class="text-gray-600 mb-4">
        {project.description}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
            <span 
            key={tech} 
            class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
            {tech}
            </span>
        ))}
        </div>
        <div class="flex items-center space-x-4">
        {project.githubUrl && (
            <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center text-gray-600 hover:text-gray-900"
            >
            <CustomIcon name="github" size={24} className="mr-2" />
            <span class="ml-1">Repository</span>
            </a>
        )}
        {project.liveUrl && (
            <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center text-gray-600 hover:text-gray-900"
            >
            <CustomIcon name="globe" size={24} className="mr-2" />
            <span class="ml-1">Live Demo</span>
            </a>
        )}
        </div>
        </div>
        </article>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <div class="p-6">
        <h3 class="text-lg font-bold text-gray-900 mb-2">
        <a href={`/projects/${project.slug}`} class="hover:text-gray-600">
        {project.title}
        </a>
        </h3>
        <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {project.description}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
            <span 
            key={tech} 
            class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
            {tech}
            </span>
        ))}
        {project.technologies.length > 3 && (
            <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
            +{project.technologies.length - 3} more
            </span>
        )}
        </div>
        <div class="flex items-center space-x-3">
        {project.githubUrl && (
            <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-gray-900"
            >
            <CustomIcon name="github" size={24} className="mr-2" />
            </a>
        )}
        {project.liveUrl && (
            <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-gray-900"
            >
            <CustomIcon name="globe" size={24} className="mr-2" />
            </a>
        )}
        </div>
        </div>
        </article>
    );
}
