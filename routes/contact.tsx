// routes/contact.tsx
import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import PageHeader from "../components/PageHeader.tsx";
import CustomIcon from "../components/CustomIcons.tsx";

export default function ContactPage(_props: PageProps) {
  return (
    <Layout title="Contact | Magnus H. Kaspersen">
      <div class="min-h-screen bg-gray-50">
        <Navbar />
        <PageHeader 
          title="Contact"
          subtitle="Let's connect and discuss opportunities for collaboration"
        />

        <main class="container mx-auto px-4 py-12">
          <div class="max-w-2xl mx-auto">
            {/* Contact Info Section */}
            <div class="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p class="text-gray-600 mb-8 max-w-lg mx-auto">
                I'm always interested in hearing about new projects and opportunities. 
                Feel free to reach out through any of the platforms below.
              </p>

              {/* Social Links */}
              <div class="space-y-6">
                <a
                  href="https://github.com/magniswerfer"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors p-4 rounded-lg hover:bg-gray-50"
                >
                  <CustomIcon name="github" size={24} />
                  <span class="font-medium">Follow me on GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/magnushoholt"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors p-4 rounded-lg hover:bg-gray-50"
                >
                  <CustomIcon name="linkedin" size={24} />
                  <span class="font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Additional Contact Methods */}
            <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-lg shadow-sm p-6 text-center">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  Professional Inquiries
                </h3>
                <p class="text-gray-600">
                  For job opportunities and professional collaborations, 
                  please reach out on LinkedIn.
                </p>
              </div>

              <div class="bg-white rounded-lg shadow-sm p-6 text-center">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  Open Source
                </h3>
                <p class="text-gray-600">
                  Interested in my open source work? Check out my 
                  projects on GitHub.
                </p>
              </div>
            </div>

            {/* Future Contact Form Note */}
            <div class="mt-12 text-center text-gray-600">
              <p>
                A contact form will be added soon. In the meantime, 
                please reach out through social media.
              </p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
