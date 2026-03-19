import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-seller-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="space-y-7">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-display font-bold leading-[1.08] text-foreground">
              List your products.{" "}
              <span className="text-primary">Start selling today.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Where sellers turn stock into profit. The UK's trusted wholesale marketplace.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3">
              {[
                "Sell Faster",
                "Reach Real Buyers",
                "Grow Your Profits",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-foreground font-medium">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div>
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 shadow-lg shadow-emerald-600/20"
                >
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["JD", "SM", "AK", "LR"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground"
                    style={{ zIndex: 4 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">10,000+ Sellers Trust Us</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    Rated <strong className="text-foreground">4.9/5</strong> from 2,000+ Reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-1">
              {[
                { icon: ShieldCheck, label: "No Listing Fees" },
                { icon: Zap, label: "Fast Payouts" },
                { icon: Users, label: "UK Sellers Only" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] border border-border">
              <img
                src={heroImg}
                alt="Loadify Market seller dashboard showing sales overview, orders and analytics"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
