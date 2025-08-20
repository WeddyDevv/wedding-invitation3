import CountdownTimer from "./CountdownTimer";
import couplePhoto from "@/assets/couple-photo.jpg";
import plumeriaFlowers from "@/assets/plumeria-flowers.png";

const HeroSection = () => {
  return (
    <section className="w-full px-6 py-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0">
            {/* Decorative heart line */}
            <div className="mb-8">
              <svg
                width="250"
                height="50"
                viewBox="0 0 250 50"
                className="mx-auto lg:mx-0"
              >
                {/* Heart shape */}
                <path
                  d="M50 25 C50 15, 35 10, 25 20 C15 10, 0 15, 0 25 C0 35, 25 50, 25 50 C25 50, 50 35, 50 25 Z"
                  fill="hsl(var(--wedding-pink))"
                  opacity="0.8"
                />
                {/* Decorative curved line extending from heart */}
                <path
                  d="M55 25 Q 100 15, 150 25 Q 200 35, 240 25"
                  stroke="hsl(var(--wedding-pink))"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                {/* Small decorative dots */}
                <circle cx="160" cy="20" r="2" fill="hsl(var(--wedding-pink))" opacity="0.6"/>
                <circle cx="180" cy="30" r="1.5" fill="hsl(var(--wedding-pink))" opacity="0.5"/>
                <circle cx="200" cy="22" r="1" fill="hsl(var(--wedding-pink))" opacity="0.4"/>
              </svg>
            </div>

            {/* Couple Names */}
            <h1 className="text-5xl lg:text-7xl font-dancing font-bold mb-6">
              <span className="text-primary"> Talha</span>
              <span className="text-wedding-pink mx-4">&</span>
              <span className="text-primary">Ariba</span>
            </h1>

            {/* Wedding Date */}
            <p className="text-xl font-inter text-muted-foreground mb-8 tracking-wide">
              WE ARE GETTING MARRIED DEC 8, 2026
            </p>

            {/* Countdown Timer */}
            <CountdownTimer />
          </div>

          {/* Right Content - Photo with Frame */}
          <div className="flex-1 relative px-4 lg:px-0">
            <div className="relative max-w-sm sm:max-w-md mx-auto">
              {/* Pink frame background */}
              <div className="absolute inset-0 bg-wedding-pink-light rounded-lg transform rotate-1"></div>
              
              {/* Main photo container */}
              <div className="relative bg-white p-4 rounded-lg shadow-lg transform -rotate-1">
                <img
                  src={couplePhoto}
                  alt="Alexander and Jenny"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>

              {/* Decorative flowers - top right */}
              <div className="absolute -top-8 -right-8 w-32 h-32 opacity-80">
                <img
                  src={plumeriaFlowers}
                  alt="Decorative flowers"
                  className="w-full h-full object-contain transform rotate-12"
                />
              </div>

              {/* Decorative flowers - bottom left */}
              <div className="absolute -bottom-8 -left-8 w-28 h-28 opacity-70">
                <img
                  src={plumeriaFlowers}
                  alt="Decorative flowers"
                  className="w-full h-full object-contain transform -rotate-45"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;