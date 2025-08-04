import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHelperProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  schemaMarkup?: object;
}

const SEOHelper: React.FC<SEOHelperProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://crestthermalrolls.com/thermal-paper-story.jpg',
  schemaMarkup
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Crest Enterprise" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Sangli, Maharashtra, India" />
      <meta name="geo.position" content="16.8524;74.5815" />
      <meta name="ICBM" content="16.8524, 74.5815" />
      
      {/* Schema markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelper;