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
  description = "Personal website and blog",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener("DOMContentLoaded", function() {
                requestAnimationFrame(() => {
                    document.documentElement.classList.add('ready');
                });
            });
            `,
          }}
        />
      </Head>
      <div
        class="
            flex 
            flex-col 
            min-h-screen 
            bg-neutral-200 
            text-neutral-800
            antialiased
            selection:bg-accent-500
            selection:text-light-500
            "
      >
        <main
          class="
            flex-grow 
            w-full 
            max-w-6xl 
            mx-auto 
            xl:my-8
            "
        >
          <div
            class="
            bg-white
            border
            border-light-100
            xl:rounded-lg
            xl:overflow-hidden
            "
          >
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
