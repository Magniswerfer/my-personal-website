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

export default function ProjectsPage({
    data,
}: PageProps<{ projects: Project[] }>) {
    const { projects } = data;

    return (
        <Layout title="Projects | Magnus H. Kaspersen">
        <div class="min-h-screen bg-neutral-100">
        <Navbar />
        <PageHeader
        title="Projekter"
        subtitle="Her er en samling af mine projekter. Jeg håber du finder noget spændende!"
        />

        <main class="container mx-auto px-4 py-12">
        {/* Featured Projects Section */}
        {projects.some((p) => p.featured) && (
            <div class="mb-16">
            <h2 class="text-2xl font-bold mb-8">Udvalgte Projekter</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
                .filter((p) => p.featured)
                .map((project) => (
                    <FeaturedProjectCard key={project.slug} project={project} />
                ))}
                </div>
                </div>
        )}

        {/* All Projects Section */}
        <div>
        <h2 class="text-2xl font-bold mb-8">Alle Projekter</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
            .map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}
            </div>
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
                <div class="text-center py-12">
                <p>No projects yet. Check back soon!</p>
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
        <h3 class="text-xl font-bold mb-3">
        <a href={`/projects/${project.slug}`} class="hover:text-primary-600">
        {project.title}
        </a>
        </h3>
        <p class="mb-4">{project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
            <span
            key={tech}
            class="px-3 py-1 bg-secondary-100 rounded-full text-sm"
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
            class="flex items-center hover:text-primary-600"
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
            class="flex items-center hover:text-primary-600"
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
        <h3 class="text-lg font-bold mb-2">
        <a href={`/projects/${project.slug}`} class="hover:text-gray-600">
        {project.title}
        </a>
        </h3>
        <p class="text-sm mb-4 line-clamp-2">
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
