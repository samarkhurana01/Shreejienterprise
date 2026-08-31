import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical,
}) {
  const siteUrl = "https://www.shrejienterprises.com";

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "ShreeJi Enterprises",
    url: siteUrl,
    telephone: "+917379433305",
    description:
      "ShreeJi Enterprises provides skilled, semi-skilled and unskilled manpower and labour contractor services for industrial, construction, commercial and warehouse requirements in Kundli, Sonipat and Delhi NCR.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Dahiya Complex, B-12, Near Shree Makhan Bhog",
      addressLocality: "Kundli",
      addressRegion: "Haryana",
      postalCode: "131028",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Kundli",
      },
      {
        "@type": "City",
        name: "Sonipat",
      },
      {
        "@type": "City",
        name: "Delhi",
      },
      {
        "@type": "City",
        name: "Noida",
      },
      {
        "@type": "City",
        name: "Greater Noida",
      },
      {
        "@type": "City",
        name: "Gurgaon",
      },
      {
        "@type": "City",
        name: "Ghaziabad",
      },
      {
        "@type": "City",
        name: "Faridabad",
      },
    ],
    serviceType: [
      "Manpower Supply",
      "Labour Contractor Services",
      "Skilled Manpower Supply",
      "Semi-Skilled Manpower Supply",
      "Unskilled Manpower Supply",
      "Industrial Manpower Supply",
      "Construction Labour Supply",
      "Warehouse Manpower Supply",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "ShreeJi Enterprises",
    url: siteUrl,
    telephone: "+917379433305",
  };

  return (
    <Helmet>

      {/* Basic SEO */}

      <title>
        {title}
      </title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={`${siteUrl}${canonical}`}
      />


      {/* Open Graph */}

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={`${siteUrl}${canonical}`}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="ShreeJi Enterprises"
      />


      {/* Local Business Schema */}

      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>


      {/* Organization Schema */}

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

    </Helmet>
  );
}

export default SEO;
