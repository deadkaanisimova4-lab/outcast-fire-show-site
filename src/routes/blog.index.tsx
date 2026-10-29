import { createFileRoute } from '@tanstack/react-router';
import BlogIndex from '@/pages/BlogIndex';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/')({
  head: () => blogHead({
    "title": "Блог OUTCAST Fire Show — Статьи об огненном шоу в Челябинске",
    "description": "Полезные статьи о файер-шоу: как выбрать программу, лучшие площадки Челябинска, виды и стили огненного шоу. Экспертные советы от OUTCAST Fire Show.",
    "keywords": "блог огненное шоу, файер-шоу статьи, огненное шоу челябинск, как заказать файер-шоу, outcast fire show",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog"
}),
  component: BlogIndex,
});
