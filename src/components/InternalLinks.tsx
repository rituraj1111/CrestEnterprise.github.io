import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Info, Phone, Home } from "lucide-react";

const InternalLinks = () => {
  const keywordLinks = [
    {
      title: "57mm Thermal Paper Rolls",
      description: "Premium quality 57mm thermal billing rolls for POS systems",
      href: "/products",
      keywords: "57mm thermal paper, billing rolls, POS machine paper"
    },
    {
      title: "79mm Thermal Paper Rolls", 
      description: "High-quality 79mm thermal paper for large format receipts",
      href: "/products",
      keywords: "79mm thermal paper, large format billing, receipt paper"
    },
    {
      title: "About Crest Enterprise",
      description: "Learn about our 10+ years of thermal paper manufacturing excellence",
      href: "/about",
      keywords: "thermal paper manufacturer, company profile, Maharashtra supplier"
    },
    {
      title: "Contact for Bulk Orders",
      description: "Get wholesale pricing and fast delivery across Maharashtra",
      href: "/contact", 
      keywords: "bulk orders, wholesale pricing, Maharashtra delivery"
    }
  ];

  const locationLinks = [
    {
      title: "Thermal Paper Supplier Sangli",
      description: "Leading thermal paper rolls supplier in Sangli, Maharashtra",
      href: "/contact",
      location: "Sangli"
    },
    {
      title: "POS Machine Rolls Kolhapur",
      description: "Quality POS machine thermal rolls delivery in Kolhapur",
      href: "/products",
      location: "Kolhapur"
    },
    {
      title: "Billing Paper Satara", 
      description: "Fast delivery of billing machine paper in Satara district",
      href: "/products",
      location: "Satara"
    },
    {
      title: "Thermal Rolls Pune",
      description: "Premium thermal paper rolls supplier for Pune businesses",
      href: "/contact",
      location: "Pune"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Product Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Our <span className="text-primary">Product Range</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keywordLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-4">
                  <Link to={link.href} className="block group">
                    <div className="flex items-start justify-between mb-2">
                      <Package className="h-5 w-5 text-primary" />
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-2 text-xs text-primary opacity-75">
                      {link.keywords}
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location-based Links */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Service <span className="text-primary">Locations</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {locationLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-4">
                  <Link to={link.href} className="block group">
                    <div className="flex items-start justify-between mb-2">
                      <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-2 text-xs text-accent font-medium">
                      📍 {link.location}, Maharashtra
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Breadcrumb-style Navigation */}
        <div className="mt-12 bg-card p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Site Navigation</h3>
          <nav className="flex flex-wrap gap-2">
            <Link to="/" className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
              <Home className="h-3 w-3 mr-1" />
              Home
            </Link>
            <ArrowRight className="h-4 w-4 text-muted-foreground self-center" />
            <Link to="/products" className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm hover:bg-accent/20 transition-colors">
              <Package className="h-3 w-3 mr-1" />
              Products
            </Link>
            <ArrowRight className="h-4 w-4 text-muted-foreground self-center" />
            <Link to="/about" className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm hover:bg-secondary/20 transition-colors">
              <Info className="h-3 w-3 mr-1" />
              About
            </Link>
            <ArrowRight className="h-4 w-4 text-muted-foreground self-center" />
            <Link to="/contact" className="inline-flex items-center px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm hover:bg-destructive/20 transition-colors">
              <Phone className="h-3 w-3 mr-1" />
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;