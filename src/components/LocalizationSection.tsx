import { MapPin, Truck, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocalizationSection = () => {
  const serviceAreas = [
    {
      city: "Pune",
      description: "Premium thermal paper rolls supplier in Pune with same-day delivery",
      icon: MapPin,
      keywords: "thermal paper rolls Pune, POS paper Pune, receipt rolls Pune"
    },
    {
      city: "Mumbai", 
      description: "Leading thermal paper distributor in Mumbai for bulk orders",
      icon: Truck,
      keywords: "thermal paper rolls Mumbai, bulk thermal paper Mumbai, POS rolls Mumbai"
    },
    {
      city: "Delhi",
      description: "Fast delivery thermal paper solutions across Delhi NCR region",
      icon: Globe,
      keywords: "thermal paper rolls Delhi, POS machine paper Delhi, receipt paper Delhi"
    },
    {
      city: "Bangalore",
      description: "Thermal paper roll manufacturing and supply in Bangalore",
      icon: MapPin,
      keywords: "thermal paper rolls Bangalore, thermal receipt rolls Bangalore"
    },
    {
      city: "Kolhapur",
      description: "Local thermal paper supplier in Kolhapur with factory-direct pricing",
      icon: Truck,
      keywords: "thermal paper rolls Kolhapur, billing rolls Kolhapur, POS paper Kolhapur"
    },
    {
      city: "Satara",
      description: "Quality thermal paper rolls delivery across Satara district",
      icon: Globe,
      keywords: "thermal paper rolls Satara, receipt paper Satara, billing machine paper Satara"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Thermal Paper Rolls{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Pan India Delivery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We serve businesses across major Indian cities with fast delivery and competitive pricing. 
            Local support with national reach for all your thermal paper requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {area.city}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {area.description}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {area.keywords}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Promise */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Pan India Service Promise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-lg font-semibold">500+ Cities</div>
              <div className="text-muted-foreground">Delivery Network</div>
            </div>
            <div>
              <Truck className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-lg font-semibold">2-3 Days</div>
              <div className="text-muted-foreground">Express Delivery</div>
            </div>
            <div>
              <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-lg font-semibold">24/7 Support</div>
              <div className="text-muted-foreground">Customer Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalizationSection;