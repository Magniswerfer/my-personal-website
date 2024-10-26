import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

interface LayoutProps {
  children: ComponentChildren;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = "Magnus H. Kaspersen", description = "Personal website and blog" }: LayoutProps) {
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
      {children}
    </>
  );
}
