import { useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle, Star } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

const BV_HOMES_WHATSAPP = "917702702888";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 text-center">
          <h1 className="font-display text-2xl mb-4">Product Not Found</h1>
          <a href="/shop" className="text-accent underline">Back to Shop</a>
        </div>
        <Footer />
      </div>
    );
  }

  const gallery = product.images?.length ? product.images : [product.image];
  const activeImage = selectedImage || gallery[0];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const openWhatsApp = () => {
    const details = [
      `Product: ${product.name}`,
      product.material ? `Material: ${product.material}` : "",
      product.dimensions ? `Dimensions: ${product.dimensions}` : "",
      product.style ? `Style: ${product.style}` : "",
      product.color ? `Colour: ${product.color}` : "",
    ].filter(Boolean).join("\n");

    const message =
      `Hi BV Homes, I'm interested in this product and would like to know more details.\n\n` +
      `${details}\n\n` +
      `Please share the current price, availability, delivery details and any other information about this product. Thank you.`;

    window.open(
      `https://wa.me/${BV_HOMES_WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <a href="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </a>

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

              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  ["Material", product.material],
                  ["Dimensions", product.dimensions],
                  ["Style", product.style],
                  ["Colour", product.color],
                ].map(([label, value]) => (
                  <div key={label} className="p-4 bg-warm rounded-sm">
                    <p className="text-[10px] tracking-wider uppercase text-muted-foreground mb-1">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={openWhatsApp}
                className="w-full h-12 gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white tracking-wider uppercase text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp for Product Details
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-3">
                Ask about price, availability, delivery and this product's details directly on WhatsApp.
              </p>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display text-2xl font-semibold mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {related.map((p) => (
                  <a key={p.id} href={`/product/${p.id}`} className="group hover-lift">
                    <div className="aspect-[3/4] overflow-hidden rounded-sm bg-card mb-3">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <h3 className="font-display text-sm font-medium group-hover:text-accent transition-colors">{p.name}</h3>
                  </a>
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
