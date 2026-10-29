interface BlogMetaProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

const DEFAULT_IMAGE = 'https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg';

// Мета-теги статьи блога для head() маршрута (рендерятся на сервере).
export const blogHead = ({ title, description, keywords, url, image, datePublished, dateModified }: BlogMetaProps) => {
  const imgUrl = image || DEFAULT_IMAGE;
  const published = datePublished || '2024-11-25';
  const modified = dateModified || datePublished || '2024-11-25';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: imgUrl,
    url,
    datePublished: published,
    dateModified: modified,
    author: {
      '@type': 'Organization',
      name: 'OUTCAST Fire Show',
      url: 'https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/',
      telephone: '+79085740813',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Челябинск',
        addressCountry: 'RU'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'OUTCAST Fire Show',
      logo: {
        '@type': 'ImageObject',
        url: DEFAULT_IMAGE
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'article' },
      { property: 'og:image', content: imgUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imgUrl },
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(jsonLd) }],
  };
};

// Мета-теги теперь задаются в head() маршрута; компонент оставлен для совместимости со страницами.
const BlogMeta = (_props: BlogMetaProps) => null;

export default BlogMeta;
