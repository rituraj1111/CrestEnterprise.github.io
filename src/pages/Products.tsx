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
    // 57mm SKUs
    {
      name: "Thermal Roll 57mm × 13 mtr",
      category: "57mm",
      size: "57mm × 13 mtr",
      description: "Compact thermal rolls ideal for small POS systems and handheld devices",
      features: ["BPA Free", "High Quality", "Anti-Fade", "Smooth Print"],
      applications: ["Small POS", "Handheld Devices", "Card Machines", "Mobile Printers"],
      specifications: {
        diameter: "57mm",
        length: "13 meters",
        coreDiameter: "12mm",
        gsm: "55-65",
      },
      icon: Package,
      image: "/src/assets/57mm-13mtr.jpg",
    },
    {
      name: "Thermal Roll 57mm × 15 mtr",
      category: "57mm",
      size: "57mm × 15 mtr", 
      description: "Standard thermal rolls for regular POS applications",
      features: ["BPA Free", "High Quality", "Anti-Fade", "Smooth Print"],
      applications: ["Retail Stores", "Small Businesses", "ATM Machines", "Card Machines"],
      specifications: {
        diameter: "57mm",
        length: "15 meters",
        coreDiameter: "12mm",
        gsm: "55-65",
      },
      icon: Package,
      image: "/src/assets/57mm-15mtr.jpg",
    },
    {
      name: "Thermal Roll 57mm × 20 mtr",
      category: "57mm",
      size: "57mm × 20 mtr",
      description: "Extended length thermal rolls for medium usage applications",
      features: ["BPA Free", "High Quality", "Anti-Fade", "Smooth Print"],
      applications: ["Cafes", "Restaurants", "Petrol Pumps", "Mobile POS"],
      specifications: {
        diameter: "57mm",
        length: "20 meters",
        coreDiameter: "12mm",
        gsm: "55-65",
      },
      icon: Package,
      image: "/src/assets/57mm-20mtr.jpg",
    },
    {
      name: "Thermal Roll 57mm × 25 mtr",
      category: "57mm",
      size: "57mm × 25 mtr",
      description: "Long length thermal rolls for high-volume small format printing",
      features: ["BPA Free", "High Quality", "Anti-Fade", "Smooth Print"],
      applications: ["Busy Retail", "Food Courts", "Ticket Printing", "Receipt Printers"],
      specifications: {
        diameter: "57mm",
        length: "25 meters",
        coreDiameter: "12mm",
        gsm: "55-65",
      },
      icon: Package,
      image: "/src/assets/57mm-25mtr.jpg",
    },
    // 79mm SKUs
    {
      name: "Thermal Roll 79mm × 30 mtr",
      category: "79mm",
      size: "79mm × 30 mtr",
      description: "Wide format thermal rolls for professional billing applications",
      features: ["Extra Strong", "Heat Resistant", "Quick Print", "High Volume"],
      applications: ["Supermarkets", "Hotels", "Large Retail", "Professional POS"],
      specifications: {
        diameter: "79mm",
        length: "30 meters",
        coreDiameter: "12mm",
        gsm: "65-75",
      },
      icon: Shield,
      image: "/src/assets/79mm-30mtr.jpg",
    },
    {
      name: "Thermal Roll 79mm × 40 mtr",
      category: "79mm",
      size: "79mm × 40 mtr",
      description: "Extended length wide format thermal rolls for high-volume printing",
      features: ["Extra Strong", "Heat Resistant", "Quick Print", "High Volume"],
      applications: ["Warehouses", "Manufacturing", "Bulk Retail", "Industrial POS"],
      specifications: {
        diameter: "79mm",
        length: "40 meters", 
        coreDiameter: "12mm",
        gsm: "65-75",
      },
      icon: Shield,
      image: "/src/assets/79mm-40mtr.jpg",
    },
    {
      name: "Thermal Roll 79mm × 50 mtr",
      category: "79mm",
      size: "79mm × 50 mtr",
      description: "Maximum length wide format thermal rolls for continuous high-volume operations",
      features: ["Extra Strong", "Heat Resistant", "Quick Print", "High Volume"],
      applications: ["Large Supermarkets", "Distribution Centers", "Heavy Industry", "Continuous Printing"],
      specifications: {
        diameter: "79mm",
        length: "50 meters",
        coreDiameter: "12mm",
        gsm: "65-75",
      },
      icon: Shield,
      image: "/src/assets/79mm-50mtr.jpg",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <Badge variant="secondary" className="bg-white/90 text-black">
                        <Ruler className="h-3 w-3 mr-1" />
                        {product.size}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-lg font-medium text-primary mb-1">Contact for Pricing</div>
                      <div className="text-sm text-muted-foreground">Prices may vary based on quantity</div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Specifications:</h4>
                      <div className="space-y-1 text-xs">
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
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Best For:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.slice(0, 3).map((app) => (
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