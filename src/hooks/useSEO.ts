import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
}

export const useSEO = (seoData: SEOData) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const canonicalUrl = seoData.canonical || `https://crestthermalrolls.com${location.pathname}`;
    canonical.setAttribute('href', canonicalUrl);

    // Track page view for SEO
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-N0M2EDJRZ9', {
        page_title: seoData.title,
        page_location: canonicalUrl,
      });
    }
  }, [seoData, location]);
};

// Predefined SEO data for different pages
export const seoConfig = {
  home: {
    title: "Thermal Paper Billing Rolls Supplier in Sangli, Maharashtra | Crest Enterprise",
    description: "Crest Enterprise supplies premium thermal paper billing rolls, POS machine paper, receipt rolls in Sangli, Kolhapur, Satara, Pune, Maharashtra. 57mm & 79mm sizes. Fast delivery across India.",
    keywords: "thermal paper billing rolls, billing rolls, POS machine rolls, billing paper, Sangli, Maharashtra, India, Crest Enterprise, receipt rolls, POS rolls, Kolhapur, Satara, Pune, thermal paper supplier",
  },
  products: {
    title: "Thermal Paper Billing Rolls | POS Machine Paper | Crest Enterprise Maharashtra",
    description: "Buy thermal paper billing rolls, POS machine paper, receipt rolls for billing machines in Sangli, Kolhapur, Satara, Pune, Maharashtra. 57mm, 79mm sizes available. Fast delivery across India.",
    keywords: "thermal paper billing rolls, POS machine paper, receipt rolls, billing machine paper, thermal paper rolls, POS paper, 57mm thermal paper, 79mm thermal paper, billing rolls supplier",
  },
  about: {
    title: "About Crest Enterprise | Leading Thermal Paper Supplier Sangli Maharashtra",
    description: "Established thermal paper supplier since 2015. Crest Enterprise manufactures premium billing rolls, POS machine paper in Sangli, Maharashtra. Serving Kolhapur, Satara, Pune districts.",
    keywords: "about crest enterprise, thermal paper manufacturer, billing rolls supplier, established 2015, Maharashtra thermal paper company, quality assurance",
  },
  contact: {
    title: "Contact Crest Enterprise | Get Quote for Thermal Paper Billing Rolls",
    description: "Contact Crest Enterprise for bulk orders, quotes on thermal paper billing rolls, POS machine paper in Sangli, Kolhapur, Satara, Pune, Maharashtra. Fast delivery.",
    keywords: "contact crest enterprise, thermal paper supplier contact, billing rolls quote, bulk order, instant quote, fast delivery, customer support",
  },
};