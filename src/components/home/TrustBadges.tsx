import { Truck, RefreshCw, Headphones } from "lucide-react";

const badges = [
  { icon: Truck, title: "Free Delivery", desc: "On orders over ₹40,000" },
  { icon: RefreshCw, title: "30-Day Returns", desc: "Hassle-free process" },
  { icon: Headphones, title: "Expert Support", desc: "24/7 design guidance" },
];

const TrustBadges = () => {
  return (
    <section className="py-16 border-y border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((b) => (
            <div key={b.title} className="text-center">
              <b.icon className="w-8 h-8 mx-auto mb-3 text-accent" strokeWidth={1.5} />
              <h4 className="font-display text-sm font-semibold mb-1">{b.title}</h4>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
