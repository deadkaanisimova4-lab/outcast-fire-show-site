import { createFileRoute } from '@tanstack/react-router';
import BirthdayPage from '@/pages/BirthdayPage';
import { birthdayLanding } from '@/data/landings';
import { landingHead } from '@/components/PageMeta';

export const Route = createFileRoute('/ognennoe-shou-na-den-rozhdeniya')({
  head: () => landingHead(birthdayLanding),
  component: BirthdayPage,
});
