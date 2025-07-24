import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import QuoteModal from "./QuoteModal";

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
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  if (!product) return null;

  const handleGetQuote = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="w-[90vw] max-w-5xl h-[85vh] max-h-[85vh] p-0 overflow-hidden">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="p-4 pb-2 border-b bg-muted/30 flex-shrink-0">
              <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold pr-8">{product.name}</DialogTitle>
            </div>
            
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
              {/* Left side - Large Image */}
              <div className="lg:flex-[7] flex-[4] flex flex-col p-4 bg-muted/20 min-h-0">
                <div className="relative rounded-lg overflow-hidden bg-white flex-1 min-h-0 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain max-w-none"
                    loading="eager"
                  />
                </div>
                <Badge variant="secondary" className="text-sm sm:text-base px-3 py-2 mt-3 self-start">
                  {product.size}
                </Badge>
              </div>
              
              {/* Right side - Details */}
              <div className="lg:flex-[3] flex-[6] flex flex-col bg-background min-h-0">
                {/* Scrollable content area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                    <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Diameter:</span>
                        <span>{product.specifications.diameter}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Length:</span>
                        <span>{product.specifications.length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Core Diameter:</span>
                        <span>{product.specifications.coreDiameter}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">GSM:</span>
                        <span>{product.specifications.gsm}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Best Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <Badge key={app} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Fixed bottom section */}
                <div className="p-4 border-t bg-background flex-shrink-0">
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold text-primary mb-1">Contact for Pricing</div>
                    <div className="text-xs text-muted-foreground">Competitive rates for bulk orders</div>
                  </div>
                  
                  <Button 
                    onClick={handleGetQuote}
                    className="w-full bg-gradient-accent hover:opacity-90 text-sm sm:text-base py-2"
                  >
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default ProductDetailModal;