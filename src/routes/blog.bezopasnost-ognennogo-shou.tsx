import { createFileRoute } from '@tanstack/react-router';
import BlogArticle5 from '@/pages/BlogArticle5';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/bezopasnost-ognennogo-shou')({
  head: () => blogHead({
    "title": "Безопасность огненного шоу — Как мы защищаем зрителей | OUTCAST Fire Show",
    "description": "Всё о безопасности файер-шоу: какие меры принимают профессионалы, какие документы нужны, как выбрать безопасных артистов. Подробный разбор от OUTCAST Fire Show.",
    "keywords": "безопасность огненного шоу, файер-шоу безопасно, пожарная безопасность огненное шоу, страховка артистов огненного шоу, безопасное огненное шоу челябинск",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/bezopasnost-ognennogo-shou",
    "image": "https://cdn.poehali.dev/files/282a58c5-553c-4af6-b6e2-c9bf922c59c0.jpg",
    "datePublished": "2026-02-10",
    "dateModified": "2026-02-20"
}),
  component: BlogArticle5,
});
