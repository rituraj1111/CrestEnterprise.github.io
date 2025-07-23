import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Building, Package, MessageSquare, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "",
    quantity: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear errors when user starts typing
    if (field === "email" && errors.email) {
      setErrors(prev => ({ ...prev, email: "" }));
    }
    if (field === "phone" && errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }));
      return;
    }
    
    // Validate phone
    if (!validatePhone(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: "Please enter a valid 10-digit mobile number" }));
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        product_type: formData.productType,
        quantity: formData.quantity,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        productType: "",
        quantity: "",
        message: "",
      });
      
      onClose();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Get Custom Quote</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-name">Full Name *</Label>
              <div className="relative">
                <Input
                  id="modal-name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="modal-email">Email Address *</Label>
              <div className="relative">
                <Input
                  id="modal-email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                />
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-phone">Mobile Number *</Label>
              <div className="relative">
                <Input
                  id="modal-phone"
                  type="tel"
                  placeholder="Your mobile number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className={`pl-10 ${errors.phone ? "border-destructive" : ""}`}
                />
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.phone && (
                <p className="text-sm text-destructive mt-1">{errors.phone}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="modal-company">Company Name</Label>
              <div className="relative">
                <Input
                  id="modal-company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="pl-10"
                />
                <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-product">Product Type *</Label>
              <div className="relative">
                <Select value={formData.productType} onValueChange={(value) => handleInputChange("productType", value)} required>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="57mm-13mtr">57mm × 13 mtr</SelectItem>
                    <SelectItem value="57mm-15mtr">57mm × 15 mtr</SelectItem>
                    <SelectItem value="57mm-20mtr">57mm × 20 mtr</SelectItem>
                    <SelectItem value="57mm-25mtr">57mm × 25 mtr</SelectItem>
                    <SelectItem value="79mm-30mtr">79mm × 30 mtr</SelectItem>
                    <SelectItem value="79mm-40mtr">79mm × 40 mtr</SelectItem>
                    <SelectItem value="79mm-50mtr">79mm × 50 mtr</SelectItem>
                    <SelectItem value="custom">Custom Requirements</SelectItem>
                  </SelectContent>
                </Select>
                <Package className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="modal-quantity">Quantity Required</Label>
              <Input
                id="modal-quantity"
                type="text"
                placeholder="e.g., 1000 rolls"
                value={formData.quantity}
                onChange={(e) => handleInputChange("quantity", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="modal-message">Additional Requirements</Label>
            <div className="relative">
              <Textarea
                id="modal-message"
                placeholder="Please describe your specific requirements, delivery timeline, or any other details..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="pl-10 min-h-[100px] resize-none"
              />
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-accent hover:opacity-90"
          >
            {isSubmitting ? (
              <>Sending Quote Request...</>
            ) : (
              <>
                Send Quote Request <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;