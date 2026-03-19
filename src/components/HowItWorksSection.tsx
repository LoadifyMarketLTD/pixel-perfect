import { UserPlus, PackagePlus, PoundSterling, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up & Get Verified",
    description:
      "Create your free seller account in under 2 minutes. We verify every seller to keep the marketplace trusted and professional.",
  },
  {
    icon: PackagePlus,
    step: "02",
    title: "List Your Stock",
    description:
      "Upload your wholesale, clearance or overstock lines with photos and pricing. Buyers see your listings instantly.",
  },
  {
    icon: PoundSterling,
    step: "03",
    title: "Sell & Get Paid",
    description:
      "Verified UK buyers purchase your stock. Payments are processed securely via Stripe with fast payouts to your account.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            From Sign-Up to First Sale in 3 Steps
          </h2>
          <p className="mt-4 text-muted-foreground">
            No listing fees. No complicated setup. Just list your stock and start selling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <div key={item.step} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-hero text-primary-foreground mb-5 shadow-elevated group-hover:scale-105 transition-transform">
                <item.icon className="h-8 w-8" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground max-w-[260px] mx-auto leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link to="/signup">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 shadow-lg shadow-emerald-600/20"
            >
              Create Free Seller Account <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
