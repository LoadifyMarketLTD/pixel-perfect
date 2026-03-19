import logo from "@/assets/loadify-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Loadify Market" className="h-8 w-8" />
              <span className="font-display text-lg font-bold text-background">
                Loadify Market
              </span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              UK's trusted marketplace for pallets, wholesale stock and clearance deals.
            </p>
            <p className="text-sm text-background/40">loadifymarket.co.uk</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Marketplace</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Browse Listings</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Clearance Deals</a></li>
              <li><a href="#" className="hover:text-background transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Sellers</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Start Selling</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Seller Dashboard</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Seller Guidelines</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Returns Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">© 2026 Loadify Market. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-background/40">
            <a href="#" className="hover:text-background transition-colors">Shipping Policy</a>
            <a href="#" className="hover:text-background transition-colors">Acceptable Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
