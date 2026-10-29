import { createFileRoute } from '@tanstack/react-router';
import CorporatePage from '@/pages/CorporatePage';
import { corporateLanding } from '@/data/landings';
import { landingHead } from '@/components/PageMeta';

export const Route = createFileRoute('/ognennoe-shou-na-korporativ')({
  head: () => landingHead(corporateLanding),
  component: CorporatePage,
});
