import { useMemo, useState } from "react";
import { SlidersHorizontal, X, MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products, categories } from "@/data/products";

const sortOptions = [
  { label: "Popular", value: "popular" },
  { label: "Newest", value: "newest" },
];

const ShopPage = () => {
  const initialCategory =
    new URLSearchParams(window.location.search).get("category") || "";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter((product) =>
      selectedCategory ? product.category === selectedCategory : true,
    );

    const term = search.trim().toLowerCase();

    if (term) {
      result = result.filter((product) =>
        [
          product.name,
          product.material,
          product.style,
          product.color,
          product.category,
        ].some((value) => String(value ?? "").toLowerCase().includes(term)),
      );
    }

    result = [...result];

    if (sortBy === "newest") {
      result.reverse();
    } else {
      result.sort((a, b) => Number(b.reviews || 0) - Number(a.reviews || 0));
    }

    return result;
  }, [selectedCategory, search, sortBy]);

  const categoryName =
    categories.find((category) => category.slug === selectedCategory)?.name ||
    "Shop All";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <h1 className="font-display text-3xl lg:text-5xl font-semibold mb-2">
              {categoryName}
            </h1>
            <p className="text-muted-foreground text-sm">
              {filtered.length} items available · Prices shared privately on WhatsApp
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              type="button"
              onClick={() => setShowFilters((open) => !open)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm text-sm hover:bg-warm transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <input
              type="search"
              placeholder="Search furniture..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="flex-1 min-w-[200px] max-w-sm px-4 py-2 bg-warm border border-border rounded-sm text-sm focus:outline-none focus:border-accent"
              aria-label="Search furniture"
            />

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="px-4 py-2 bg-warm border border-border rounded-sm text-sm focus:outline-none focus:border-accent"
              aria-label="Sort furniture"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {showFilters && (
            <div className="mb-8 p-6 bg-warm rounded-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-semibold">Categories</h2>
                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  aria-label="Close filters"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("")}
                  className={`px-4 py-2 rounded-sm text-xs tracking-wider uppercase transition-colors ${!selectedCategory ? "bg-primary text-primary-foreground" : "bg-background border border-border hover:bg-warm-dark"}`}
                >
                  All
                </button>

                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`px-4 py-2 rounded-sm text-xs tracking-wider uppercase transition-colors ${selectedCategory === category.slug ? "bg-primary text-primary-foreground" : "bg-background border border-border hover:bg-warm-dark"}`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {filtered.map((product) => (
                <a
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group hover-lift block"
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
          ) : (
            <div className="text-center py-20">
              <p className="font-display text-xl mb-2">No furniture found</p>
              <p className="text-muted-foreground text-sm">
                Try another category or search term.
              </p>
            </div>
          )}

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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShopPage;
