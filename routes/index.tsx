import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import BlogCard from "../components/BlogCard.tsx";
import { loadPostSummaries } from "../utils/loadPosts.ts";

interface Post {
  title: string;
  date: string;
  summary: string;
  slug: string;
}

interface HomeProps {
  posts: Post[];
}


export const handler: Handlers<HomeProps> = {
  async GET(_, ctx) {
    const allPosts = await loadPostSummaries();
    const latestPosts = allPosts.slice(0, 3); // Get only the 3 latest posts
    return ctx.render({ posts: latestPosts });
  },
};

export default function Home({ data }: PageProps<HomeProps>) {
  const { posts } = data;
  
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
            {/* Add your project cards here */}
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

