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
    },
    {
      title: "Become a Distributor", 
      description: "Join our network of authorized thermal paper distributors",
      icon: Users,
    },
    {
      title: "Custom Print Solutions",
      description: "Personalized thermal paper with your company logo and branding",
      icon: ArrowRight,
    }
  ];
  return <section className="py-20 bg-background">
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

        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-muted/50 mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Single CTA Button */}
        <div className="text-center">
          <Button 
            onClick={() => setIsQuoteModalOpen(true)}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 px-8 py-3 text-lg"
          >
            Get Quote Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        
        <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </section>;
};
export default CTASection;