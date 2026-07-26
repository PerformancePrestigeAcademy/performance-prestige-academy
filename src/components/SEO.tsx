import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
};

export default function SEO({
  title,
  description,
  keywords = "",
  image = "/images/og-image.jpg",
  url,
}: SEOProps) {
  const location = useLocation();

  const canonicalUrl =
    url ||
    `https://www.performance-prestige-academy.fr${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>

      <link rel="canonical" href={canonicalUrl} />

      <meta
        name="description"
        content={description}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <meta name="author" content="Performance & Prestige Academy" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Performance & Prestige Academy" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}