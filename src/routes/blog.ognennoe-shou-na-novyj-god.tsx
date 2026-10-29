import { createFileRoute } from '@tanstack/react-router';
import BlogArticle7 from '@/pages/BlogArticle7';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/ognennoe-shou-na-novyj-god')({
  head: () => blogHead({
    "title": "Огненное шоу на свадьбу весной 2026 — Как заказать в свадебный сезон | OUTCAST Fire Show",
    "description": "Весна и лето — пик свадебного сезона. Узнайте, как заказать огненное шоу на свадьбу в Челябинске, сколько стоит и почему бронировать лучше заранее.",
    "keywords": "огненное шоу на свадьбу 2026, заказать файер-шоу весной, свадебный сезон огненное шоу, огненное шоу на свадьбу челябинск цена, файер-шоу на свадьбу лето, заказать шоу на свадьбу заранее",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/ognennoe-shou-na-novyj-god",
    "image": "https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg",
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23"
}),
  component: BlogArticle7,
});
