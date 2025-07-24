import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  name: string;
  category: string;
  size: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: {
    diameter: string;
    length: string;
    coreDiameter: string;
    gsm: string;
  };
  image: string;
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm sm:max-w-2xl lg:max-w-6xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl lg:text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 mt-4">
          {/* Left side - Large Image */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="relative rounded-lg overflow-hidden bg-muted flex-1">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2 mt-4 self-start">
              {product.size}
            </Badge>
          </div>
          
          {/* Right side - Compact Details */}
          <div className="flex flex-col space-y-4 overflow-y-auto">
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Specifications</h3>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Diameter:</span>
                  <span>{product.specifications.diameter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Length:</span>
                  <span>{product.specifications.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Core Diameter:</span>
                  <span>{product.specifications.coreDiameter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">GSM:</span>
                  <span>{product.specifications.gsm}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Best Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <Badge key={app} variant="outline">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="text-center mb-4">
                <div className="text-xl font-bold text-primary mb-2">Contact for Pricing</div>
                <div className="text-sm text-muted-foreground">Competitive rates for bulk orders</div>
              </div>
              
              <Button asChild className="w-full bg-gradient-accent hover:opacity-90 text-lg py-3">
                <Link to="/contact" onClick={onClose}>
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;