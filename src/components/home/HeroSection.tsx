import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury living room interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-2xl">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            New Collection 2026
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-background leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Where Luxury
            <br />
            Meets <span className="italic font-normal">Living</span>
          </h1>
          <p className="text-background/70 text-base lg:text-lg max-w-lg mb-10 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            Discover handcrafted furniture that transforms spaces into sanctuaries. Each piece is a testament to timeless design and exceptional artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="/shop"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-accent/90 transition-all duration-300 group"
            >
              Explore Items
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/shop?category=sofas"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-background/30 text-background text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-background/10 transition-all duration-300"
            >
              Buy Sofa
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/50">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-background/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
