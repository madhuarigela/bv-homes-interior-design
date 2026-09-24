import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories, products } from "@/data/products";

const CategoryShowcase = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">Curated Collections</p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className={`group relative overflow-hidden rounded-sm ${
                idx === 0 ? "col-span-2 lg:col-span-2 row-span-2 min-h-[400px] lg:min-h-[500px]" : "min-h-[200px] lg:min-h-[280px]"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-8">
                <h3 className="font-display text-lg lg:text-2xl font-semibold text-background mb-1">{cat.name}</h3>
                <div className="flex items-center gap-2 text-background/70 text-xs tracking-wider uppercase">
                  <span>{products.filter((product) => product.category === cat.slug).length} items</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
