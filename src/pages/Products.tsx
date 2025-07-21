import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ruler, Package, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = [
    {
      name: "Thermal Rolls 80mm",
      size: "80mm x 80mm",
      description: "Perfect for POS systems, billing machines, and receipt printers",
      features: ["BPA Free", "High Quality", "Long Lasting", "Cost Effective"],
      applications: ["Retail Stores", "Restaurants", "Small Businesses", "Cafes"],
      specifications: {
        diameter: "80mm",
        length: "80m",
        coreDiameter: "12mm",
        gsm: "55-65",
      },
      icon: Package,
      price: "₹45-65 per roll",
    },
    {
      name: "Thermal Rolls 57mm", 
      size: "57mm x 40mm",
      description: "Compact rolls ideal for handheld devices and mobile printers",
      features: ["Anti-Fade", "Smooth Print", "Eco-Friendly", "Weather Resistant"],
      applications: ["Petrol Pumps", "ATM Machines", "Mobile POS", "Card Machines"],
      specifications: {
        diameter: "57mm",
        length: "40m",
        coreDiameter: "12mm",
        gsm: "55-65",
      },
      icon: Zap,
      price: "₹25-35 per roll",
    },
    {
      name: "Thermal Rolls 110mm",
      size: "110mm x 100mm",
      description: "Heavy-duty rolls for high-volume printing requirements",
      features: ["Extra Strong", "Heat Resistant", "Quick Print", "High Volume"],
      applications: ["Supermarkets", "Hotels", "Warehouses", "Manufacturing"],
      specifications: {
        diameter: "110mm",
        length: "100m",
        coreDiameter: "12mm",
        gsm: "65-75",
      },
      icon: Shield,
      price: "₹85-120 per roll",
    },
  ];

  const qualityFeatures = [
    "Premium Quality Manufacturing",
    "BPA-Free and Environment Friendly",
    "Superior Print Quality with Sharp Text",
    "Long-lasting Storage without Fading",
    "Consistent Roll Diameter and Length",
    "Dust-free and Smooth Surface Finish",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Thermal Paper{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of thermal paper rolls, engineered for reliability 
              and designed to meet diverse business printing needs across industries.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-lg">
                      <Badge variant="secondary" className="mb-3">
                        <Ruler className="h-3 w-3 mr-1" />
                        {product.size}
                      </Badge>
                      <div>{product.description}</div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">{product.price}</div>
                      <div className="text-sm text-muted-foreground">Price may vary based on quantity</div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Specifications:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Diameter:</span>
                          <span>{product.specifications.diameter}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Length:</span>
                          <span>{product.specifications.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Core:</span>
                          <span>{product.specifications.coreDiameter}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">GSM:</span>
                          <span>{product.specifications.gsm}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Best For:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app) => (
                          <Badge key={app} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full bg-gradient-accent hover:opacity-90">
                      <Link to="/contact">
                        Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quality Assurance Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Quality{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Assurance
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Crest Enterprise, quality is not just a promise—it's our commitment. 
                Every roll undergoes rigorous testing to ensure superior performance.
              </p>
              <div className="space-y-3">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">BPA</div>
                  <div className="text-sm text-muted-foreground">Free & Eco-Friendly</div>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Quality Tested</div>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Quality Support</div>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                  <div className="text-sm text-muted-foreground">Defect Policy</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;