import { createFileRoute } from '@tanstack/react-router';
import BlogArticle2 from '@/pages/BlogArticle2';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/top-5-ploshchadok-v-chelyabinske-dlya-faier-shou')({
  head: () => blogHead({
    "title": "Топ-5 площадок в Челябинске для файер-шоу — Обзор от OUTCAST Fire Show",
    "description": "Лучшие места для огненного шоу в Челябинске: загородные комплексы, рестораны, открытые площадки. Полная информация, адреса, цены, критерии выбора.",
    "keywords": "площадки для огненного шоу челябинск, где провести файер-шоу, загородные комплексы челябинск, рестораны челябинск огненное шоу, площадки для файер-шоу",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/top-5-ploshchadok-v-chelyabinske-dlya-faier-shou",
    "datePublished": "2024-11-25",
    "dateModified": "2026-02-20",
    "image": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/og/top-5-ploshchadok-v-chelyabinske-dlya-faier-shou.jpg"
}),
  component: BlogArticle2,
});
