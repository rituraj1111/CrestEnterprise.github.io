import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import { Link } from "react-router-dom";
import billingMachinesImg from "@/assets/billing-machines.jpg";
import thermalRollsImg from "@/assets/thermal-rolls.jpg";
import img57x13 from "@/assets/57mm-13mtr.jpg";
import img57x15 from "@/assets/57mm-15mtr.jpg";
import img57x20 from "@/assets/57mm-20mtr.jpg";
import img57x25 from "@/assets/57mm-25mtr.jpg";
import img79x30 from "@/assets/79mm-30mtr.jpg";
import img79x50 from "@/assets/79mm-50mtr.jpg";
import img79x40 from "@/assets/79mm-40mtr.jpg";

const ProductsSection = () => {
  const products57mm = [
    {
      id: "57x13",
      size: "57mm × 13 mtr",
      image: img57x13,
      description: "Perfect for small retail POS systems and billing machines"
    },
    {
      id: "57x15",
      size: "57mm × 15 mtr",
      image: img57x15,
      description: "Standard size for most handheld billing devices"
    },
    {
      id: "57x20",
      size: "57mm × 20 mtr",
      image: img57x20,
      description: "Extended length for high-volume printing applications"
    },
    {
      id: "57x25",
      size: "57mm × 25 mtr",
      image: img57x25,
      description: "Premium length for continuous operations"
    }
  ];

  const products79mm = [
    {
      id: "79x30",
      size: "79mm × 30 mtr",
      image: img79x30,
      description: "Standard for medium-sized POS and billing systems"
    },
    {
      id: "79x50",
      size: "79mm × 50 mtr",
      image: img79x50,
      description: "High-capacity rolls for busy retail environments"
    },
    {
      id: "79x40",
      size: "79mm × 40 mtr",
      image: img79x40,
      description: "Ideal balance of size and capacity for most businesses"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Premium{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Thermal Paper
            </span>{" "}
            Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            High-quality thermal paper rolls designed for superior print clarity and durability. 
            Choose from our wide range of sizes to meet your specific business needs.
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
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Premium Thermal Rolls</h3>
              <p className="text-muted-foreground">High-quality thermal paper rolls available in various sizes for all your printing needs.</p>
            </CardContent>
          </Card>
        </div>

        {/* 57mm SKU Products */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">57mm Thermal Rolls</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products57mm.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={product.image} 
                    alt={`Thermal paper roll ${product.size}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-center text-primary">{product.size}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm text-center">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 79mm SKU Products */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">79mm Thermal Rolls</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products79mm.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={product.image} 
                    alt={`Thermal paper roll ${product.size}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-center text-primary">{product.size}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm text-center">{product.description}</p>
                </CardContent>
              </Card>
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