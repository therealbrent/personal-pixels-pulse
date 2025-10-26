import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl: string;
}

export default function SEO({ 
  title, 
  description, 
  ogTitle, 
  ogDescription, 
  ogImage,
  canonicalUrl 
}: SEOProps) {
  const fullCanonicalUrl = `https://brentsummers.com${canonicalUrl}`;
  const fullOgImageUrl = ogImage ? `https://brentsummers.com${ogImage}` : undefined;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {fullOgImageUrl && <meta property="og:image" content={fullOgImageUrl} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={ogTitle || title} />
      <meta property="twitter:description" content={ogDescription || description} />
      {fullOgImageUrl && <meta property="twitter:image" content={fullOgImageUrl} />}
    </Helmet>
  );
}
