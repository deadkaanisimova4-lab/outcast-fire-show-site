import { createFileRoute } from '@tanstack/react-router';
import BlogArticle3 from '@/pages/BlogArticle3';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/chto-takoe-faier-shou-vidy-i-stili')({
  head: () => blogHead({
    "title": "Что такое файер-шоу: виды, стили и реквизит — Полный гид от OUTCAST",
    "description": "Всё о файер-шоу: 6 видов реквизита, 6 стилей выступления, спецэффекты, техника безопасности. Подробный гид от профессионалов огненного искусства OUTCAST Fire Show.",
    "keywords": "что такое файер-шоу, виды огненного шоу, файер-шоу реквизит, стили огненного шоу, fire show, огненное искусство, пои огонь, стафф огонь",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/chto-takoe-faier-shou-vidy-i-stili",
    "image": "https://cdn.poehali.dev/files/10e15dc7-2136-468b-a52f-6e4c74eda592.jpg",
    "datePublished": "2024-11-25",
    "dateModified": "2026-02-20"
}),
  component: BlogArticle3,
});
