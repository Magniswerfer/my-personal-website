export default function Hero() {
  return (
    <div class="relative h-[60vh] bg-gray-900">
      {/* Hero Image */}
      <div class="absolute inset-0">
        <img
          src="/images/magnusHero_95.jpg"  // Replace with your actual hero image
          alt="Hero background"
          class="w-full h-full object-cover opacity-50"
        />
      </div>
      
      {/* Hero Content */}
      <div class="relative container mx-auto px-4 h-full">
        <div class="hero-content flex flex-col justify-center h-full max-w-2xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Welcome to My Digital Space
          </h1>
          <p class="text-xl text-gray-200 mb-8">
            Software Developer, Writer, and Technology Enthusiast
          </p>
          <div class="flex space-x-4">
            <a
              href="/blog"
              class="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Read My Blog
            </a>
            <a
              href="/projects"
              class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
