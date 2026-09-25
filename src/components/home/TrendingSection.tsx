import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const TrendingSection = () => {
  const trending = products.filter((p) => p.trending);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">Explore the Collection</p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold">Explore Furniture</h2>
        </div>

        <div className="space-y-6">
          {trending.slice(0, 3).map((product) => (
            <a key={product.id} href={`/product/${product.id}`} className="group flex flex-col md:flex-row items-center gap-6 lg:gap-12 p-6 rounded-sm hover:bg-warm transition-colors duration-300">
              <div className="w-full md:w-40 lg:w-52 aspect-square overflow-hidden rounded-sm flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-xl lg:text-2xl font-semibold mt-1 mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm max-w-lg">{product.description}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-xs tracking-wider uppercase text-accent">
                  View details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
