import { ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-warehouse.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1.5 text-sm font-medium text-accent animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            UK's #1 Pallet Marketplace
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-primary-foreground animate-fade-in-up">
            Buy & Sell Pallets,{" "}
            <span className="text-accent">
              Stock & Clearance
            </span>
          </h1>

          <p className="text-lg text-primary-foreground/80 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            The trusted UK marketplace connecting buyers and sellers of wholesale pallets, 
            overstock, and clearance deals. Start trading faster today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/catalog">
              <Button size="lg" className="bg-gradient-accent text-accent-foreground font-semibold text-base px-8 hover:opacity-90 transition-opacity">
                Browse Listings <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground/60 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-base px-8">
              Start Selling
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Verified Sellers
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <Truck className="h-4 w-4 text-accent" />
              UK-Wide Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
