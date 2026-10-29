import { Link } from "@/lib/router-compat";
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const ORDER_LINK = `https://vk.me/write-203229964?text=${encodeURIComponent(
  'Здравствуйте! Интересует световое LED-шоу. Дата: ____, площадка: ____, гостей: ____.'
)}`;

const occasions = [
  { icon: 'Heart', title: 'Свадьба', text: 'Яркий номер для первого танца, выхода молодожёнов или вечерней части.' },
  { icon: 'Building2', title: 'Корпоратив', text: 'Эффектное открытие или финал вечера в зале, без открытого огня.' },
  { icon: 'Cake', title: 'День рождения и юбилей', text: 'Подарок, который виден всем гостям и отлично снимается на телефон.' },
  { icon: 'GraduationCap', title: 'Выпускной', text: 'Современное шоу для молодой аудитории, подходит для зала и улицы.' },
];

const features = [
  { icon: 'Shirt', title: 'LED-костюмы', text: 'Светящиеся костюмы, которые меняют цвет и рисунок в такт музыке.' },
  { icon: 'Sparkles', title: 'LED-реквизит', text: 'Светодиодный реквизит, который рисует в темноте линии и фигуры.' },
  { icon: 'ShieldCheck', title: 'Без открытого огня', text: 'Подходит для залов и площадок, где огонь запрещён правилами.' },
  { icon: 'Clock', title: 'Номер 5 минут', text: 'Компактное выступление, которое легко встроить в сценарий вечера.' },
];

const faq = [
  {
    q: 'Сколько стоит световое шоу в Челябинске?',
    a: 'Номер длительностью 5 минут стоит от 15 000 ₽. Итоговая цена зависит от даты, площадки и удалённости от Челябинска.',
  },
  {
    q: 'Можно ли провести шоу в помещении?',
    a: 'Да. Светодиодное шоу идёт без открытого огня, поэтому подходит для залов и ресторанов. Размер площадки и высоту потолка уточним заранее.',
  },
  {
    q: 'Чем световое шоу отличается от огненного?',
    a: 'Огненное шоу лучше смотрится на улице в темноте. Световое работает и в зале, и на улице, и подходит там, где огонь запрещён. Можно заказать оба номера в один вечер.',
  },
  {
    q: 'Как проверить, свободна ли дата?',
    a: 'Напишите нам в ВКонтакте или позвоните. Дату можно выбрать и в календаре на главной странице.',
  },
];

const LightShowDraft = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            <Icon name="Flame" size={32} />
            <span className="hidden sm:inline">OUTCAST Fire Show</span>
          </Link>
          <div className="flex gap-3">
            <Link to="/blog">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                <Icon name="BookOpen" size={18} className="mr-2" />
                Блог
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <section className="text-center mb-16">
            <p className="text-primary font-semibold mb-4">Челябинск и область</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-yellow-500 to-orange-600 text-transparent bg-clip-text">
              Световое LED-шоу на ваш праздник
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Артисты в светящихся костюмах и с LED-реквизитом. Номер на 5 минут от 15 000 ₽, без открытого огня.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-primary-foreground font-bold text-lg px-8 py-3">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Заказать в ВКонтакте
                </Button>
              </a>
              <a href="tel:+79085740813">
                <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-black text-lg px-8 py-3">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (908) 574-08-13
                </Button>
              </a>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Что вы получаете</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <div key={f.title} className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <Icon name={f.icon} size={28} className="text-primary mb-3" fallback="Sparkles" />
                  <h3 className="text-white font-bold mb-2">{f.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Для каких праздников</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {occasions.map((o) => (
                <div key={o.title} className="bg-gray-900/50 border border-gray-700 rounded-lg p-5 flex gap-4">
                  <Icon name={o.icon} size={28} className="text-primary flex-shrink-0 mt-1" fallback="Sparkles" />
                  <div>
                    <h3 className="text-white font-bold mb-1">{o.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{o.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Стоимость</h2>
            <div className="max-w-md mx-auto bg-gradient-to-r from-primary/20 to-orange-600/20 border border-primary/40 rounded-xl p-8 text-center">
              <h3 className="text-white font-bold text-xl mb-2">Световое шоу</h3>
              <p className="text-gray-300 mb-4">Номер 5 минут, LED-костюмы и реквизит</p>
              <p className="text-4xl font-bold text-primary mb-4">от 15 000 ₽</p>
              <p className="text-gray-400 text-sm">Цена зависит от даты, площадки и удалённости от Челябинска.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Огонь и свет в один вечер</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
              Световой номер хорошо работает в начале вечера или в зале, огненное шоу ставит яркую точку на улице в темноте. Закажите оба номера, и праздник пройдёт в двух разных эффектных форматах.
            </p>
            <div className="text-center">
              <Link to="/ognennoe-shou-na-svadbu">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                  <Icon name="Flame" size={18} className="mr-2" />
                  Смотреть огненные программы
                </Button>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Частые вопросы</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faq.map((item) => (
                <div key={item.q} className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">{item.q}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary/20 to-orange-600/20 border border-primary/40 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Хотите световое шоу на ваш праздник?</h2>
            <p className="text-gray-300 mb-6">Напишите дату и площадку: проверим, свободна ли дата, и рассчитаем точную стоимость.</p>
            <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold text-lg px-8 py-3">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Заказать в ВКонтакте
              </Button>
            </a>
          </section>
        </div>
      </main>

      <footer className="bg-black/50 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 OUTCAST Fire Show. Все права защищены.</p>
          <p className="mt-2">
            <a href="tel:+79085740813" className="text-primary hover:text-primary/80">+7 (908) 574-08-13</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LightShowDraft;
