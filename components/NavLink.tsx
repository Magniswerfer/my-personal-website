// NavLink.tsx
import { JSX } from "preact";

interface NavLinkProps {
  href: string;
  class?: string;
  variant?: "primary" | "secondary" | "outline" | "light";
  children: JSX.Element | string | (JSX.Element | string)[];  // Changed this line
}

export function NavLink({ href, variant = "primary", class: className, children }: NavLinkProps) {
  const styles = {
    primary: "bg-primary-500 hover:bg-primary-700 text-light-100 focus:ring-secondary-500",
    secondary: "bg-secondary-500 hover:bg-secondary-700 text-light-100 focus:ring-primary-500",
    outline: "border-2 border-neutral-800 hover:bg-neutral-800 hover:text-secondary-100 hover:border-light-100 text-neutral-800 focus:ring-secondary-500",
    light: "border-2 border-neutral-100 hover:bg-neutral-100 hover:text-secondary-800 text-neutral-100 focus:ring-secondary-500",
  };

  return (
    <a 
      href={href} 
      class={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${styles[variant]} ${className || ""}`}
    >
      {children}
    </a>
  );
}
