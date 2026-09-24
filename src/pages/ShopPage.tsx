import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";

const sortOptions = [
  { label: "Popular", value: "popular" },
  { label: "Newest", value: "newest" },
];

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    const term = search.toLowerCase().trim();
    if (term) {
      result = result.filter((p) =>
        [p.name, p.material, p.style, p.color, p.category].some((value) =>
          value.toLowerCase().includes(term),
        ),
      );
    }

    if (sortBy === "newest") {
      result.reverse();
    } else {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [selectedCategory, search, sortBy]);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <h1 className="font-display text-3xl lg:text-5xl font-semibold mb-2">
              {selectedCategory
                ? categories.find((c) => c.slug === selectedCategory)?.name || "Shop"
                : "Shop All"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {filtered.length} pieces available · Prices shared privately on WhatsApp
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>

            <input
              type="text"
              placeholder="Search furniture..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 min-w-[200px] max-w-sm px-4 py-2 bg-warm border border-border rounded-sm text-sm focus:outline-none focus:border-accent"
              aria-label="Search furniture"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-warm border border-border rounded-sm text-sm focus:outline-none focus:border-accent"
              aria-label="Sort furniture"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {showFilters && (
            <div className="mb-8 p-6 bg-warm rounded-sm animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold">Categories</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  aria-label="Close filters"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`px-4 py-2 rounded-sm text-xs tracking-wider uppercase transition-colors ${!selectedCategory ? "bg-primary text-primary-foreground" : "bg-background border border-border hover:bg-warm-dark"}`}
                >
                  All
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-4 py-2 rounded-sm text-xs tracking-wider uppercase transition-colors ${selectedCategory === cat.slug ? "bg-primary text-primary-foreground" : "bg-background border border-border hover:bg-warm-dark"}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((product) => (
              <a
                key={product.id}
                href={`/product/${product.id}`}
                className="group hover-lift"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-card mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {product.badge?.toLowerCase() === "new" && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-[10px] tracking-wider uppercase font-medium rounded-sm">
                      New
                    </span>
                  )}
                </div>

                <p className="text-[10px] tracking-wider uppercase text-muted-foreground mb-1">
                  {product.material}
                </p>

                <h3 className="font-display text-sm lg:text-base font-medium mb-1 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>

                <span className="text-[10px] uppercase tracking-wider text-accent">
                  View details →
                </span>
              </a>
            ))}
          </div>

          {filtered.length > 0 && (
            <div className="mt-10 flex justify-center lg:hidden">
              <a
                href="https://wa.me/917702702888?text=Hi%20BVHome%20Furnitures%2C%20I%27d%20like%20help%20choosing%20furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Ask on WhatsApp
              </a>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display text-xl mb-2">No furniture found</p>
              <p className="text-muted-foreground text-sm">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShopPage;
