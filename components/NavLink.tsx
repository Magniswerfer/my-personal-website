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
    primary: "bg-[#FF934F] hover:bg-[#A5668B] text-[#07090F] focus:ring-[#FF934F]",
    secondary: "bg-[#A5668B] hover:bg-[#07090F] text-[#EEE5E9] focus:ring-[#A5668B]",
    outline: "border-2 border-[#07090F] hover:bg-[#07090F] hover:text-[#EEE5E9] text-[#07090F] focus:ring-[#07090F]",
    light: "border-2 border-[#EEE5E9] hover:bg-[#EEE5E9] hover:text-[#07090F] text-[#EEE5E9] focus:ring-[#EEE5E9]"
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
