import { ArrowRight, CheckCircle, Users, Award, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImageDefault from "@/assets/hero-creative.jpg?w=1280&imagetools";
import heroImageSrcSet from "@/assets/hero-creative.jpg?w=768;1024;1280;1600&as=srcset&imagetools";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImageDefault} 
          srcSet={heroImageSrcSet}
          alt="Thermal Paper Solutions" 
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90 text-lg px-8 py-3">
                <Link to="/products">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">
                Trusted Partner for Thermal Solutions
              </h2>
              <p className="text-muted-foreground text-center leading-relaxed">
                We specialize in manufacturing high-quality thermal paper rolls 
                that meet the diverse needs of businesses across India. Our commitment 
                to excellence ensures every roll delivers consistent performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;