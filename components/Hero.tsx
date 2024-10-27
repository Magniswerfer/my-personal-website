import { NavLink } from "./NavLink.tsx";

export default function Hero() {
  return (
    <div class="relative h-[60vh] bg-neutral-500">
      {/* Hero Image */}
      <div class="absolute inset-0">
        <img
          src="/images/magnusHero_95.jpg"
          alt="Hero background"
          class="w-full h-full object-cover opacity-70"
        />
      </div>
      {/* Hero Content */}
      <div class="relative container mx-auto px-4 h-full">
        <div class="hero-content max-w-2xl flex flex-col justify-center items-end text-right h-full ml-auto">
          <h1
            class="
                        text-4xl 
                        md:text-4xl 
                        lg:text-6xl 
                        font-bold 
                        text-light-100
                        mb-4
                        leading-tight
                    "
          >
            Velkommen til mit digitale space!
          </h1>
          <p
            class="
                        text-xl 
                        text-neutral-800
                        mb-8
                        max-w-xl
                    "
          >
            Foredragsholder, Designer, Hacker og AI-Ekspert.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <NavLink
              href="/blog"
              variant="light"
              class="inline-flex items-center gap-2"
            >
              Læs min blog!
            </NavLink>
            <NavLink
              href="/contact"
              variant="primary"
              class="inline-flex items-center gap-2"
            >
              Book et foredag
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
