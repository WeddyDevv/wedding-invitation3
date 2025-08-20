import plumeriaFlowers from "@/assets/plumeria-flowers.png";
import lovebirdIcon from "@/assets/lovebird-icon.png";

const WeddingDuaSection = () => {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-background to-wedding-pink-light/10 relative overflow-hidden">
      {/* Background Decorative Flowers */}
      <div className="absolute top-8 left-8 w-16 h-16 opacity-5 pointer-events-none">
        <img
          src={plumeriaFlowers}
          alt=""
          className="w-full h-full object-contain transform rotate-12"
        />
      </div>
      <div className="absolute bottom-12 right-12 w-20 h-20 opacity-5 pointer-events-none">
        <img
          src={plumeriaFlowers}
          alt=""
          className="w-full h-full object-contain transform -rotate-45"
        />
      </div>
      <div className="absolute top-1/3 right-8 w-12 h-12 opacity-8 pointer-events-none">
        <img
          src={plumeriaFlowers}
          alt=""
          className="w-full h-full object-contain transform rotate-90"
        />
      </div>
      <div className="absolute bottom-1/4 left-12 w-14 h-14 opacity-6 pointer-events-none">
        <img
          src={plumeriaFlowers}
          alt=""
          className="w-full h-full object-contain transform -rotate-30"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          {/* Decorative line and heart */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 sm:w-24 h-px bg-wedding-pink opacity-60"></div>
            <div className="mx-4">
              <img src={lovebirdIcon} alt="" className="w-8 h-8 opacity-80" />
            </div>
            <div className="w-16 sm:w-24 h-px bg-wedding-pink opacity-60"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-dancing font-bold text-foreground mb-4">
            Wedding Dua
          </h2>
        </div>

        {/* Dua Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16 mx-4 relative overflow-hidden border border-wedding-pink/20">
          {/* Decorative flowers on card corners */}
          <div className="absolute top-4 left-4 w-8 h-8 opacity-15 pointer-events-none">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform rotate-12"
            />
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 opacity-15 pointer-events-none">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform -rotate-12"
            />
          </div>
          <div className="absolute bottom-4 left-4 w-8 h-8 opacity-15 pointer-events-none">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform -rotate-45"
            />
          </div>
          <div className="absolute bottom-4 right-4 w-8 h-8 opacity-15 pointer-events-none">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform rotate-45"
            />
          </div>

          {/* Dua Text */}
          <div className="relative z-10">
            <div className="text-wedding-pink text-4xl sm:text-5xl mb-4 font-dancing">"</div>
            <p className="text-lg sm:text-xl lg:text-2xl font-playfair text-foreground leading-relaxed mb-6 italic">
              May Allah bless this marriage, grant it barakah, fill it with love, mercy, and understanding, and unite our hearts in obedience to Him.
            </p>
            <div className="text-wedding-pink text-4xl sm:text-5xl mb-6 font-dancing flex justify-end">"</div>
            
            {/* Ameen */}
            <div className="flex justify-center items-center gap-3 mt-8">
              <div className="w-12 h-px bg-wedding-pink/50"></div>
              <p className="text-lg sm:text-xl font-playfair text-muted-foreground italic">
                Ameen.
              </p>
              <div className="w-12 h-px bg-wedding-pink/50"></div>
            </div>
          </div>
        </div>

        {/* Decorative elements below card */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="w-3 h-3 rounded-full bg-wedding-pink/30"></div>
          <div className="w-2 h-2 rounded-full bg-wedding-pink/50"></div>
          <div className="w-4 h-4 rounded-full bg-wedding-pink/40"></div>
          <div className="w-2 h-2 rounded-full bg-wedding-pink/50"></div>
          <div className="w-3 h-3 rounded-full bg-wedding-pink/30"></div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDuaSection;