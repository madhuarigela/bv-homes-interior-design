import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, Truck, ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import InterestDialog from "@/components/product/InterestDialog";
import { formatINR } from "@/lib/formatCurrency";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 text-center">
          <h1 className="font-display text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-accent underline">Back to Shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const gallery = product.images?.length ? product.images : [product.image];
  const activeImage = selectedImage || gallery[0];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="aspect-square overflow-hidden rounded-sm bg-card">
                <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
              </div>
              {gallery.length > 1 && (
                <div className="grid grid-cols-5 gap-2 mt-3">
                  {gallery.slice(0, 5).map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setSelectedImage(image)}
                      className={`aspect-square overflow-hidden rounded-sm border-2 ${activeImage === image ? "border-accent" : "border-transparent"}`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              {product.badge && (
                <span className="inline-block self-start px-3 py-1 bg-accent text-accent-foreground text-[10px] tracking-wider uppercase font-medium rounded-sm mb-4">
                  {product.badge}
                </span>
              )}
              <h1 className="font-display text-3xl lg:text-4xl font-semibold mb-3">{product.name}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-3xl font-bold">{formatINR(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">{formatINR(product.originalPrice)}</span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  ["Material", product.material],
                  ["Dimensions", product.dimensions],
                  ["Style", product.style],
                  ["Color", product.color],
                ].map(([label, value]) => (
                  <div key={label} className="p-4 bg-warm rounded-sm">
                    <p className="text-[10px] tracking-wider uppercase text-muted-foreground mb-1">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border border-border rounded-sm">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 hover:bg-warm transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-3 font-medium text-sm">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="px-4 py-3 hover:bg-warm transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button className="flex-1 gap-2 h-12 bg-primary hover:bg-primary/90 text-primary-foreground tracking-wider uppercase text-sm">
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 border-border">
                  <Heart className="w-4 h-4" />
                </Button>
                <InterestDialog productName={product.name} productPrice={product.price} />
              </div>

              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-accent" />
                  Free delivery on this order
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-destructive"}`} />
                  {product.inStock ? "In Stock — Ships in 3-5 days" : "Out of Stock"}
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display text-2xl font-semibold mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {related.map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="group hover-lift">
                    <div className="aspect-[3/4] overflow-hidden rounded-sm bg-card mb-3">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <h3 className="font-display text-sm font-medium group-hover:text-accent transition-colors">{p.name}</h3>
                    <span className="font-display font-semibold text-sm">{formatINR(p.price)}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
