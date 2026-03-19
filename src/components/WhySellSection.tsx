import { ArrowRight, TrendingUp, Users, Package, PoundSterling } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Users,
    title: "Real Buyers, Not Browsers",
    description:
      "Every buyer on Loadify is a verified business looking to purchase wholesale, clearance or overstock — not casual shoppers.",
  },
  {
    icon: TrendingUp,
    title: "Shift Stock Faster",
    description:
      "List pallets, bulk lots or clearance lines and get them in front of active buyers within minutes, not weeks.",
  },
  {
    icon: Package,
    title: "Any Stock, Any Volume",
    description:
      "From single pallets to full container loads — returns, overstock, end-of-line, liquidation. If it's stock, it sells here.",
  },
  {
    icon: PoundSterling,
    title: "No Listing Fees, Fast Payouts",
    description:
      "Zero upfront costs to list. Sell your stock and get paid quickly via Stripe with full transaction transparency.",
  },
];

const WhySellSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            For Sellers
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Your Stock Deserves Real Buyers
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Stop sitting on dead stock. Loadify connects you with verified UK businesses ready to buy wholesale, clearance and overstock — fast.
          </p>
        </div>

        {/* Benefit grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/signup">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 shadow-lg shadow-emerald-600/20"
            >
              Start Selling Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhySellSection;
