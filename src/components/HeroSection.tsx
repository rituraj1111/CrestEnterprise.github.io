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
              Premium{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Thermal Paper Rolls
              </span>{" "}
              for POS, Receipts & Billing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Leading manufacturer of BPA-free thermal receipt rolls, POS paper, and ATM rolls. 
              Trusted by 1000+ businesses across Maharashtra. ISO certified quality with bulk discounts and fast delivery.
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
                Why Choose Crest Enterprise for Thermal Paper Rolls?
              </h2>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">BPA-Free & Eco-Friendly certified</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">ISO 9001:2015 Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Available Sizes: 57mm & 79mm widths</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Bulk Discounts for Wholesale Orders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;