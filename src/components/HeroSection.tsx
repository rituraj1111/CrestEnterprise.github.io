import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary to-muted py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Premium{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Thermal Paper
                </span>{" "}
                Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Manufacturing and supplying high-quality thermal paper rolls for businesses across India. 
                From petrol pumps to retail stores, we deliver reliable printing solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/products">
                  View Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">18+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">Pan</div>
                <div className="text-sm text-muted-foreground">India Delivery</div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-medium p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-accent rounded-lg h-80 flex items-center justify-center">
                <div className="text-center text-accent-foreground">
                  <div className="text-6xl font-bold mb-4">CREST</div>
                  <div className="text-lg">Thermal Paper Rolls</div>
                  <div className="text-sm opacity-75">Premium Quality</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-medium">
              <div className="text-sm font-medium">ISO Certified</div>
              <div className="text-xs opacity-75">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;