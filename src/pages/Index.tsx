import { Helmet } from 'react-helmet';
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
        <meta name="keywords" content="thermal paper billing rolls, billing rolls, POS machine rolls, billing paper, Sangli, Maharashtra, India, Crest Enterprise, receipt rolls, POS rolls, Kolhapur, Satara, Solapur, Miraj" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Sangli, Maharashtra, India" />
        <meta name="geo.position" content="16.8524;74.5815" />
        <meta name="ICBM" content="16.8524, 74.5815" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Crest Enterprise",
            "address": {
              "streetAddress": "Your Address",
              "addressLocality": "Sangli",
              "addressRegion": "Maharashtra",
              "postalCode": "416416",
              "addressCountry": "IN"
            },
            "telephone": "+91-XXXXXXXXXX",
            "url": "https://crestthermalrolls.com"
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
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
