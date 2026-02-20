import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BlogMeta from '@/components/BlogMeta';

const BlogArticle6 = () => {
  return (
    <>
      <BlogMeta
        title="Огненное шоу на день рождения — Как сделать праздник незабываемым | OUTCAST Fire Show"
        description="Файер-шоу на день рождения и юбилей: идеи, форматы, цены. Как удивить именинника и гостей огненным представлением в Челябинске."
        keywords="огненное шоу на день рождения, файер-шоу на юбилей, заказать огненное шоу на день рождения челябинск, шоу на юбилей цена, огненное шоу на 30 лет, файер-шоу на 50 лет"
        url="https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/ognennoe-shou-na-den-rozhdeniya"
        image="https://cdn.poehali.dev/files/5e28f939-32a0-48c9-bc22-4e027c463c35.jpg"
        datePublished="2026-02-18"
        dateModified="2026-02-20"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-primary/20">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              <Icon name="Flame" size={32} />
              <span>OUTCAST Fire Show</span>
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
                Огненное шоу на день рождения: как удивить именинника
              </h1>
              <div className="flex items-center gap-6 text-gray-400 mb-8">
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  18 февраля 2026
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  7 минут чтения
                </span>
              </div>
            </div>

            <img
              src="https://cdn.poehali.dev/files/5e28f939-32a0-48c9-bc22-4e027c463c35.jpg"
              alt="Огненное шоу на день рождения"
              className="w-full h-96 object-cover rounded-lg mb-12 shadow-2xl"
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Торт со свечами — классика. Но если хочется чего-то действительно особенного — закажите огненное шоу. Это подарок-впечатление, который запомнится имениннику и гостям на годы. Разбираемся, как подобрать идеальную программу.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Для кого подходит</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Огненное шоу — универсальный формат. Мы выступали на днях рождения людей от 5 до 70 лет:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">🎈 Детский праздник (5-12 лет)</h3>
                  <p className="text-gray-300">
                    Лёгкая программа с яркими эффектами и интерактивом: дети могут попробовать жонглировать светящимися шарами. Безопасно и весело.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">🎂 18-30 лет</h3>
                  <p className="text-gray-300">
                    Энергичное шоу под драйвовую музыку. Сложные трюки, огненные вихри, пиротехника. Идеально для вечеринок в стиле «вау».
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">🥂 Юбилей (30-50 лет)</h3>
                  <p className="text-gray-300">
                    Элегантная программа с красивой хореографией. Можно добавить огненную надпись с именем и возрастом — отличный момент для фото.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">👑 Солидный юбилей (50+ лет)</h3>
                  <p className="text-gray-300">
                    Спокойное, завораживающее шоу. Плавные движения, глубокая музыка, тёплая атмосфера. Огненные сердца и фонтаны как финальный штрих торжества.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Идеи для сюрприза</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Огненное шоу можно сделать неожиданным подарком. Вот как это организовать:
              </p>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <strong className="text-white">Секретный заказ</strong>
                      <p className="text-gray-400 mt-1">Свяжитесь с нами заранее. Мы поможем согласовать площадку, время и программу так, чтобы именинник ни о чём не догадался.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <strong className="text-white">Именная программа</strong>
                      <p className="text-gray-400 mt-1">Добавим огненную надпись с именем, возрастом или пожеланием. Это выглядит потрясающе и делает шоу персональным.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <strong className="text-white">Музыка по запросу</strong>
                      <p className="text-gray-400 mt-1">Можем поставить любимую песню именинника как саундтрек к выступлению. Представьте реакцию, когда под знакомую мелодию начинается огненное шоу!</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <strong className="text-white">Совместный момент</strong>
                      <p className="text-gray-400 mt-1">Именинник может зажечь финальный элемент шоу вместе с артистами — безопасно и эффектно. Фото получаются невероятные.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Где провести</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Файер-шоу можно организовать практически где угодно:
              </p>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-500 mb-2">Популярные варианты:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Загородный дом / коттедж:</strong> Самый частый вариант. Много места, нет соседей, шоу можно провести прямо во дворе</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Ресторан с летней площадкой:</strong> Гости выходят на террасу, шоу проходит на поляне рядом</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Парк или набережная:</strong> Бесплатная площадка + красивый фон. Нужно согласование с администрацией</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Банкетный зал:</strong> Возможно при высоте потолков от 4 метров. Используем специальный реквизит для помещений</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Сколько стоит</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Цена зависит от длительности, количества артистов и спецэффектов:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-primary">Программа</th>
                      <th className="text-left py-3 px-4 text-primary">Что входит</th>
                      <th className="text-left py-3 px-4 text-primary">Цена</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-bold">«Искра»</td>
                      <td className="py-3 px-4">6 мин, 2 артиста, огненные трюки</td>
                      <td className="py-3 px-4 text-primary font-bold">от 18 000₽</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-bold">«Пламя»</td>
                      <td className="py-3 px-4">12 мин, 2-3 артиста, пиротехника, огненная надпись</td>
                      <td className="py-3 px-4 text-primary font-bold">от 25 000₽</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-bold">«Инферно»</td>
                      <td className="py-3 px-4">20 мин, 3-4 артиста, полная программа, интерактив</td>
                      <td className="py-3 px-4 text-primary font-bold">от 40 000₽</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Реальные истории</h2>
              <div className="space-y-6 mb-8">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <p className="text-gray-300 italic mb-3">«Заказала шоу мужу на 35 лет. Он думал, что мы просто идём в ресторан. Когда вышли на террасу и началось огненное шоу — у него был шок! Сказал, что это лучший подарок в его жизни.»</p>
                  <p className="text-primary font-bold">— Анна, Челябинск</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <p className="text-gray-300 italic mb-3">«Дочке исполнилось 10 лет. Пригласили артистов на дачу. Дети были в таком восторге, что до сих пор рассказывают друзьям. А огненная надпись "Маша 10" — просто топ!»</p>
                  <p className="text-primary font-bold">— Дмитрий, Копейск</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-orange-600/20 border border-primary/40 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Хотите удивить именинника?</h2>
                <p className="text-gray-300 mb-6">Расскажите нам о празднике — мы подберём идеальную программу и сохраним секрет до последнего момента.</p>
                <Link to="/#contacts">
                  <Button className="bg-primary hover:bg-primary/80 text-black font-bold text-lg px-8 py-3">
                    <Icon name="Gift" size={20} className="mr-2" />
                    Заказать сюрприз
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Читайте также</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/blog/kak-vybrat-ognennoe-shou-dlya-svadby" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Как выбрать огненное шоу для свадьбы</h3>
                  <p className="text-gray-400 text-sm">Полный гид по выбору программы — форматы, цены, стили</p>
                </Link>
                <Link to="/blog/ognennoe-shou-na-korporativ" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Огненное шоу на корпоратив</h3>
                  <p className="text-gray-400 text-sm">Форматы, тайминг и типичные ошибки при заказе</p>
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

export default BlogArticle6;