import { Handlers, PageProps } from "$fresh/server.ts";
import { loadProject, Project } from "../../utils/loadProjects.ts";
import Layout from "../../components/Layout.tsx";
import Navbar from "../../islands/Navbar.tsx";
import PageHeader from "../../components/PageHeader.tsx";
import CustomIcon from "../../components/CustomIcons.tsx";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const { slug } = ctx.params;
        const project = await loadProject(slug);
        if (!project) {
            return new Response("Project not found", { status: 404 });
        }
        return ctx.render(project);
    },
};

export default function ProjectPage({ data }: PageProps<Project>) {
    const { 
        title, 
        description, 
        technologies, 
        githubUrl, 
        liveUrl, 
        thumbnail,
        content 
    } = data;

    return (
        <Layout title={`${title} | Magnus H. Kaspersen`}>
            <Navbar />
            <PageHeader 
                title={title}
                subtitle={description}
            />

            {/* Project Links and Technologies */}
            <div class="container mx-auto px-4 py-6">
                <div class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
                    {/* Project Links */}
                    <div class="flex items-center gap-4">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-light-100 rounded-lg hover:bg-neutral-600 transition-colors"
                            >
                            
                                <CustomIcon name="github" size={24} class-name="mr-2" />
                                <span>Gå til Repository</span>
                            </a>
                        )}
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center gap-2 px-4 py-2 bg-secondary-500 text-light-100 rounded-lg hover:bg-secondary-800 transition-colors"
                            >
                                <CustomIcon name="globe" size={24} class-name="mr-2" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>

                    {/* Technologies */}
                    <div class="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                class="px-3 py-1 bg-secondary-100 text-neutral-800 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Content */}
            <main class="container mx-auto px-4">
                {thumbnail && (
                    <div class="mb-8 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={thumbnail}
                            alt={`${title} thumbnail`}
                            class="w-full h-auto"
                        />
                    </div>
                )}
                
                <article
                    class="prose prose-slate max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </main>

            {/* Back to Projects Link */}
            <div class="container mx-auto px-4 py-12">
                <a 
                    href="/projects"
                    class="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                    <svg 
                        class="w-4 h-4 mr-2" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back to Projects
                </a>
            </div>
        </Layout>
    );
}
