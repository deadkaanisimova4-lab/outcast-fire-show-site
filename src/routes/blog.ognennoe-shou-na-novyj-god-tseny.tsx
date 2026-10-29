import { createFileRoute } from '@tanstack/react-router';
import BlogArticle8 from '@/pages/BlogArticle8';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/ognennoe-shou-na-novyj-god-tseny')({
  head: () => blogHead({
    "title": "Огненное шоу на Новый год в Челябинске — цены, особенности, как заказать | OUTCAST Fire Show",
    "description": "Огненное шоу на Новый год — один из самых эффектных сюрпризов для гостей. Узнайте об особенностях новогоднего периода, ценах и почему бронировать нужно заранее.",
    "keywords": "огненное шоу на новый год, файер-шоу новый год челябинск, заказать огненное шоу 31 декабря, новогоднее огненное шоу цена, файер-шоу корпоратив новый год, огненное шоу корпоратив декабрь",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/ognennoe-shou-na-novyj-god-tseny",
    "image": "https://cdn.poehali.dev/projects/72a14de5-7353-4caf-b47a-98d3caa2c09a/files/a8774fc3-2863-4ed4-be83-e56994b2ada4.jpg",
    "datePublished": "2026-05-02",
    "dateModified": "2026-05-02"
}),
  component: BlogArticle8,
});
