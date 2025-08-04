import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBgImg from "@/assets/hero-bg.webp"; 

const VideoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBgImg})`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Never Run{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Out of Paper
              </span>{" "}
              Again
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              When your business needs thermal paper urgently, Crest Enterprise delivers. 
              Premium quality thermal rolls with lightning-fast delivery across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90 text-lg px-8 py-3">
                <Link to="/contact">
                  Get Instant Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                Your Reliable Thermal Paper Partner
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>2-3 days delivery in major cities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Superior print clarity and durability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>24/7 customer support for urgent orders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Trusted by 10,000+ businesses nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;