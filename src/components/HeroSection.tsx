import { ArrowRight, CheckCircle, Users, Award, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-creative.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Thermal Paper Solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Powering{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Business
              </span>{" "}
              Transactions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              From petrol pumps to supermarkets, our thermal paper rolls keep businesses 
              running smoothly across India. Quality you can trust, service you can rely on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90 text-lg px-8 py-3">
                <Link to="/products">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>BPA Free & Eco-Friendly</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-card/90 backdrop-blur-sm rounded-xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-card/90 backdrop-blur-sm rounded-xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card/90 backdrop-blur-sm rounded-xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 col-span-2">
                <Package className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Thermal Rolls Delivered Annually</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;