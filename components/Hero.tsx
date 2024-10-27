import { Button } from "../components/Button.tsx"; // Adjust the import path as needed

export default function Hero() {
    return (
        <div class="relative h-[60vh] bg-[#07090F]">
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
                <div class="hero-content flex flex-col justify-center h-full max-w-2xl">
                    <h1 class="
                        text-4xl 
                        md:text-5xl 
                        lg:text-6xl 
                        font-bold 
                        text-[#EEE5E9] 
                        mb-4
                        leading-tight
                    ">
                        Welcome to My Digital Space
                    </h1>
                    
                    <p class="
                        text-xl 
                        text-[#EEE5E9]/90 
                        mb-8
                        max-w-xl
                    ">
                        Software Developer, Writer, and Technology Enthusiast
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <Button
                            variant="primary"
                            onClick={() => window.location.href = '/blog'}
                            class="w-full sm:w-auto text-center"
                        >
                            Read My Blog
                        </Button>

                        <Button
                            variant="light"
                            onClick={() => window.location.href = '/projects'}
                            class="w-full sm:w-auto text-center"
                        >
                            View Projects
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
