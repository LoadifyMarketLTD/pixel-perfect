import { Package, Shirt, Laptop, Home, Wrench, ShoppingBag } from "lucide-react";

const categories = [
  { icon: Package, label: "Mixed Pallets", count: "120+ listings" },
  { icon: Laptop, label: "Electronics", count: "85+ listings" },
  { icon: Shirt, label: "Clothing & Apparel", count: "200+ listings" },
  { icon: Home, label: "Home & Garden", count: "95+ listings" },
  { icon: Wrench, label: "Tools & DIY", count: "60+ listings" },
  { icon: ShoppingBag, label: "Clearance Deals", count: "150+ listings" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Categories</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Browse by Category
          </h2>
          <p className="mt-4 text-muted-foreground">
            Find exactly what you're looking for across our wide range of pallet and stock categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-hero transition-colors">
                <cat.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="font-display text-sm font-semibold text-foreground">{cat.label}</span>
              <span className="text-xs text-muted-foreground">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
