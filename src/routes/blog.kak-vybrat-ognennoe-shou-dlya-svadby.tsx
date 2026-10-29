import { createFileRoute } from '@tanstack/react-router';
import BlogArticle1 from '@/pages/BlogArticle1';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/kak-vybrat-ognennoe-shou-dlya-svadby')({
  head: () => blogHead({
    "title": "Как выбрать огненное шоу для свадьбы в Челябинске — Гид от OUTCAST Fire Show",
    "description": "Полное руководство по выбору файер-шоу на свадьбу: какие программы бывают, как подобрать под формат, что важно учесть. Советы от профессионалов OUTCAST Fire Show с опытом 7+ лет.",
    "keywords": "огненное шоу на свадьбу, файер-шоу цена челябинск, заказать огненное шоу на свадьбу, как выбрать файер-шоу, свадебное огненное шоу челябинск, выступление с огнем на свадьбу",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/kak-vybrat-ognennoe-shou-dlya-svadby",
    "image": "https://cdn.poehali.dev/files/d524fd97-2aa3-484d-ae46-9fa3748e5790.jpg",
    "datePublished": "2024-11-25",
    "dateModified": "2026-02-20"
}),
  component: BlogArticle1,
});
