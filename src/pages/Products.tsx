import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ruler, Package, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import ProductDetailModal from "@/components/ProductDetailModal";
import { Helmet } from 'react-helmet';
import img57mm13mtr from "@/assets/57*13mtr.webp";
import img57mm15mtr from "@/assets/57*15mtr.webp";
import img57mm20mtr from "@/assets/57*20mtr.webp";
import img57mm25mtr from "@/assets/57*25mtr.webp";
import img79mm30mtr from "@/assets/79*30mtr.webp";
import img79mm40mtr from "@/assets/79*40mtr.webp";
import img79mm50mtr from "@/assets/79*50mtr.webp";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
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
        coreDiameter: "13mm",
        gsm: "48-55",
      },
      icon: Package,
      image: img57mm13mtr,
    },
    {
      name: "Thermal Roll 57mm × 15 mtr",
      category: "57mm",
      size: "57mm × 15 mtr", 
      description: "Standard thermal rolls for regular POS applications and handheld devices",
      features: ["BPA Free", "High Quality", "Anti-Fade", "Smooth Print"],
      applications: ["Retail Stores", "Small Businesses", "ATM Machines", "Card Machines"],
      specifications: {
        diameter: "57mm",
        length: "15 meters",
        coreDiameter: "13mm",
        gsm: "48-65",
      },
      icon: Package,
      image: img57mm15mtr,
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
        coreDiameter: "13mm",
        gsm: "48-65",
      },
      icon: Package,
      image: img57mm20mtr,
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
        coreDiameter: "13mm",
        gsm: "48-65",
      },
      icon: Package,
      image: img57mm25mtr,
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
        coreDiameter: "13mm",
        gsm: "55-75",
      },
      icon: Shield,
      image: img79mm30mtr,
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
        coreDiameter: "13mm",
        gsm: "55-75",
      },
      icon: Shield,
      image: img79mm40mtr,
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
        coreDiameter: "13mm",
        gsm: "55-75",
      },
      icon: Shield,
      image: img79mm50mtr,
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
    <>
      <Helmet>
        <title>Thermal Paper Billing Rolls | POS Machine Paper | Crest Enterprise Maharashtra</title>
        <meta name="description" content="Buy thermal paper billing rolls, POS machine paper, receipt rolls for billing machines in Sangli, Kolhapur, Satara, Pune, Maharashtra. 57mm, 79mm sizes available. Fast delivery across India." />
        <meta name="keywords" content="thermal paper billing rolls, POS machine paper, receipt rolls, billing machine paper, thermal paper rolls, POS paper, Sangli, Kolhapur, Satara, Pune, Maharashtra, India, 57mm thermal paper, 79mm thermal paper, billing rolls supplier" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Sangli, Maharashtra, India" />
        <meta name="geo.position" content="16.8524;74.5815" />
        <meta name="ICBM" content="16.8524, 74.5815" />
        <meta property="og:title" content="Thermal Paper Billing Rolls | POS Machine Paper | Crest Enterprise" />
        <meta property="og:description" content="Premium thermal paper rolls for POS systems, billing machines. Available in 57mm, 79mm sizes. Fast delivery in Maharashtra, India." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://crestthermalrolls.com/products" />
        <meta property="og:image" content="/thermal-paper-story.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thermal Paper Billing Rolls | POS Machine Paper" />
        <meta name="twitter:description" content="Premium thermal paper rolls for POS systems and billing machines in Maharashtra, India." />
        <link rel="canonical" href="https://crestthermalrolls.com/products" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Thermal Paper Billing Rolls",
            "description": "High-quality thermal paper rolls for POS systems, billing machines, and receipt printers",
            "brand": {
              "@type": "Brand",
              "name": "Crest Enterprise"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Crest Enterprise",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sangli",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "seller": {
                "@type": "Organization",
                "name": "Crest Enterprise"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          }
        `}</script>
      </Helmet>
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
                <Card 
                  key={index} 
                  className="h-[700px] flex flex-col hover:shadow-medium transition-all duration-300 group cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="relative h-80 overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <Badge variant="secondary" className="bg-white/95 text-black text-sm px-3 py-1">
                        <Ruler className="h-3 w-3 mr-1" />
                        {product.size}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3 flex-shrink-0">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-lg font-medium text-primary mb-1">Contact for Pricing</div>
                        <div className="text-sm text-muted-foreground">Prices may vary based on quantity</div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {product.features.map((feature) => (
                            <div key={feature} className="flex items-center text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
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
                    </div>

                    <Button 
                      className="w-full bg-gradient-accent hover:opacity-90 mt-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product);
                      }}
                    >
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
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
        <InternalLinks />
      </main>

      <ProductDetailModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

        <Footer />
      </div>
    </>
  );
};

export default Products;