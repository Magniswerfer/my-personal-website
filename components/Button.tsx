import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type ButtonVariant = "primary" | "secondary" | "outline" | "light" ;

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", ...props }: ButtonProps) {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary: "bg-[#FF934F] hover:bg-[#A5668B] text-[#07090F] focus:ring-[#FF934F]",
    secondary: "bg-[#A5668B] hover:bg-[#07090F] text-[#EEE5E9] focus:ring-[#A5668B]",
    outline: "border-2 border-[#07090F] hover:bg-[#07090F] hover:text-[#EEE5E9] text-[#07090F] focus:ring-[#07090F]",
    light: "border-2 border-[#EEE5E9] hover:bg-[#EEE5E9] hover:text-[#07090F] text-[#EEE5E9] focus:ring-[#EEE5E9]"
  };

  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`${baseStyles} ${variants[variant]} ${props.class ?? ""}`}
    />
  );
}
