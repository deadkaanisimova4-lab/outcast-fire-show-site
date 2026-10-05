import { useEffect } from 'react';

interface Faq {
  q: string;
  a: string;
}

interface Offer {
  name: string;
  description: string;
  price: number;
}

interface PageMetaProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image: string;
  breadcrumbName: string;
  serviceName: string;
  offers: Offer[];
  faq: Faq[];
}

const ROOT = 'https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/';

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let meta = document.querySelector(`meta[${attr}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const PageMeta = ({ title, description, keywords, url, image, breadcrumbName, serviceName, offers, faq }: PageMetaProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href') || null;

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }

    const jsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        serviceType: 'Огненное шоу',
        description,
        url,
        image,
        provider: {
          '@type': 'LocalBusiness',
          name: 'OUTCAST Fire Show',
          telephone: '+7-908-574-08-13',
          url: ROOT,
          address: { '@type': 'PostalAddress', addressLocality: 'Челябинск', addressCountry: 'RU' },
        },
        areaServed: { '@type': 'City', name: 'Челябинск' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: serviceName,
          itemListElement: offers.map((o) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: o.name, description: o.description },
            price: String(o.price),
            priceCurrency: 'RUB',
          })),
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: ROOT },
          { '@type': 'ListItem', position: 2, name: breadcrumbName, item: url },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ];

    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-landing-jsonld', 'true');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      if (prevCanonical) {
        document.querySelector('link[rel="canonical"]')?.setAttribute('href', prevCanonical);
      }
      document.querySelector('script[data-landing-jsonld]')?.remove();
    };
  }, [title, description, keywords, url, image, breadcrumbName, serviceName, offers, faq]);

  return null;
};

export default PageMeta;
