import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPostSummaries } from "../utils/loadPosts.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import PageHeader from "../components/PageHeader.tsx";

interface BlogPost {
    title: string;
    date: string;
    summary: string;
    slug: string;
}

export const handler: Handlers = {
    async GET(_, ctx) {
        const posts = await loadPostSummaries();
        return ctx.render({ posts });
    },
};

export default function BlogPage({ data }: PageProps<{ posts: BlogPost[] }>) {
    const { posts } = data;

    // Function to format date
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <Layout title="Blog | Magnus H. Kaspersen">
        <div class="min-h-screen bg-gray-50">
        {/* Navbar with nav-item classes */}
        <Navbar />

        <PageHeader 
        title="Blog" 
        subtitle="Tanker og idéer om softwareudvikling, teknologi og alt derimellem"
        />

        {/* Blog Posts List */}
        <main class="container mx-auto px-4 py-12">
        <div class="space-y-8">
        {posts.map((post) => (
            <article 
            key={post.slug}
            class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
            <a 
            href={`/blog/${post.slug}`}
            class="block p-6 hover:text-inherit"
            >
            <div class="flex items-center text-sm text-gray-500 mb-2">
            <time datetime={post.date}>
            {formatDate(post.date)}
            </time>
            {/* You could add categories/tags here */}
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-600">
            {post.title}
            </h2>

            <p class="text-gray-600 line-clamp-2 mb-4">
            {post.summary}
            </p>

            <div class="flex items-center text-indigo-600 font-medium">
            Read more
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
            </div>
            </a>
            </article>
        ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
            <div class="text-center py-12">
            <p class="text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
        )} 
        </main>
        </div>
        </Layout>
    );
}

