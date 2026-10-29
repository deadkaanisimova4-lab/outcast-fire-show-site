import { createFileRoute } from '@tanstack/react-router';
import BlogArticle9 from '@/pages/BlogArticle9';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/russkoe-ognennoe-shou-na-svadbu')({
  head: () => blogHead({
    "title": "Русское огненное шоу на свадьбу в Челябинске — постановка RUSSIAN STYLE от 43 000 ₽ | OUTCAST",
    "description": "Огненное шоу в русском стиле на свадьбу, юбилей и корпоратив в Челябинске: яркие костюмы, синхронные элементы, море огня и треки, которые подпевают все гости. Состав, цена, как заказать.",
    "keywords": "русское огненное шоу на свадьбу челябинск, огненное шоу в русском стиле, русский стиль файер шоу, огненное шоу в народном стиле, огненное шоу в русских костюмах, русское файер шоу челябинск, заказать огненное шоу на свадьбу, RUSSIAN STYLE огненное шоу",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/russkoe-ognennoe-shou-na-svadbu",
    "image": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/russian-style-cover.jpg",
    "datePublished": "2026-10-18",
    "dateModified": "2026-10-18"
}),
  component: BlogArticle9,
});
