import { createFileRoute } from '@tanstack/react-router';
import BlogArticle6 from '@/pages/BlogArticle6';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/ognennoe-shou-na-den-rozhdeniya')({
  head: () => blogHead({
    "title": "Огненное шоу на день рождения — Как сделать праздник незабываемым | OUTCAST Fire Show",
    "description": "Файер-шоу на день рождения и юбилей: идеи, форматы, цены. Как удивить именинника и гостей огненным представлением в Челябинске.",
    "keywords": "огненное шоу на день рождения, файер-шоу на юбилей, заказать огненное шоу на день рождения челябинск, шоу на юбилей цена, огненное шоу на 30 лет, файер-шоу на 50 лет",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/ognennoe-shou-na-den-rozhdeniya",
    "image": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/og/ognennoe-shou-na-den-rozhdeniya.jpg",
    "datePublished": "2026-02-18",
    "dateModified": "2026-02-20"
}),
  component: BlogArticle6,
});
