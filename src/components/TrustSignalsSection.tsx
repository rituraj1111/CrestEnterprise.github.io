import { Shield, Award, Truck, Users, CheckCircle, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const TrustSignalsSection = () => {
  const certifications = [{
    title: "ISO 9001:2015",
    description: "Quality Management System Certified",
    icon: Award,
    color: "text-primary"
  }, {
    title: "BPA-Free Certified",
    description: "Environment Friendly Manufacturing",
    icon: Shield,
    color: "text-primary"
  }, {
    title: "10000+ Clients",
    description: "Trusted by Businesses Across India",
    icon: Users,
    color: "text-primary"
  }, {
    title: "Fast Delivery",
    description: "2-3 Days Shipping Across India",
    icon: Truck,
    color: "text-primary"
  }];
  const qualityPoints = ["Premium Quality Manufacturing with Advanced Technology", "100% Quality Tested for Print Clarity and Durability", "Zero Defect Policy with Quality Guarantee", "Chemical-Free and Food-Safe Thermal Paper", "Consistent Roll Diameter and Length Specifications", "Superior Storage Life without Fading or Yellowing"];
  return;
};
export default TrustSignalsSection;