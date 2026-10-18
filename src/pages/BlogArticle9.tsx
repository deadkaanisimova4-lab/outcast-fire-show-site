import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BlogMeta from '@/components/BlogMeta';

const SITE = 'https://xn----74-k4dma6dbagfc4ewd.xn--p1ai';
const ORDER_LINK = `https://vk.me/write-203229964?text=${encodeURIComponent(
  'Здравствуйте! Интересует постановка «RUSSIAN STYLE». Дата: ____, площадка: ____, гостей: ____.'
)}`;

const BlogArticle9 = () => {
  return (
    <>
      <BlogMeta
        title="Русское огненное шоу на свадьбу в Челябинске — постановка RUSSIAN STYLE от 43 000 ₽ | OUTCAST"
        description="Огненное шоу в русском стиле на свадьбу, юбилей и корпоратив в Челябинске: яркие костюмы, синхронные элементы, море огня и треки, которые подпевают все гости. Состав, цена, как заказать."
        keywords="русское огненное шоу на свадьбу челябинск, огненное шоу в русском стиле, русский стиль файер шоу, огненное шоу в народном стиле, огненное шоу в русских костюмах, русское файер шоу челябинск, заказать огненное шоу на свадьбу, RUSSIAN STYLE огненное шоу"
        url={`${SITE}/blog/russkoe-ognennoe-shou-na-svadbu`}
        image={`${SITE}/russian-style-cover.jpg`}
        datePublished="2026-10-18"
        dateModified="2026-10-18"
      />
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
          <article className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                Назад к статьям
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-yellow-500 to-orange-600 text-transparent bg-clip-text">
                Русское огненное шоу на свадьбу в Челябинске: постановка RUSSIAN STYLE
              </h1>
              <div className="flex items-center gap-6 text-gray-400 mb-8">
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  18 октября 2026
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  6 минут чтения
                </span>
              </div>
            </div>

            <img
              src="/russian-style-cover.jpg"
              alt="Артист огненного шоу в русском стиле с горящим посохом, постановка RUSSIAN STYLE, Челябинск"
              className="w-full h-80 md:h-[28rem] object-cover rounded-lg mb-12 shadow-2xl"
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Всё больше пар хотят свадьбу «по-нашему»: с яркими костюмами, знакомыми мотивами и атмосферой, в которой гостям легко подпевать и хлопать. Для таких праздников у нас есть постановка <strong className="text-white">RUSSIAN STYLE</strong>: огненный номер в русском стиле, где традиции звучат по-новому. Рассказываем, что в неё входит, кому она подойдёт и сколько стоит.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Что такое огненное шоу в русском стиле</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Это не «этнография на сцене», а современный номер, в который заложены узнаваемые образы: костюмы с народными мотивами, синхронные элементы артистов и музыка, которую знают все. Огонь здесь работает как главный художник: он рисует в воздухе линии и фигуры, а пиротехнические эффекты в руках артистов добавляют сцене «магии».
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Главная особенность формата: гости не просто смотрят, а откликаются. Уникальные треки, которые «будут напевать все», подчёркивают каждый момент выступления, и зал включается в происходящее.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Что входит в постановку RUSSIAN STYLE</h2>
              <div className="grid md:grid-cols-5 gap-6 mb-8 items-start">
                <img
                  src="/russian-style-photo.jpg"
                  alt="Огненное шоу RUSSIAN STYLE: артист с огнём и дымом на площадке"
                  loading="lazy"
                  className="md:col-span-2 w-full rounded-lg shadow-xl object-cover max-h-[34rem]"
                />
                <ul className="md:col-span-3 space-y-3 text-gray-300">
                  <li className="flex gap-3"><Icon name="Clock" size={20} className="text-primary mt-1 flex-shrink-0" />Продолжительность номера: 10 минут</li>
                  <li className="flex gap-3"><Icon name="Users" size={20} className="text-primary mt-1 flex-shrink-0" />4 артиста на площадке</li>
                  <li className="flex gap-3"><Icon name="Flame" size={20} className="text-primary mt-1 flex-shrink-0" />6 видов огненного реквизита</li>
                  <li className="flex gap-3"><Icon name="Sparkles" size={20} className="text-primary mt-1 flex-shrink-0" />4 вида пиротехнического реквизита</li>
                  <li className="flex gap-3"><Icon name="Lightbulb" size={20} className="text-primary mt-1 flex-shrink-0" />Оформление площадки: сценический свет и огненные чаши</li>
                  <li className="flex gap-3"><Icon name="Volume2" size={20} className="text-primary mt-1 flex-shrink-0" />Звук: акустическая система мощностью 500 Вт</li>
                  <li className="flex gap-3"><Icon name="Wrench" size={20} className="text-primary mt-1 flex-shrink-0" />Подготовка и демонтаж площадки и оборудования, работа техника на площадке</li>
                  <li className="flex gap-3"><Icon name="Car" size={20} className="text-primary mt-1 flex-shrink-0" />Трансфер артистов в пределах Челябинска</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-orange-600/20 border border-primary/40 rounded-xl p-6 mb-8">
                <p className="text-white font-semibold flex items-start gap-3">
                  <Icon name="Gift" size={22} className="text-primary mt-0.5 flex-shrink-0" />
                  При заказе этой постановки церемония зажжения сердца и 2 фонтана достаются вам в подарок.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Почему русский стиль так хорошо подходит для свадьбы</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Понятен и близок гостям любого возраста</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">На свадьбе собираются бабушки и друзья, дети и коллеги. Знакомая музыка и образы работают на всех сразу, и никому не нужно объяснять, что происходит на сцене.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Поддерживает тему свадьбы</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Если у вас свадьба в народном стиле или просто с тёплыми русскими мотивами, номер встанет в программу органично, а не будет выглядеть чужеродным.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Фото и видео с эмоциями</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Костюмы, огонь и дым дают сильную картинку для фотографа и видеографа. Это кадры, которые не хочется пролистывать.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Гости включаются в процесс</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Музыку, которую знают все, подпевают и хлопают в такт. Шоу превращается из «посмотреть» в общее событие вечера.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Когда ставить номер на свадьбе</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Чаще всего русский огненный номер ставят вечером, когда на улице уже темно и огонь смотрится ярче всего. Удобные варианты:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
                <li><strong className="text-white">После основной части банкета</strong>, чтобы перезапустить внимание гостей перед танцами.</li>
                <li><strong className="text-white">Как финал вечера</strong>, когда нужен яркий аккорд, а за ним проводы молодожёнов.</li>
                <li><strong className="text-white">Вместе с церемонией зажжения сердца</strong>, которая входит в подарок к этой постановке: сначала огненный номер, затем личный момент для пары.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Точное время подберём вместе с ведущим, чтобы шоу вписалось в ваш сценарий. Площадку заранее согласуем: размер, расстояние до гостей, открытое пространство или зал.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Не только свадьба</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Постановка подходит и для других праздников: юбилеев, корпоративов, городских мероприятий и дней рождения. Везде, где нужен запоминающийся номер с узнаваемым настроением, RUSSIAN STYLE работает так же эффектно. Подробнее о форматах читайте на страницах{' '}
                <Link to="/ognennoe-shou-na-svadbu" className="text-primary hover:underline">огненного шоу на свадьбу</Link>,{' '}
                <Link to="/ognennoe-shou-na-korporativ" className="text-primary hover:underline">на корпоратив</Link> и{' '}
                <Link to="/ognennoe-shou-na-den-rozhdeniya" className="text-primary hover:underline">на день рождения</Link>.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Сколько стоит RUSSIAN STYLE</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Стоимость постановки RUSSIAN STYLE: <strong className="text-white">от 43 000 ₽</strong>. Итоговая цена зависит от даты, площадки и удалённости от Челябинска. Для сравнения, вот остальные программы:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-primary">Постановка</th>
                      <th className="text-left py-3 px-4 text-primary">Длительность</th>
                      <th className="text-left py-3 px-4 text-primary">Цена</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">MYSTIC</td>
                      <td className="py-3 px-4">6 минут</td>
                      <td className="py-3 px-4 text-primary font-bold">от 20 000 ₽</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">TRAILER</td>
                      <td className="py-3 px-4">10 минут</td>
                      <td className="py-3 px-4 text-primary font-bold">от 35 000 ₽</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">SHAMANISM</td>
                      <td className="py-3 px-4">10 минут</td>
                      <td className="py-3 px-4 text-primary font-bold">от 38 000 ₽</td>
                    </tr>
                    <tr className="border-b border-gray-800 bg-primary/10">
                      <td className="py-3 px-4 font-semibold text-white">RUSSIAN STYLE</td>
                      <td className="py-3 px-4">10 минут</td>
                      <td className="py-3 px-4 text-primary font-bold">от 43 000 ₽</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">SORRY MAX</td>
                      <td className="py-3 px-4">15 минут</td>
                      <td className="py-3 px-4 text-primary font-bold">от 50 000 ₽</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-8">
                <a
                  href="https://vk.ru/wall-203229964_1078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-black transition-colors rounded-lg px-5 py-3 font-semibold"
                >
                  <Icon name="Play" size={18} />
                  Смотреть видео постановки
                </a>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Частые вопросы</h2>
              <div className="space-y-4 mb-12">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Можно ли заказать русское огненное шоу на свадьбу в Челябинске?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Да. Постановка RUSSIAN STYLE создана именно для таких праздников: яркие костюмы, синхронные элементы, огонь и пиротехника. Свободные даты можно проверить в календаре на главной странице.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Сколько длится номер и сколько в нём артистов?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Выступление длится 10 минут, на площадке работают 4 артиста.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Что получают молодожёны в подарок?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">При заказе постановки RUSSIAN STYLE церемония зажжения сердца и 2 фонтана предоставляются в подарок.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Нужно ли своё оборудование для звука и света?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Нет. В стоимость входят акустическая система мощностью 500 Вт, сценический свет, огненные чаши, подготовка и демонтаж площадки, а также работа техника.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Работаете ли вы за пределами Челябинска?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Да, выезжаем по Челябинской области и в Башкортостан. Трансфер в пределах Челябинска включён, за город стоимость рассчитывается отдельно.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-orange-600/20 border border-primary/40 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Хотите русское огненное шоу на вашей свадьбе?</h2>
                <p className="text-gray-300 mb-6">Напишите нам дату и площадку: проверим, свободна ли дата, и рассчитаем точную стоимость.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-black font-bold text-lg px-8 py-3">
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
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Читайте также</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/blog/kak-vybrat-ognennoe-shou-dlya-svadby" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Как выбрать огненное шоу для свадьбы</h3>
                  <p className="text-gray-400 text-sm">Полный гид по выбору программы: форматы, цены, стили</p>
                </Link>
                <Link to="/blog/ognennoe-shou-na-novyj-god" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Огненное шоу на свадьбу весной</h3>
                  <p className="text-gray-400 text-sm">Как заказать в пиковый сезон и не остаться без артистов</p>
                </Link>
                <Link to="/blog/bezopasnost-ognennogo-shou" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Безопасность огненного шоу</h3>
                  <p className="text-gray-400 text-sm">Как профессионалы защищают зрителей на каждом выступлении</p>
                </Link>
              </div>
            </div>
          </article>
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
    </>
  );
};

export default BlogArticle9;
