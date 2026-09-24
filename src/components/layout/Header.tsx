import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "Sofas", to: "/shop?category=sofas" },
    { label: "Bedroom", to: "/shop?category=beds" },
    { label: "Dining", to: "/shop?category=dining" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top bar */}
        <div className="hidden lg:flex items-center justify-center py-2 border-b border-border text-xs tracking-widest uppercase text-muted-foreground">
          Made-to-Order Furniture · Visit BVHome Furnitures
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl lg:text-2xl font-bold tracking-tight">
              BVHome <span className="text-gradient-gold">Furnitures</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium tracking-wide uppercase text-foreground/80 hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 lg:gap-2">
            <a href="https://www.instagram.com/bvhomefurnitures/?stkn=MWtua3I0dXpxZTR6eQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hidden sm:flex p-2 text-foreground/70 hover:text-foreground">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://maps.app.goo.gl/J6BhG5YMf72SfKBx5" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="hidden sm:flex p-2 text-foreground/70 hover:text-foreground">
              <MapPin className="w-4 h-4" />
            </a>
            <a href="https://wa.me/917702702888?text=Hi%20BVHome%20Furnitures%2C%20I%27d%20like%20to%20know%20more%20about%20your%20furniture." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-3 py-2 text-xs font-medium text-white hover:opacity-90">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium tracking-wide uppercase text-foreground/80 hover:text-foreground border-b border-border/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="https://www.instagram.com/bvhomefurnitures/?stkn=MWtua3I0dXpxZTR6eQ==" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground">Instagram</a>
              <a href="https://maps.app.goo.gl/J6BhG5YMf72SfKBx5" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground">Visit Store</a>
              <a href="https://wa.me/917702702888?text=Hi%20BVHome%20Furnitures%2C%20I%27d%20like%20to%20know%20more%20about%20your%20furniture." target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-green-600">WhatsApp</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
