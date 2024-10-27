// components/Layout.tsx
import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import Footer from "./Footer.tsx";

interface LayoutProps {
    children: ComponentChildren;
    title?: string;
    description?: string;
}

export default function Layout({ 
    children, 
    title = "Magnus H. Kaspersen", 
        description = "Personal website and blog" 
}: LayoutProps) {
    return (
        <>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script dangerouslySetInnerHTML={{ __html: `
            document.addEventListener("DOMContentLoaded", function() {
                requestAnimationFrame(() => {
                    document.documentElement.classList.add('ready');
                });
            });
            `}} />
            </Head>
            <div class="
            flex 
            flex-col 
            min-h-screen 
            bg-[#F5F5F5] 
            text-[#07090F]
            antialiased
            selection:bg-[#FF934F] 
            selection:text-[#07090F]
            ">
            <main class="
            flex-grow 
            w-full 
            max-w-7xl 
            mx-auto 
            lg:my-8
            ">
            <div class="
            bg-white
            border
            border-[#7C7C7C]/10
            lg:rounded-lg
            lg:overflow-hidden
            ">
            {children}
            </div>
            </main>
            <Footer />
            </div> 
            </>
    );
}
