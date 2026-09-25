import { ArrowRight } from "lucide-react";
import categoryBedroom from "@/assets/category-bedroom.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import heroImage from "@/assets/hero-living-room.jpg";

const InspirationSection = () => {
  const rooms = [
    { image: heroImage, label: "Living Room", href: "/shop?category=sofas" },
    { image: categoryBedroom, label: "Bedroom", href: "/shop?category=beds" },
    { image: categoryDining, label: "Dining", href: "/shop?category=dining" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">Browse by Room</p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold">Find Your Furniture</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            Explore furniture collections for living rooms, bedrooms and dining spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {rooms.map((room) => (
            <a key={room.label} href={room.href} className="group relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={room.image}
                alt={room.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <span className="inline-block px-4 py-2 glass-card rounded-sm text-sm font-medium">
                  {room.label}
                </span>
                <ArrowRight className="w-5 h-5 text-background" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
