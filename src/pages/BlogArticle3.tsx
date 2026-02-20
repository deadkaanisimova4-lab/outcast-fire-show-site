import BlogMeta from '@/components/BlogMeta';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogArticleHeader from '@/components/blog/BlogArticleHeader';
import BlogArticle3Content from '@/components/blog/BlogArticle3Content';
import BlogFooter from '@/components/blog/BlogFooter';

const BlogArticle3 = () => {
  return (
    <>
      <BlogMeta
        title="Что такое файер-шоу: виды, стили и реквизит — Полный гид от OUTCAST"
        description="Всё о файер-шоу: 6 видов реквизита, 6 стилей выступления, спецэффекты, техника безопасности. Подробный гид от профессионалов огненного искусства OUTCAST Fire Show."
        keywords="что такое файер-шоу, виды огненного шоу, файер-шоу реквизит, стили огненного шоу, fire show, огненное искусство, пои огонь, стафф огонь"
        url="https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/chto-takoe-faier-shou-vidy-i-stili"
        image="https://cdn.poehali.dev/files/10e15dc7-2136-468b-a52f-6e4c74eda592.jpg"
        datePublished="2024-11-25"
        dateModified="2026-02-20"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <BlogHeader />

        <main className="pt-32 pb-16">
          <article className="container mx-auto px-4 max-w-4xl">
            <BlogArticleHeader 
              title="Что такое файер-шоу: виды и стили"
              date="25 ноября 2024"
              readTime="8 минут чтения"
            />

            <BlogArticle3Content />
          </article>
        </main>

        <BlogFooter />
      </div>
    </>
  );
};

export default BlogArticle3;