import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const TrendingSection = () => {
  const trending = products.filter((p) => p.trending);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">Most Loved</p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold">Trending Now</h2>
        </div>

        <div className="space-y-6">
          {trending.slice(0, 3).map((product, idx) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group flex flex-col md:flex-row items-center gap-6 lg:gap-12 p-6 rounded-sm hover:bg-warm transition-colors duration-300">
              <div className="w-full md:w-40 lg:w-52 aspect-square overflow-hidden rounded-sm flex-shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-accent text-xs tracking-[0.2em] uppercase">#{idx + 1} Trending</span>
                <h3 className="font-display text-xl lg:text-2xl font-semibold mt-1 mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm max-w-lg">{product.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
