import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPostSummaries } from "../utils/loadPosts.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import PageHeader from "../components/PageHeader.tsx";
import BlogCard from "../components/BlogCard.tsx";  // Add this import

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
    
    return (
        <Layout title="Blog | Magnus H. Kaspersen">
            <div class="min-h-screen bg-neutral-100">
                <Navbar />
                <PageHeader 
                    title="Blog" 
                    subtitle="Tanker og idéer om design, AI, digital teknologi og alt derimellem"
                />
                <main class="container mx-auto px-4 py-4">
                    <div class="space-y-8">
                        {posts.map((post) => (
                            <BlogCard
                                key={post.slug}
                                {...post}
                            />
                        ))}
                    </div>
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
