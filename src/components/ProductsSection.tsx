import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import { Link } from "react-router-dom";
import billingMachinesImg from "@/assets/billing-machines.webp";
import thermalRollsImg from "@/assets/thermal-rolls.webp";
import img57mmCategory from "@/assets/57mm-category.webp";
import img79mmCategory from "@/assets/79mm-category.webp";

const ProductsSection = () => {
  const thermalRollCategories = [
    {
      id: "57mm",
      title: "57mm Thermal Rolls",
      image: img57mmCategory,
      description: "Perfect for small to medium retail POS systems, handheld billing devices, and standard receipt printing applications.",
      sizes: ["13 mtr", "15 mtr", "20 mtr", "25 mtr"]
    },
    {
      id: "79mm",
      title: "79mm Thermal Rolls", 
      image: img79mmCategory,
      description: "Ideal for medium to large POS systems, high-volume retail environments, and professional billing applications.",
      sizes: ["30 mtr", "40 mtr", "50 mtr"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Available Sizes:{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              57mm & 79mm
            </span>{" "}
            Thermal Paper Rolls
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Premium BPA-free thermal paper rolls for POS systems, receipt printers, and billing machines. 
            Custom coil sizes available with fast shipping across India. Buy in bulk for best prices.
          </p>
        </div>

        {/* Billing Machines and Paper Rolls Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden shadow-medium hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64">
              <img 
                src={billingMachinesImg} 
                alt="Billing machines setup" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="1024"
                height="692"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Professional Billing Solutions</h3>
              <p className="text-muted-foreground">Modern billing machines paired with our premium thermal paper rolls for optimal performance.</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-medium hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64">
              <img 
                src={thermalRollsImg} 
                alt="Thermal paper rolls collection" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="800"
                height="541"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Premium Thermal Rolls</h3>
              <p className="text-muted-foreground">High-quality thermal paper rolls available in various sizes for all your printing needs.</p>
            </CardContent>
          </Card>
        </div>

        {/* Thermal Roll Categories */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Our Thermal Roll Categories</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {thermalRollCategories.map((category) => (
              <Link key={category.id} to="/products" className="block">
                <Card className="overflow-hidden shadow-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <div className="relative h-64">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="541"
                      sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-2xl font-bold mb-2">{category.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.sizes.map((size) => (
                          <span key={size} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-sm">
                            {category.id} × {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View All {category.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Pricing Note */}
        <div className="text-center mb-8">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 max-w-2xl mx-auto">
            <Package className="h-8 w-8 text-accent mx-auto mb-3" />
            <p className="text-lg font-medium text-foreground mb-2">Competitive Pricing</p>
            <p className="text-muted-foreground">
              Prices may vary based on quantity and specifications. Contact us for bulk pricing and custom requirements.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90">
            <Link to="/contact">
              Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;