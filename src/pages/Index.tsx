import { Helmet } from 'react-helmet';
import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import ProductsSection from "@/components/ProductsSection";
import CustomersSection from "@/components/CustomersSection";
import AchievementsSection from "@/components/AchievementsSection";

import TrustSignalsSection from "@/components/TrustSignalsSection";
import CTASection from "@/components/CTASection";
import LocalizationSection from "@/components/LocalizationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Premium Thermal Paper Rolls for POS, Receipt & Billing | Crest Enterprise Maharashtra</title>
        <meta name="description" content="Leading thermal paper roll manufacturer & supplier in Maharashtra. BPA-free thermal receipt rolls, POS paper, ATM rolls 57mm & 79mm. Bulk discounts, fast delivery across India. ISO certified quality." />
        <meta name="keywords" content="thermal paper rolls, thermal receipt rolls, POS rolls, thermal paper jumbo rolls, BPA-free thermal paper, ATM paper rolls, barcode thermal paper, thermal billing rolls, POS machine paper, custom thermal receipts, thermal paper roll manufacturer, thermal paper supplier, bulk thermal rolls, best price thermal paper, 57mm thermal paper, 79mm thermal paper, eco-friendly thermal paper, Maharashtra thermal rolls, Pune thermal paper, Mumbai thermal rolls, Delhi thermal paper, Bangalore thermal rolls, premium thermal paper POS, thermal paper roll distributor" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Sangli, Maharashtra, India" />
        <meta name="geo.position" content="16.8524;74.5815" />
        <meta name="ICBM" content="16.8524, 74.5815" />
        <meta property="og:title" content="Premium Thermal Paper Rolls for POS, Receipt & Billing | Crest Enterprise" />
        <meta property="og:description" content="Leading manufacturer of BPA-free thermal receipt rolls, POS paper, ATM rolls. Bulk discounts available. Fast delivery across India. ISO certified quality guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crestthermalrolls.com/" />
        <meta property="og:image" content="https://crestthermalrolls.com/thermal-paper-story.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Thermal Paper Rolls for POS, Receipt & Billing | Crest Enterprise" />
        <meta name="twitter:description" content="Leading manufacturer of BPA-free thermal receipt rolls, POS paper, ATM rolls. Bulk discounts, fast delivery across India." />
        <link rel="canonical" href="https://crestthermalrolls.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Crest Enterprise",
            "url": "https://crestthermalrolls.com",
            "logo": "https://crestthermalrolls.com/thermal-paper-story.jpg",
            "description": "Leading manufacturer and supplier of premium thermal paper rolls, POS receipt rolls, and ATM paper in Maharashtra, India",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kupwad",
              "addressLocality": "Sangli",
              "addressRegion": "Maharashtra",
              "postalCode": "416416",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9890479000",
              "email": "enterprise.crest@gmail.com",
              "contactType": "Customer Service",
              "availableLanguage": ["English", "Hindi", "Marathi"]
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "16.8524",
              "longitude": "74.5815"
            },
            "openingHours": "Mo-Sa 09:00-18:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Thermal Paper Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "57mm Thermal Paper Rolls",
                    "description": "BPA-free thermal receipt rolls for POS systems"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Product",
                    "name": "79mm Thermal Paper Rolls",
                    "description": "Premium thermal paper rolls for high-volume applications"
                  }
                }
              ]
            },
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
              },
              {
                "@type": "City",
                "name": "Mumbai",
                "containedInPlace": {
                  "@type": "State", 
                  "name": "Maharashtra"
                }
              }
            ],
            "sameAs": [
              "https://www.google.com/maps/place/Crest+Enterprise"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150",
              "bestRating": "5"
            },
            "awards": ["ISO 9001:2015 Certified", "Eco-Friendly Manufacturing"]
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <VideoHero />
          <ProductsSection />
          <CTASection />
          <CustomersSection />
          <TrustSignalsSection />
          <LocalizationSection />
          <AchievementsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
