import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/loadify-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Loadify Market" className="h-9 w-9" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Loadify <span className="text-primary">Market</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#categories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Categories</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild><Link to="/login">Sign In</Link></Button>
          <Button size="sm" className="bg-gradient-hero text-primary-foreground" asChild><Link to="/signup">Get Started</Link></Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 py-4 space-y-3">
          <a href="#features" className="block text-sm font-medium text-muted-foreground">Features</a>
          <a href="#how-it-works" className="block text-sm font-medium text-muted-foreground">How It Works</a>
          <a href="#categories" className="block text-sm font-medium text-muted-foreground">Categories</a>
          <a href="#contact" className="block text-sm font-medium text-muted-foreground">Contact</a>
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" className="flex-1" asChild><Link to="/login">Sign In</Link></Button>
            <Button size="sm" className="flex-1 bg-gradient-hero text-primary-foreground" asChild><Link to="/signup">Get Started</Link></Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
