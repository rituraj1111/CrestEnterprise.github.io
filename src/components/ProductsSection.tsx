import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import { Link } from "react-router-dom";
import billingMachinesImg from "@/assets/billing-machines.webp";
import thermalRollsImg from "@/assets/thermal-rolls.webp";
import img57mmCategory from "@/assets/57mm-category.webp";
import img79mmCategory from "@/assets/79mm-category.webp";
const ProductsSection = () => {
  const thermalRollCategories = [{
    id: "57mm",
    title: "57mm Thermal Rolls",
    image: img57mmCategory,
    description: "Perfect for small to medium retail POS systems, handheld billing devices, and standard receipt printing applications.",
    sizes: ["13 mtr", "15 mtr", "20 mtr", "25 mtr"]
  }, {
    id: "79mm",
    title: "79mm Thermal Rolls",
    image: img79mmCategory,
    description: "Ideal for medium to large POS systems, high-volume retail environments, and professional billing applications.",
    sizes: ["30 mtr", "40 mtr", "50 mtr"]
  }];
  return <section className="py-20 bg-muted/30">
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
        

        {/* Thermal Roll Categories */}
        <div className="mb-12">
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {thermalRollCategories.map(category => <Link key={category.id} to="/products" className="block">
                <Card className="overflow-hidden shadow-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <div className="relative h-64">
                    <img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" width="800" height="541" sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-2xl font-bold mb-2">{category.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.sizes.map(size => <span key={size} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-sm">
                            {category.id} × {size}
                          </span>)}
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
              </Link>)}
          </div>
        </div>

        {/* Pricing Note */}
        <div className="text-center mb-8">
          
        </div>

        {/* Call to Action */}
        
      </div>
    </section>;
};
export default ProductsSection;