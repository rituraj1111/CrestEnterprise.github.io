import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-accent p-2 rounded-lg">
                <div className="h-6 w-6 bg-primary-foreground rounded"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Crest Enterprise</h3>
                <p className="text-sm opacity-75">Thermal Paper Solutions</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Leading manufacturer and supplier of premium thermal paper rolls, 
              serving businesses across India with reliable printing solutions since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link to="/products" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Products
              </Link>
              <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 opacity-75" />
                <div className="text-sm opacity-90">
                  <div>Industrial Area, Sector 45</div>
                  <div>Gurgaon, Haryana 122003</div>
                  <div>India</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-75" />
                <span className="text-sm opacity-90">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-75" />
                <span className="text-sm opacity-90">info@crestenterprise.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 opacity-75" />
                <span className="text-sm opacity-90">Mon-Sat: 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="mb-8 bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-6">Our Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-sm opacity-90">Thermal Rolls Delivered</div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75">
            © {currentYear} Crest Enterprise. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              Terms of Service
            </span>
            <span className="text-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              Quality Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;