import { Link } from "react-router-dom";
import { Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-14 text-center">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
            Need help choosing?
          </p>
          <h3 className="font-display text-2xl lg:text-3xl mb-3">
            Talk to BVHome Furnitures
          </h3>
          <p className="text-primary-foreground/60 mb-7 max-w-md mx-auto text-sm">
            Ask about products, current prices, availability, or store details directly on WhatsApp.
          </p>
          <a
            href="https://wa.me/917702702888?text=Hi%20BVHome%20Furnitures%2C%20I%27d%20like%20help%20choosing%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 bg-accent text-accent-foreground text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-accent/90 transition-colors"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-display text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/shop?category=sofas" className="hover:text-primary-foreground transition-colors">Sofas & Seating</Link></li>
              <li><Link to="/shop?category=beds" className="hover:text-primary-foreground transition-colors">Beds & Bedroom</Link></li>
              <li><Link to="/shop?category=dining" className="hover:text-primary-foreground transition-colors">Dining Tables</Link></li>
              <li><Link to="/shop?category=wardrobes" className="hover:text-primary-foreground transition-colors">Wardrobes</Link></li>
              <li><Link to="/shop?category=office" className="hover:text-primary-foreground transition-colors">Office</Link></li>
              <li><Link to="/shop?category=decor" className="hover:text-primary-foreground transition-colors">Décor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Visit BVHome</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="https://maps.app.goo.gl/J6BhG5YMf72SfKBx5" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Visit Store on Maps</a></li>
              <li><a href="https://www.instagram.com/bvhomefurnitures/?stkn=MWtua3I0dXpxZTR6eQ==" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Follow on Instagram</a></li>
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">Browse Furniture</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="https://wa.me/917702702888?text=Hi%20BVHome%20Furnitures%2C%20I%27d%20like%20to%20know%20more%20about%20your%20furniture." target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">WhatsApp Enquiry</a></li>
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">Furniture Catalogue</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">BVHome Furnitures</h4>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-5">
              Furniture for living, dining, bedroom, workspaces, and everyday homes.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/bvhomefurnitures/?stkn=MWtua3I0dXpxZTR6eQ==" target="_blank" rel="noopener noreferrer" aria-label="BVHome Furnitures on Instagram" className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/15 px-3 py-2 text-xs text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href="https://maps.app.goo.gl/J6BhG5YMf72SfKBx5" target="_blank" rel="noopener noreferrer" aria-label="BVHome Furnitures on Google Maps" className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/15 px-3 py-2 text-xs text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors">
                <MapPin className="h-4 w-4" /> Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40 tracking-wider">
          © {new Date().getFullYear()} BVHome Furnitures. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
