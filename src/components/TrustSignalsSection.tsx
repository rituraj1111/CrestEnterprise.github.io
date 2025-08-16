import { Shield, Award, Truck, Users, CheckCircle, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustSignalsSection = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System Certified",
      icon: Award,
      color: "text-blue-500"
    },
    {
      title: "BPA-Free Certified",
      description: "Environment Friendly Manufacturing",
      icon: Shield,
      color: "text-green-500"
    },
    {
      title: "10000+ Clients",
      description: "Trusted by Businesses Across India",
      icon: Users,
      color: "text-purple-500"
    },
    {
      title: "Fast Delivery",
      description: "2-3 Days Shipping Across India",
      icon: Truck,
      color: "text-orange-500"
    }
  ];

  const qualityPoints = [
    "Premium Quality Manufacturing with Advanced Technology",
    "100% Quality Tested for Print Clarity and Durability", 
    "Zero Defect Policy with Quality Guarantee",
    "Chemical-Free and Food-Safe Thermal Paper",
    "Consistent Roll Diameter and Length Specifications",
    "Superior Storage Life without Fading or Yellowing"
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Trust Signals */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Industry{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Certifications
            </span>{" "}
            & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our commitment to quality and environmental responsibility is recognized through 
            industry certifications and awards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-medium transition-shadow">
                <CardContent className="p-0">
                  <div className={`inline-flex p-4 rounded-full bg-muted/50 mb-4 ${cert.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Green Practices Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Green Practices &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sustainability
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              At Crest Enterprise, environmental responsibility is at the core of our manufacturing 
              process. We are committed to producing eco-friendly thermal paper rolls that meet 
              the highest environmental standards.
            </p>
            <div className="space-y-3">
              {qualityPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <Globe className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <Shield className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">BPA</div>
                <div className="text-sm text-muted-foreground">Free Certified</div>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <Award className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">ISO</div>
                <div className="text-sm text-muted-foreground">9001:2015</div>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <CheckCircle className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Defect Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;