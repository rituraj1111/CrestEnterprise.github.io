import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ruler, Package, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import thermalRolls from "@/assets/thermal-rolls.jpg";

const ProductsSection = () => {
  const products = [
    {
      name: "Thermal Rolls 80mm",
      size: "80mm x 80mm",
      description: "Perfect for POS systems, billing machines, and receipt printers",
      features: ["BPA Free", "High Quality", "Long Lasting"],
      applications: ["Retail Stores", "Restaurants", "Small Businesses"],
      icon: Package,
    },
    {
      name: "Thermal Rolls 57mm", 
      size: "57mm x 40mm",
      description: "Compact rolls ideal for handheld devices and mobile printers",
      features: ["Anti-Fade", "Smooth Print", "Eco-Friendly"],
      applications: ["Petrol Pumps", "ATM Machines", "Mobile POS"],
      icon: Zap,
    },
    {
      name: "Thermal Rolls 110mm",
      size: "110mm x 100mm",
      description: "Heavy-duty rolls for high-volume printing requirements",
      features: ["Extra Strong", "Heat Resistant", "Quick Print"],
      applications: ["Supermarkets", "Hotels", "Warehouses"],
      icon: Shield,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-8">
            <img 
              src={thermalRolls} 
              alt="Thermal Paper Rolls" 
              className="w-64 h-48 mx-auto rounded-2xl object-cover shadow-elegant"
            />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Thermal Paper{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of thermal paper rolls, designed to meet 
            diverse business needs with superior quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mb-2">
                      <Ruler className="h-3 w-3 mr-1" />
                      {product.size}
                    </Badge>
                    <div>{product.description}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Best For:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.applications.map((app) => (
                        <li key={app} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;