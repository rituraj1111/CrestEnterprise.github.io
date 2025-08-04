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
        <meta name="keywords" content="thermal paper billing rolls, billing rolls, POS machine rolls, billing paper, Sangli, Maharashtra, India, Crest Enterprise, receipt rolls, POS rolls, Kolhapur, Satara, Solapur, Miraj, thermal paper supplier, billing machine paper, POS paper" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Sangli, Maharashtra, India" />
        <meta name="geo.position" content="16.8524;74.5815" />
        <meta name="ICBM" content="16.8524, 74.5815" />
        <meta property="og:title" content="Thermal Paper Billing Rolls Supplier in Sangli, Maharashtra | Crest Enterprise" />
        <meta property="og:description" content="Premium thermal paper rolls for POS systems, billing machines. Fast delivery in Sangli, Kolhapur, Satara, Pune, Maharashtra." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crestthermalrolls.com/" />
        <meta property="og:image" content="https://crestthermalrolls.com/thermal-paper-story.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thermal Paper Billing Rolls Supplier | Crest Enterprise" />
        <meta name="twitter:description" content="Premium thermal paper rolls for POS systems and billing machines in Maharashtra, India." />
        <link rel="canonical" href="https://crestthermalrolls.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Crest Enterprise",
            "address": {
              "streetAddress": "Manufacturing Unit, Industrial Area",
              "addressLocality": "Sangli",
              "addressRegion": "Maharashtra",
              "postalCode": "416416",
              "addressCountry": "IN"
            },
            "telephone": "+91-9876543210",
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
