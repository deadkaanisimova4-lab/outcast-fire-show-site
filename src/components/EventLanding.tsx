import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import PageMeta from '@/components/PageMeta';

export interface LandingProgram {
  name: string;
  description: string;
  duration: string;
  price: number;
  highlight?: boolean;
}

export interface LandingData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  breadcrumbName: string;
  h1: string;
  lead: string;
  image: string;
  imageAlt: string;
  orderText: string;
  whyTitle: string;
  why: { icon: string; title: string; text: string }[];
  programsTitle: string;
  programs: LandingProgram[];
  extrasTitle: string;
  extras: { name: string; description: string; price: number }[];
  scenario: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  related: { to: string; label: string }[];
}

const SITE = 'https://xn----74-k4dma6dbagfc4ewd.xn--p1ai';
const VK_WRITE = 'https://vk.me/write-203229964';

const formatPrice = (n: number) => `от ${n.toLocaleString('ru-RU')} ₽`;

const EventLanding = ({ data }: { data: LandingData }) => {
  const orderLink = `${VK_WRITE}?text=${encodeURIComponent(data.orderText)}`;
  const offers = data.programs.map((p) => ({ name: p.name, description: p.description, price: p.price }));

  return (
    <>
      <PageMeta
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={data.keywords}
        url={`${SITE}/${data.slug}`}
        image={data.image}
        breadcrumbName={data.breadcrumbName}
        serviceName={data.h1}
        offers={offers}
        faq={data.faq}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-primary/20">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              <Icon name="Flame" size={28} />
              <span className="hidden sm:inline">OUTCAST Fire Show</span>
            </Link>
            <div className="flex gap-2 md:gap-3">
              <a href="tel:+79085740813">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                  <Icon name="Phone" size={18} className="md:mr-2" />
                  <span className="hidden md:inline">+7 (908) 574-08-13</span>
                </Button>
              </a>
              <Link to="/">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                  <Icon name="Home" size={18} className="mr-2" />
                  Главная
                </Button>
              </Link>
            </div>
          </nav>
        </header>

        <main className="pt-28 pb-16">
          <section className="container mx-auto px-4 max-w-5xl">
            <nav aria-label="Хлебные крошки" className="text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-primary">Главная</Link>
              <span className="mx-2">/</span>
              <span>{data.breadcrumbName}</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-primary via-yellow-500 to-orange-600 text-transparent bg-clip-text">
                  {data.h1}
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">{data.lead}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={orderLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
                      <Icon name="Flame" size={20} className="mr-2" />
                      Заказать шоу
                    </Button>
                  </a>
                  <a href="tel:+79085740813">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-black">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить
                    </Button>
                  </a>
                </div>
                <p className="text-sm text-gray-400 mt-4">7+ лет опыта · 500+ выступлений · Челябинск и область</p>
              </div>
              <img
                src={data.image}
                alt={data.imageAlt}
                className="w-full h-72 md:h-96 object-cover rounded-xl shadow-2xl border border-primary/20"
              />
            </div>
          </section>

          <section className="container mx-auto px-4 max-w-5xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{data.whyTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.why.map((item) => (
                <div key={item.title} className="bg-black/40 border border-primary/20 rounded-xl p-5">
                  <Icon name={item.icon} size={26} className="text-primary mb-3" fallback="Flame" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-4 max-w-5xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{data.programsTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.programs.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-xl p-6 border sm:[&:last-child:nth-child(odd)]:col-span-2 ${p.highlight ? 'border-primary bg-primary/10' : 'border-primary/20 bg-black/40'}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    {p.highlight && (
                      <span className="text-xs font-semibold bg-primary text-white px-2 py-1 rounded-full whitespace-nowrap">
                        Популярно
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {p.duration}
                    </span>
                    <span className="text-xl font-bold text-secondary">{formatPrice(p.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-4 max-w-5xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{data.extrasTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.extras.map((e) => (
                <div key={e.name} className="flex items-center justify-between gap-4 bg-black/40 border border-primary/20 rounded-xl p-5">
                  <div>
                    <h3 className="font-bold mb-1">{e.name}</h3>
                    <p className="text-gray-400 text-sm">{e.description}</p>
                  </div>
                  <span className="font-bold text-secondary whitespace-nowrap">{formatPrice(e.price)}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Итоговая стоимость зависит от даты, площадки и состава программы. Точный расчёт сделаем после короткого разговора.
            </p>
          </section>

          <section className="container mx-auto px-4 max-w-5xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Как это проходит</h2>
            <ol className="space-y-4">
              {data.scenario.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold mb-1">{s.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="container mx-auto px-4 max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {data.faq.map((f) => (
                <div key={f.q} className="bg-black/40 border border-primary/20 rounded-xl p-5">
                  <h3 className="font-bold mb-2">{f.q}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-4 max-w-3xl mb-12">
            <div className="text-center bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Узнать свободна ли ваша дата</h2>
              <p className="text-gray-300 mb-6">Напишите нам в ВКонтакте или позвоните, ответим и рассчитаем стоимость.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={orderLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Заказать в ВКонтакте
                  </Button>
                </a>
                <a href="tel:+79085740813">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-black">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (908) 574-08-13
                  </Button>
                </a>
              </div>
              <Link to="/#calendar" className="inline-block mt-5 text-sm text-primary hover:underline">
                Посмотреть календарь свободных дат
              </Link>
            </div>
          </section>

          <section className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-lg font-bold mb-3 text-gray-300">Смотрите также</h2>
            <div className="flex flex-wrap gap-3">
              {data.related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="text-sm border border-primary/30 rounded-full px-4 py-2 hover:bg-primary/20 transition-colors"
                >
                  {r.label}
                </Link>
              ))}
              <Link to="/blog" className="text-sm border border-primary/30 rounded-full px-4 py-2 hover:bg-primary/20 transition-colors">
                Блог об огненном шоу
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default EventLanding;
