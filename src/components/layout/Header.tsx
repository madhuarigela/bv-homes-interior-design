import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0);

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
          Complimentary Delivery on Orders Over $500 · Made-to-Order Available
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
              BV<span className="text-gradient-gold">Homes</span>
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

          {/* Actions */}
          <div className="flex items-center gap-1 lg:gap-3">
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex text-foreground/70 hover:text-foreground">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex text-foreground/70 hover:text-foreground">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-foreground/70 hover:text-foreground">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
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
            <div className="flex gap-4 pt-4">
              <Link to="#" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-4 h-4" /> Wishlist
              </Link>
              <Link to="#" className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" /> Account
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
