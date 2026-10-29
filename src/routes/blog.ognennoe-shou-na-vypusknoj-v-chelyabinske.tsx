import { createFileRoute } from '@tanstack/react-router';
import BlogArticle11 from '@/pages/BlogArticle11';
import { blogHead } from '@/components/BlogMeta';

export const Route = createFileRoute('/blog/ognennoe-shou-na-vypusknoj-v-chelyabinske')({
  head: () => blogHead({
    "title": "Огненное шоу на выпускной в Челябинске — программы и цены от 20 000 ₽ | OUTCAST Fire Show",
    "description": "Огненное шоу на выпускной в Челябинске: какую программу выбрать для школы, колледжа или вуза, как обеспечить безопасность, что добавить (огненные символы, огнепады), сколько стоит и когда бронировать.",
    "keywords": "огненное шоу на выпускной челябинск, файер шоу на выпускной, заказать огненное шоу на выпускной, шоу на выпускной цена, выпускной 11 класс огненное шоу, выпускной в школе файер шоу, развлечение на выпускной челябинск, шоу на выпускной вечер",
    "url": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/ognennoe-shou-na-vypusknoj-v-chelyabinske",
    "image": "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/og/ognennoe-shou-na-vypusknoj-v-chelyabinske.jpg",
    "datePublished": "2026-10-18",
    "dateModified": "2026-10-18"
}),
  component: BlogArticle11,
});
