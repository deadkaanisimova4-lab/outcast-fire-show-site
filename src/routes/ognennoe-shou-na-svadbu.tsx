import { createFileRoute } from '@tanstack/react-router';
import WeddingPage from '@/pages/WeddingPage';
import { weddingLanding } from '@/data/landings';
import { landingHead } from '@/components/PageMeta';

export const Route = createFileRoute('/ognennoe-shou-na-svadbu')({
  head: () => landingHead(weddingLanding),
  component: WeddingPage,
});
