import { Card, CardContent } from "@/components/ui/card";
import { Fuel, Hotel, ShoppingCart, Building2, Utensils, MapPin } from "lucide-react";
import petrolPumpImage from "@/assets/petrol-pump.jpg";
import supermarketImage from "@/assets/supermarket.jpg";
import hotelImage from "@/assets/hotel.jpg";
import corporateImage from "@/assets/corporate.jpg";
import foodCourtImage from "@/assets/food-court.jpg";
import transportImage from "@/assets/transport.jpg";

const CustomersSection = () => {
  const customerSegments = [
    {
      name: "Petrol Pumps",
      description: "Fuel receipt printing for vehicles and customers",
      icon: Fuel,
      image: petrolPumpImage,
      features: ["Weather Resistant", "Quick Print", "Clear Text"],
      color: "bg-blue-500",
    },
    {
      name: "Hotels & Restaurants",
      description: "Billing, KOT, and guest receipt management",
      icon: Hotel,
      image: hotelImage,
      features: ["Food Safe", "Fast Printing", "Professional Look"],
      color: "bg-green-500",
    },
    {
      name: "Supermarkets",
      description: "High-volume checkout and inventory printing",
      icon: ShoppingCart,
      image: supermarketImage,
      features: ["High Capacity", "Barcode Support", "Cost Effective"],
      color: "bg-purple-500",
    },
    {
      name: "Corporate Offices",
      description: "Invoice, receipt, and document printing",
      icon: Building2,
      image: corporateImage,
      features: ["Professional Grade", "Long Storage", "Fade Resistant"],
      color: "bg-orange-500",
    },
    {
      name: "Food Courts",
      description: "Order tickets and customer receipts",
      icon: Utensils,
      image: foodCourtImage,
      features: ["Oil Resistant", "Quick Service", "Easy Handling"],
      color: "bg-red-500",
    },
    {
      name: "Transport Hubs",
      description: "Ticketing and logistics documentation",
      icon: MapPin,
      image: transportImage,
      features: ["Durable", "High Speed", "Multiple Sizes"],
      color: "bg-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Serving{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Diverse Industries
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From small businesses to large enterprises, our thermal paper solutions 
            power printing needs across various sectors with unmatched reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerSegments.map((segment, index) => {
            const IconComponent = segment.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-medium transition-all duration-300 group hover:-translate-y-2 border-0 shadow-soft overflow-hidden"
              >
                {segment.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={segment.image} 
                      alt={segment.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${segment.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {segment.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {segment.description}
                      </p>
                      <div className="space-y-2">
                        {segment.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-lg mb-6 opacity-90">
            We can customize thermal paper rolls for your specific business requirements
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-75">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold">48hr</div>
              <div className="text-sm opacity-75">Quick Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-75">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;