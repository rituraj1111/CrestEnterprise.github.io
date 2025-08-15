import { Helmet } from 'react-helmet';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Thermal Paper Rolls | Crest Enterprise</title>
        <meta name="description" content="Get answers to common questions about thermal paper rolls, POS paper, pricing, bulk orders, and technical specifications. Expert support for all your thermal printing needs." />
        <meta name="keywords" content="thermal paper FAQ, POS paper questions, thermal roll specifications, bulk pricing FAQ, BPA-free thermal paper, thermal paper compatibility, receipt roll sizes" />
        <link rel="canonical" href="https://www.crestthermalrolls.com/faq" />
        <meta property="og:title" content="FAQ - Thermal Paper Rolls Questions & Answers | Crest Enterprise" />
        <meta property="og:description" content="Find answers to common questions about thermal paper rolls, pricing, specifications, and bulk orders." />
        <meta property="og:url" content="https://www.crestthermalrolls.com/faq" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <BreadcrumbNav 
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ", href: "/faq" }
            ]}
          />
          <div className="py-8">
            <div className="container mx-auto px-4 text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers to the most common questions about our thermal paper rolls, 
                technical specifications, pricing, and services.
              </p>
            </div>
            <FAQSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;