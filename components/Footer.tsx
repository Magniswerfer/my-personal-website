// components/Footer.tsx
import CustomIcon from "./CustomIcons.tsx";

export default function Footer() {
  return (
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Name/Brand Section */}
          <div class="md:col-span-2">
            <h3 class="font-bold text-xl text-gray-900 mb-4">Magnus H. Kaspersen</h3>
            <p class="text-gray-600 mb-4">
              Foredrag om AI, Design, Forskning og Hacking.
            </p>
            <div class="flex space-x-4">
              <a 
                href="https://github.com/magniswerfer" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-gray-900"
              >
                <CustomIcon name="github" size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/magnushoholt" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-gray-900"
              >
                <CustomIcon name="linkedin" size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Links</h4>
            <ul class="space-y-2">
              <li>
                <a href="/blog" class="text-gray-600 hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a href="/projects" class="text-gray-600 hover:text-gray-900">Projekter</a>
              </li>
              <li>
                <a href="/about" class="text-gray-600 hover:text-gray-900">Om Magnus</a>
              </li>

              <li>
                <a href="/contact" class="text-gray-600 hover:text-gray-900">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div class="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Magnus H. Kaspersen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
