// routes/contact.tsx
import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import PageHeader from "../components/PageHeader.tsx";
import CustomIcon from "../components/CustomIcons.tsx";

export default function ContactPage(_props: PageProps) {
  return (
    <Layout title="Contact | Magnus H. Kaspersen">
      <div class="min-h-screen bg-neutral-100">
        <Navbar />
        <PageHeader 
          title="Kontakt"
          subtitle="Lad os connecte og finde ud af, hvordan vi kan samarbejde!"
        />

        <main class="container mx-auto px-4 py-12">
          <div class="max-w-2xl mx-auto">
            {/* Contact Info Section */}
            <div class="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 class="text-2xl font-bold mb-6">
                Skriv til mig!
              </h2>
              <p class="text-gray-600 mb-8 max-w-lg mx-auto">
                Jeg elsker at høre om nye projekter og spændende muligheder! Tøv endelig ikke med at skrive til mig, hvis du har noget på hjerte. 
              </p>

              {/* Social Links */}
              <div class="space-y-6">
                <a
                  href="https://github.com/magniswerfer"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center space-x-3 hover:text-primary-600 transition-colors p-4 rounded-lg hover:bg-neutral-50"
                >
                  <CustomIcon name="github" size={24} />
                  <span class="font-medium">Følg mig på Github</span>
                </a>

                <a
                  href="https://linkedin.com/in/magnushoholt"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center space-x-3 hover:text-primary-600 transition-colors p-4 rounded-lg hover:bg-neutral-50"
                >
                  <CustomIcon name="linkedin" size={24} />
                  <span class="font-medium">Find mig på LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Additional Contact Methods */}
            <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-lg shadow-sm p-6 text-center">
                <h3 class="text-lg font-semibold mb-2">
                  Professionelle Henvendelser
                </h3>
                <p>
                    Ræk ud på LinkedIn for professionelle henvendelser.  
                </p>
              </div>

              <div class="bg-white rounded-lg shadow-sm p-6 text-center">
                <h3 class="text-lg font-semibold mb-2">
                  Open Source
                </h3>
                <p>
                  Kig på min GitHub for at se mine projekter.
                </p>
              </div>
            </div>

            {/* Future Contact Form Note */}
            <div class="mt-12 text-center">
              <p>
                Jeg arbejder på en ordentlig kontaktformular! Hav tålmodighed... Eller send mig en mail på magnus snabel-a creativeoak punktum dk
              </p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
