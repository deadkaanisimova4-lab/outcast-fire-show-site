import { createFileRoute } from '@tanstack/react-router';
import BlogArticle10 from '@/pages/BlogArticle10';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/ognennoe-shou-na-yubilej-v-chelyabinske')({
  head: () => blogHead({
    "title": "Огненное шоу на юбилей в Челябинске — программы и цены от 20 000 ₽ | OUTCAST Fire Show",
    "description": "Огненное шоу на юбилей в Челябинске: как выбрать программу для 30, 50 или 60 лет, где провести, что добавить (огненные символы, фонтаны), сколько стоит. Советы от OUTCAST Fire Show.",
    "keywords": "огненное шоу на юбилей челябинск, файер шоу на юбилей, заказать огненное шоу на юбилей, шоу на юбилей 50 лет челябинск, огненное шоу на юбилей цена, сюрприз на юбилей, огненные символы на юбилей, артисты на юбилей челябинск",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/ognennoe-shou-na-yubilej-v-chelyabinske",
    "image": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/yubilej-cover.jpg",
    "datePublished": "2026-10-18",
    "dateModified": "2026-10-18"
}),
  component: BlogArticle10,
});
