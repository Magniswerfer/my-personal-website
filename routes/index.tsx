import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import BlogCard from "../components/BlogCard.tsx";
import { loadPostSummaries } from "../utils/loadPosts.ts";
import { loadProjectSummaries, Project } from "../utils/loadProjects.ts";
import CustomIcon from "../components/CustomIcons.tsx";

interface Post {
    title: string;
    date: string;
    summary: string;
    slug: string;
}

interface HomeProps {
    posts: Post[];
    featuredProjects: Project[];
}

export const handler: Handlers<HomeProps> = {
    async GET(_, ctx) {
        const [allPosts, allProjects] = await Promise.all([
            loadPostSummaries(),
            loadProjectSummaries(),
        ]);

        const latestPosts = allPosts.slice(0, 3); // Get only the 3 latest posts
        const featuredProjects = allProjects.filter(project => project.featured).slice(0, 2); // Get up to 2 featured projects

        return ctx.render({ posts: latestPosts, featuredProjects });
    },
};

function FeaturedProjectCard({ project }: { project: Project }) {
    return (
        <article class="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
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
            class="px-3 py-1 bg-white text-gray-600 rounded-full text-sm"
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

export default function Home({ data }: PageProps<HomeProps>) {
    const { posts, featuredProjects } = data;

    return (
        <Layout
        title="Magnus H. Kaspersen - Software Developer"
        description="Personal website of Magnus H. Kaspersen - Software Developer, Writer, and Technology Enthusiast"
        >
        <div class="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />



        {/* Featured Blog Posts Section */}
        <section class="py-16">
        <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
            <BlogCard
            key={post.slug}
            title={post.title}
            summary={post.summary}
            date={post.date}
            slug={post.slug}
            />
        ))}
        </div>
        <div class="mt-8 text-center">
        <a 
        href="/blog" 
        class="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
        >
        View all posts
        <svg 
        class="w-4 h-4 ml-1" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        >
        <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        </a>
        </div>
        </div>
        </section>

        {/* Featured Projects Section */}
        <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
        ))}
        </div>
        <div class="mt-8 text-center">
        <a 
        href="/projects" 
        class="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
        >
        View all projects
        <svg 
        class="w-4 h-4 ml-1" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        >
        <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        </a>
        </div>
        </div>
        </section>

        {/* Contact/Connect Section */}
        <section class="py-16">
        <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
        I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
        </p>
        <a
        href="/contact"
        class="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
        Get in Touch
        </a>
        </div>
        </section>
        </div>
        </Layout>
    );
}
