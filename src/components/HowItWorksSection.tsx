import { UserPlus, PackagePlus, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description: "Sign up as a buyer or seller in minutes. Sellers go through a quick verification process.",
  },
  {
    icon: PackagePlus,
    step: "02",
    title: "List or Browse",
    description: "Sellers list their pallets and clearance stock. Buyers browse categories and find deals.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Secure Checkout",
    description: "Pay securely through Stripe. Funds are held safely until delivery is confirmed.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Ship & Deliver",
    description: "Track shipments in real-time. Confirm delivery with proof and leave reviews.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Start Trading in 4 Steps
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div key={item.step} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-hero text-primary-foreground mb-5 shadow-elevated group-hover:scale-105 transition-transform">
                <item.icon className="h-8 w-8" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[240px] mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
