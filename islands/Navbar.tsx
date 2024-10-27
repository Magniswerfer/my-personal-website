import { useState } from "preact/hooks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <nav class="bg-white shadow-sm relative">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          {/* Logo/Home link */}
          <a
            href="/"
            class="font-bold text-xl text-neutral-800 hover:text-primary-600"
          >
            Magnus H. Kaspersen
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            class="md:hidden p-2 rounded-md text-neutral-800 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Navigation Links */}
          <div class="hidden md:flex space-x-8 text-neutral-700 ">
            <a href="/blog" class="hover:text-primary-600 transition-colors">
              Blog
            </a>
            <a
              href="/projects"
              class="hover:text-primary-600 transition-colors"
            >
              Projekter
            </a>
            <a href="/about" class="hover:text-primary-600 transition-colors">
              Om Magnus
            </a>
            <a href="/contact" class="hover:text-primary-600 transition-colors">
              Kontakt
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          class={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 right-0 bg-white shadow-md transition-all duration-200 ease-in-out z-50`}
        >
          <div class="flex flex-col space-y-4 px-4 py-6 text-neutral-600">
            <a href="/blog" class=" hover:text-primary-600 transition-colors">
              Blog
            </a>
            <a
              href="/projects"
              class="hover:text-primary-600 transition-colors"
            >
              Projects
            </a>
            <a href="/about" class="hover:text-primary-600 transition-colors">
              About
            </a>
            <a href="/contact" class="hover:text-primary-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
