import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from "@/config/emailjs";
import { Helmet } from 'react-helmet';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "",
    quantity: "",
    message: "",
  });

  const validateForm = () => {
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address (e.g., name@company.com)",
        variant: "destructive"
      });
      return false;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'N/A',
        product_type: formData.productType,
        quantity: formData.quantity || 'N/A',
        message: formData.message || 'No additional message',
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      };
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      toast({
        title: "Enquiry Sent Successfully!",
        description: "Thank you for your enquiry. We will get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        productType: "",
        quantity: "",
        message: "",
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      const subject = encodeURIComponent(`Enquiry from ${formData.name} - ${formData.company || 'Individual'}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Company: ${formData.company || 'N/A'}\n` +
        `Product Type: ${formData.productType}\n` +
        `Quantity: ${formData.quantity || 'N/A'}\n\n` +
        `Message:\n${formData.message || 'No additional message'}`
      );
      const mailtoLink = `mailto:${EMAILJS_CONFIG.TO_EMAIL}?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      toast({
        title: "Opening Email Client",
        description: "EmailJS is not configured. Your default email client will open to send the enquiry.",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Crest Enterprise | Get Quote for Thermal Paper Billing Rolls | Sangli Maharashtra</title>
        <meta name="description" content="Contact Crest Enterprise for bulk orders, quotes on thermal paper billing rolls, POS machine paper in Sangli, Kolhapur, Satara, Pune, Maharashtra. Call +91-9876543210 for instant quote and fast delivery." />
        <meta name="keywords" content="contact crest enterprise, thermal paper supplier contact, billing rolls quote, POS machine rolls price, Sangli supplier, Maharashtra thermal paper, bulk order, instant quote, fast delivery, customer support" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Sangli, Maharashtra, India" />
        <meta name="geo.position" content="16.8524;74.5815" />
        <meta name="ICBM" content="16.8524, 74.5815" />
        <meta property="og:title" content="Contact Crest Enterprise | Thermal Paper Supplier Sangli Maharashtra" />
        <meta property="og:description" content="Get instant quotes for thermal paper billing rolls and POS machine paper. Fast delivery across Maharashtra, India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crestthermalrolls.com/contact" />
        <meta property="og:image" content="https://crestthermalrolls.com/thermal-paper-story.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Crest Enterprise | Thermal Paper Supplier" />
        <meta name="twitter:description" content="Get instant quotes for thermal paper billing rolls in Maharashtra, India." />
        <link rel="canonical" href="https://crestthermalrolls.com/contact" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Crest Enterprise",
            "description": "Contact page for Crest Enterprise - thermal paper billing rolls supplier",
            "url": "https://crestthermalrolls.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Crest Enterprise",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sangli",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "telephone": "+91-9876543210",
              "email": "info@crestthermalrolls.com"
            }
          }
        `}</script>
      </Helmet>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Get in{' '}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your thermal paper needs? We're here to help you find the perfect solution for your business.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                    Let's Talk Business
                  </CardTitle>
                  <CardDescription>
                    Reach out to us for quotes, custom solutions, or any questions about our thermal paper products.
                  </CardDescription>
                </CardHeader>
              </Card>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">9890479000</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat: 9AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">enterprise.crest@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      Kupwad, Sangli 416 416<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Send Us Your Enquiry</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you with a customized quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="Your mobile number"
                          maxLength={10}
                          pattern="[0-9]{10}"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="product-type">Product Type *</Label>
                        <Select value={formData.productType} onValueChange={(value) => handleChange("productType", value)}>
                          <SelectTrigger>
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
                            <SelectItem value="custom">Custom Size Requirements</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Estimated Quantity</Label>
                        <Input
                          id="quantity"
                          value={formData.quantity}
                          onChange={(e) => handleChange("quantity", e.target.value)}
                          placeholder="e.g., 1000 rolls/month"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your specific requirements, delivery preferences, or any questions you have..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-accent hover:opacity-90" size="lg">
                      <Send className="h-5 w-5 mr-2" />
                      Submit Enquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;