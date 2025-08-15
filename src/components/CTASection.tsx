import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Package } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteModal from "@/components/QuoteModal";

const CTASection = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const ctaOptions = [
    {
      title: "Bulk Discount Inquiry", 
      description: "Special wholesale pricing for large quantity orders",
      icon: Package,
      action: "Bulk Pricing",
      variant: "outline" as const,
      color: "border-primary",
      onClick: () => setIsQuoteModalOpen(true)
    },
    {
      title: "Become a Distributor",
      description: "Join our network of authorized thermal paper distributors",
      icon: Users,
      action: "Apply Now",
      variant: "outline" as const,
      color: "border-secondary",
      onClick: () => setIsQuoteModalOpen(true)
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the option that best fits your thermal paper roll requirements. 
            Our team is ready to assist you with quotes, bulk pricing, and technical support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-muted/50 mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                  <Button 
                    onClick={option.onClick}
                    variant={option.variant}
                    className="w-full"
                  >
                    {option.action} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Help Choosing the Right Thermal Paper?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our thermal paper experts are here to help you select the perfect solution for your 
            POS system, receipt printer, or billing machine. Contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90">
              <Link to="/contact">
                Talk to an Expert <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
        
        <QuoteModal 
          isOpen={isQuoteModalOpen} 
          onClose={() => setIsQuoteModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default CTASection;