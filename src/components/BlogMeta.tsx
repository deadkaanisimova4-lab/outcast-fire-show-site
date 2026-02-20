import { useEffect } from 'react';

interface BlogMetaProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

const BlogMeta = ({ title, description, keywords, url, image, datePublished, dateModified }: BlogMetaProps) => {
  useEffect(() => {
    document.title = title;
    
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'article' },
      { property: 'og:image', content: image || 'https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image || 'https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg' }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }

    const imgUrl = image || 'https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg';
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
          url: 'https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      }
    };

    const existingScript = document.querySelector('script[data-blog-jsonld]');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-blog-jsonld', 'true');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const s = document.querySelector('script[data-blog-jsonld]');
      if (s) s.remove();
    };
  }, [title, description, keywords, url, image, datePublished, dateModified]);

  return null;
};

export default BlogMeta;