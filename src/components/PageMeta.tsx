import type { LandingData } from '@/components/EventLanding';

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
const SITE = 'https://xn----74-k4dma6dbagfc4ewd.xn--p1ai';

// Мета-теги посадочной страницы для head() маршрута (рендерятся на сервере).
export const pageHead = ({ title, description, keywords, url, image, breadcrumbName, serviceName, offers, faq }: PageMetaProps) => {
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

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(jsonLd) }],
  };
};

export const landingHead = (data: LandingData) =>
  pageHead({
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    url: `${SITE}/${data.slug}`,
    image: data.image,
    breadcrumbName: data.breadcrumbName,
    serviceName: data.h1,
    offers: data.programs.map((p) => ({ name: p.name, description: p.description, price: p.price })),
    faq: data.faq,
  });
