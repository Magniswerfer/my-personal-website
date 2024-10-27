import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost } from "../../utils/loadPosts.ts";
import Layout from "../../components/Layout.tsx";
import Navbar from "../../islands/Navbar.tsx";
import PageHeader from "../../components/PageHeader.tsx";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const { slug } = ctx.params;
        const post = await loadPost(slug);
        if (!post) {
            return new Response("Post not found", { status: 404 });
        }
        return ctx.render(post);
    },
};

export default function PostPage({ data }: PageProps) {
    const { title, date, summary, content } = data;
    return (
        <Layout title={`${title} | Magnus H. Kaspersen`}>
            <Navbar />
            <PageHeader 
                title={title}
                subtitle={summary}
                date={date}
            />
            <main class="container mx-auto px-4 mb-4 min-h-screen">
                <article
                    class="prose prose-slate max-w-none mt-8" 
                    dangerouslySetInnerHTML={{ __html: content }} 
                />
            </main>
        </Layout>
    );
}

