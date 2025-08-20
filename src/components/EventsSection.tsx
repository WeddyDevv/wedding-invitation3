import plumeriaFlowers from "@/assets/plumeria-flowers.png";
import lovebirdIcon from "@/assets/lovebird-icon.png";
import { MapPin, Phone } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "The Nikha",
      date: "Monday, 25 Sep, 2022",
      time: "1:00 PM - 4:30 PM",
      venue: "Estern Star Plaza, Road 123, USA",
      phone: "+1 234-567-8910"
    },
    {
      id: 2,
      title: "The Reception", 
      date: "Monday, 25 Sep, 2022",
      time: "1:00 PM - 4:30 PM",
      venue: "Estern Star Plaza, Road 123, USA",
      phone: "+1 234-567-8910"
    },
    {
      id: 3,
      title: "Dinner",
      date: "Monday, 25 Sep, 2022", 
      time: "1:00 PM - 4:30 PM",
      venue: "Estern Star Plaza, Road 123, USA",
      phone: "+1 234-567-8910"
    }
  ];

  return (
    <section className="w-full relative">
      {/* Pink Background Section with Floral Overlay */}
      <div 
        className="w-full h-80 sm:h-96 relative bg-wedding-pink-light flex items-center justify-center"
        style={{
          backgroundImage: `url(${plumeriaFlowers})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Pink overlay */}
        {/* <div className="absolute inset-0 bg-wedding-pink-soft opacity-80"></div>/ */}
        
        {/* Content */}
        <div className="relative z-10 text-center text-black">
          {/* Decorative line and bird */}
          <div className="flex justify-center items-center mb-6">
            {/* <div className="w-16 h-px bg-white opacity-70"></div> */}
            {/* <div className="mx-4">
              <img src={lovebirdIcon} alt="" className="w-10 h-10 opacity-90 filter brightness-0 invert" />
            </div> */}
            {/* <div className="w-16 h-px bg-white opacity-70"></div> */}
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-dancing font-bold">
            When & Where
          </h2>
        </div>
      </div>

      {/* Event Cards */}
      <div className="relative -mt-32 z-20 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-xl p-8 text-center relative overflow-hidden"
              >
                {/* Decorative corner flowers */}
                <div className="absolute top-2 right-2 w-6 h-6 opacity-20">
                  <img
                    src={plumeriaFlowers}
                    alt=""
                    className="w-full h-full object-contain transform rotate-12"
                  />
                </div>
                <div className="absolute bottom-2 left-2 w-5 h-5 opacity-15">
                  <img
                    src={plumeriaFlowers}
                    alt=""
                    className="w-full h-full object-contain transform -rotate-45"
                  />
                </div>

                {/* Event Title */}
                <h3 className="text-2xl sm:text-3xl font-dancing font-bold text-primary mb-4">
                  {event.title}
                </h3>

                {/* Decorative divider */}
                <div className="flex justify-center mb-6">
                  <svg width="60" height="20" viewBox="0 0 60 20" className="opacity-60">
                    <path
                      d="M5 10 Q15 5, 25 10 Q35 15, 45 10 Q50 8, 55 10"
                      stroke="hsl(var(--wedding-pink))"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx="30" cy="10" r="2" fill="hsl(var(--wedding-pink))" />
                  </svg>
                </div>

                {/* Event Details */}
                <div className="space-y-4 text-muted-foreground">
                  <p className="font-inter text-sm font-medium">
                    {event.date}
                  </p>
                  <p className="font-inter text-sm font-semibold text-primary">
                    {event.time}
                  </p>
                  
                  <div className="flex items-start justify-center gap-2 mt-4">
                    <MapPin size={16} className="text-wedding-pink mt-1 flex-shrink-0" />
                    <p className="font-inter text-sm leading-relaxed">
                      {event.venue}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <Phone size={16} className="text-wedding-pink" />
                    <p className="font-inter text-sm">
                      {event.phone}
                    </p>
                  </div>

                  {/* See Location Button */}
                  <button className="mt-6 text-wedding-pink font-inter text-sm font-medium hover:text-primary transition-colors duration-200 border-b border-wedding-pink hover:border-primary">
                    See Location
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Logos Section */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-8 lg:gap-12 opacity-40">
            {/* Decorative brand-style logos */}
            <div className="text-2xl font-dancing text-muted-foreground">
              Bakers
            </div>
            <div className="text-xl font-playfair text-muted-foreground italic">
              Sweet Macarons
            </div>
            <div className="text-lg font-dancing text-muted-foreground">
              Carousel
            </div>
            <div className="text-xl font-playfair text-muted-foreground">
              Joy Wedding
            </div>
            <div className="text-lg font-dancing text-muted-foreground italic">
              pure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;