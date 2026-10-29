import { createFileRoute } from '@tanstack/react-router';
import BlogArticle4 from '@/pages/BlogArticle4';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/ognennoe-shou-na-korporativ')({
  head: () => blogHead({
    "title": "Огненное шоу на корпоратив в Челябинске — Как удивить коллег | OUTCAST Fire Show",
    "description": "Как организовать файер-шоу на корпоративе: подходящие форматы, тайминг, площадки и бюджет. Практическое руководство от OUTCAST Fire Show.",
    "keywords": "огненное шоу на корпоратив, файер-шоу корпоратив челябинск, шоу на корпоратив цена, заказать огненное шоу на корпоратив, развлечение на корпоратив челябинск, новогодний корпоратив огненное шоу",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/ognennoe-shou-na-korporativ",
    "image": "https://cdn.poehali.dev/files/d524fd97-2aa3-484d-ae46-9fa3748e5790.jpg",
    "datePublished": "2026-02-15",
    "dateModified": "2026-02-20"
}),
  component: BlogArticle4,
});
