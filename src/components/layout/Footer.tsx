import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-16 text-center">
          <h3 className="font-display text-2xl lg:text-3xl mb-3">Join the BV Homes Family</h3>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto text-sm">
            Be the first to discover new collections, exclusive offers, and interior design inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
            />
            <button className="px-8 py-3 bg-accent text-accent-foreground text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-accent/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
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
            <h4 className="font-display text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Our Craftsmen</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Showrooms</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Delivery & Returns</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Care Guide</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">BV Homes</h4>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Curating the finest furniture since 2015. Every piece tells a story of craftsmanship and elegance.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40 tracking-wider">
          © {new Date().getFullYear()} BV Homes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
