import { Link } from "react-router-dom";
import categoryBedroom from "@/assets/category-bedroom.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import heroImage from "@/assets/hero-living-room.jpg";

const InspirationSection = () => {
  const rooms = [
    { image: heroImage, label: "Modern Living Room" },
    { image: categoryBedroom, label: "Serene Bedroom" },
    { image: categoryDining, label: "Elegant Dining" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">Get Inspired</p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold">Interior Inspiration</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            Explore curated room designs crafted by our interior stylists to spark your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {rooms.map((room) => (
            <Link key={room.label} to={room.label.includes("Bedroom") ? "/shop?category=beds" : room.label.includes("Dining") ? "/shop?category=dining" : "/shop?category=sofas"} className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer">
              <img
                src={room.image}
                alt={room.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-4 py-2 glass-card rounded-sm text-sm font-medium">
                  {room.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
