import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/products";

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-background p-8 lg:p-10 rounded-sm hover-lift">
              <Quote className="w-8 h-8 text-accent/30 mb-6" />
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm lg:text-base">"{t.content}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <div>
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
