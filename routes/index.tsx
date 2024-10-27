import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import BlogCard from "../components/BlogCard.tsx";
import { loadPostSummaries } from "../utils/loadPosts.ts";
import { loadProjectSummaries, Project } from "../utils/loadProjects.ts";
import CustomIcon from "../components/CustomIcons.tsx";
import { Button } from "../components/Button.tsx";
import { NavLink } from "../components/NavLink.tsx";

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
    const featuredProjects = allProjects
      .filter((project) => project.featured)
      .slice(0, 2); // Get up to 2 featured projects

    return ctx.render({ posts: latestPosts, featuredProjects });
  },
};

export default function Home({ data }: PageProps<HomeProps>) {
  const { posts, featuredProjects } = data;

  return (
    <Layout
      title="Magnus H. Kaspersen - Software Developer"
      description="Personal website of Magnus H. Kaspersen - Software Developer, Writer, and Technology Enthusiast"
    >
      <div class="min-h-screen bg-neutral-100">
        <Navbar />
        <Hero />

        {/* Featured Blog Posts Section */}
        <section class="py-16">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8">
              Seneste Posts
            </h2>
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
              <NavLink
                href="/blog"
                variant="primary"
                class="inline-flex items-center gap-2"
              >
                Alle posts
              </NavLink>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section class="py-16 bg-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8">
              Udvalgte Projekter
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div class="mt-8 text-center">
              <NavLink
                href="/projects"
                variant="primary"
                class="inline-flex items-center gap-2"
              >
                Se alle projekter
              </NavLink>
            </div>
          </div>
        </section>

        {/* Contact/Connect Section */}
        <section class="py-16">
          <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-4">
              Lad os snakke!
            </h2>
            <p class=" mb-8 max-w-2xl mx-auto">
              Jeg er altid interesseret i at høre om nye projekter og
              mulihedheder. Du må endelig bare skrive!
            </p>
            <NavLink
              href="/contact"
              variant="secondary"
              class="inline-flex items-center gap-2"
            >
              Skriv til mig!
            </NavLink>
          </div>
        </section>
      </div>
    </Layout>
  );
}

// Update FeaturedProjectCard component
function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article class="bg-primary-light rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
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
          <a
            href={`/projects/${project.slug}`}
            class="hover:text-primary-600"
          >
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
              class="flex items-center text-neutral-500 hover:text-primary-500"
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
              class="flex items-center text-primary-gray hover:text-primary-dark"
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
