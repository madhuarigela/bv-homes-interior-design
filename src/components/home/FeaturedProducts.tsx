import { Star } from "lucide-react";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="py-20 lg:py-28 bg-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">Handpicked</p>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold">Featured Furniture</h2>
          </div>
          <a href="/shop" className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">View All →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group hover-lift">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-card mb-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {product.badge && <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-[10px] tracking-wider uppercase font-medium rounded-sm">{product.badge}</span>}
              </div>
              <div>
                <p className="text-[10px] tracking-wider uppercase text-muted-foreground mb-1">{product.material}</p>
                <h3 className="font-display text-base font-medium mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`} />)}
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
