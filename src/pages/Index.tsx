import { Helmet } from 'react-helmet';
import { CheckCircle, Truck, Shield } from "lucide-react";
import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import ProductsSection from "@/components/ProductsSection";
import CustomersSection from "@/components/CustomersSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Thermal Paper Billing Rolls Supplier in Sangli, Maharashtra | Crest Enterprise</title>
        <meta name="description" content="Crest Enterprise supplies thermal paper billing rolls, POS machine rolls, and billing paper in Sangli, Maharashtra, and across India. Fast delivery and best quality." />
        <meta name="keywords" content="thermal paper billing rolls, billing rolls, POS machine rolls, billing paper, Sangli, Maharashtra, India, Crest Enterprise, receipt rolls, POS rolls, Kolhapur, Satara, Solapur, Miraj, thermal paper supplier, billing machine paper, POS paper" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Sangli, Maharashtra, India" />
        <meta name="geo.position" content="16.8524;74.5815" />
        <meta name="ICBM" content="16.8524, 74.5815" />
        <meta property="og:title" content="Thermal Paper Billing Rolls Supplier in Sangli, Maharashtra | Crest Enterprise" />
        <meta property="og:description" content="Premium thermal paper rolls for POS systems, billing machines. Fast delivery in Sangli, Kolhapur, Satara, Pune, Maharashtra." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.crestthermalrolls.com/" />
        <meta property="og:image" content="https://www.crestthermalrolls.com/thermal-paper-story.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thermal Paper Billing Rolls Supplier | Crest Enterprise" />
        <meta name="twitter:description" content="Premium thermal paper rolls for POS systems and billing machines in Maharashtra, India." />
        <link rel="canonical" href="https://www.crestthermalrolls.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Crest Enterprise",
            "address": {
              "streetAddress": "Kupwad",
              "addressLocality": "Sangli",
              "addressRegion": "Maharashtra",
              "postalCode": "416416",
              "addressCountry": "IN"
            },
            "telephone": "+91-9890479000",
            "email": "enterprise.crest@gmail.com",
            "url": "https://www.crestthermalrolls.com",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "16.8524",
              "longitude": "74.5815"
            },
            "openingHours": "Mo-Sa 09:00-18:00",
            "areaServed": [
              {
                "@type": "City",
                "name": "Sangli",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Maharashtra"
                }
              },
              {
                "@type": "City", 
                "name": "Kolhapur",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Maharashtra"
                }
              },
              {
                "@type": "City",
                "name": "Satara", 
                "containedInPlace": {
                  "@type": "State",
                  "name": "Maharashtra"
                }
              },
              {
                "@type": "City",
                "name": "Pune",
                "containedInPlace": {
                  "@type": "State", 
                  "name": "Maharashtra"
                }
              }
            ],
            "sameAs": [
              "https://www.google.com/maps/place/Crest+Enterprise"
            ]
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <VideoHero />
          <ProductsSection />
          <CustomersSection />
          <AchievementsSection />
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 py-12 rounded-2xl mb-8">
            <div className="container mx-auto px-4 text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full p-2">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span className="text-foreground font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full p-2">
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="text-foreground font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full p-2">
                    <Shield className="h-5 w-5" />
                  </div>
                  <span className="text-foreground font-medium">BPA Free</span>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
