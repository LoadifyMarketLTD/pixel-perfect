const stats = [
  { value: "500+", label: "Active Sellers" },
  { value: "10K+", label: "Products Listed" },
  { value: "£2M+", label: "Monthly Volume" },
  { value: "98%", label: "Satisfaction Rate" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground animate-count-up">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
