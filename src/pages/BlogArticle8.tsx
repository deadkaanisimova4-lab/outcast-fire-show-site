import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BlogMeta from '@/components/BlogMeta';

const BlogArticle8 = () => {
  return (
    <>
      <BlogMeta
        title="Огненное шоу на Новый год в Челябинске — цены, особенности, как заказать | OUTCAST Fire Show"
        description="Огненное шоу на Новый год — один из самых эффектных сюрпризов для гостей. Узнайте об особенностях новогоднего периода, ценах и почему бронировать нужно заранее."
        keywords="огненное шоу на новый год, файер-шоу новый год челябинск, заказать огненное шоу 31 декабря, новогоднее огненное шоу цена, файер-шоу корпоратив новый год, огненное шоу корпоратив декабрь"
        url="https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/ognennoe-shou-na-novyj-god-tseny"
        image="https://cdn.poehali.dev/projects/72a14de5-7353-4caf-b47a-98d3caa2c09a/files/a8774fc3-2863-4ed4-be83-e56994b2ada4.jpg"
        datePublished="2026-05-02"
        dateModified="2026-05-02"
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
                Огненное шоу на Новый год: что важно знать о ценах и бронировании
              </h1>
              <div className="flex items-center gap-6 text-gray-400 mb-8">
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  2 мая 2026
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  7 минут чтения
                </span>
              </div>
            </div>

            <img
              src="https://cdn.poehali.dev/projects/72a14de5-7353-4caf-b47a-98d3caa2c09a/files/a8774fc3-2863-4ed4-be83-e56994b2ada4.jpg"
              alt="Огненное шоу на Новый год"
              className="w-full h-96 object-cover rounded-lg mb-12 shadow-2xl"
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Новый год — особенный праздник. И огненное шоу в эту ночь выглядит особенно впечатляюще: снег, мороз, живой огонь и восторг гостей. Но у новогоднего периода есть своя специфика: цены, условия и правила бронирования отличаются от остального года. Рассказываем всё честно.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Почему в новогодний период цены другие</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                С середины декабря по 10 января — пиковый период загрузки. Корпоративы, частные праздники, новогодние вечеринки — все хотят шоу именно в эти дни. Спрос в 4–5 раз превышает обычный уровень, и цены это отражают.
              </p>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="AlertTriangle" size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Важно знать заранее</h3>
                    <p className="text-gray-300">
                      В период с <strong className="text-white">15 декабря по 10 января</strong> действуют новогодние тарифы — стоимость программ выше стандартной в <strong className="text-white">3 раза</strong>. Это стандартная практика всего event-рынка, и мы не исключение.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Новогодние тарифы: что входит в цену</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Повышение цены — это не просто "новогодняя наценка". За ней стоит реальная работа:
              </p>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Snowflake" size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Зимняя подготовка оборудования</strong>
                      <p className="text-gray-400 mt-1">При морозе оборудование ведёт себя иначе. Нужна дополнительная подготовка, прогрев и контроль безопасности.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Ночные и праздничные выезды</strong>
                      <p className="text-gray-400 mt-1">31 декабря, 1–2 января — это нерабочие дни для всех, в том числе для артистов. Работа в праздничную ночь оплачивается соответственно.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Users" size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Увеличенная команда</strong>
                      <p className="text-gray-400 mt-1">Зимой к выступлению подключается помощник по безопасности — снег и лёд требуют дополнительного контроля площадки.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Логистика в праздники</strong>
                      <p className="text-gray-400 mt-1">Пробки, загруженность города, ранние выезды — всё это учитывается при расчёте стоимости.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Программы и примерные цены в новогодний период</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <Icon name="Star" size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white">MYSTIC — 6 мин</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Камерное романтичное шоу. Подойдёт для небольшой компании или семейного праздника.</p>
                  <p className="text-gray-500 line-through text-sm">от 18 000 ₽</p>
                  <p className="text-primary font-bold text-lg">от 54 000 ₽ <span className="text-xs text-gray-400 font-normal">(новогодний тариф)</span></p>
                </div>

                <div className="bg-gray-900/50 border border-primary/30 rounded-lg p-6 relative">
                  <div className="absolute top-3 right-3 bg-primary text-black text-xs font-bold px-2 py-1 rounded">Хит сезона</div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <Icon name="Flame" size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white">TRAILER — 10 мин</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Самый популярный выбор на корпоративы. Яркое динамичное шоу с запоминающимся финалом.</p>
                  <p className="text-gray-500 line-through text-sm">от 30 000 ₽</p>
                  <p className="text-primary font-bold text-lg">от 90 000 ₽ <span className="text-xs text-gray-400 font-normal">(новогодний тариф)</span></p>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <Icon name="Music" size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white">SHAMANISM — 10 мин</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Атмосферное шоу с этническим колоритом. Особенно выигрышно смотрится на открытом воздухе зимой.</p>
                  <p className="text-gray-500 line-through text-sm">от 32 000 ₽</p>
                  <p className="text-primary font-bold text-lg">от 44 000 ₽ <span className="text-xs text-gray-400 font-normal">(новогодний тариф)</span></p>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <Icon name="Crown" size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white">SORRY MAX — 15 мин</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Полноценный спектакль. Для тех, кто хочет сделать Новый год по-настоящему незабываемым.</p>
                  <p className="text-gray-500 line-through text-sm">от 45 000 ₽</p>
                  <p className="text-primary font-bold text-lg">от 62 000 ₽ <span className="text-xs text-gray-400 font-normal">(новогодний тариф)</span></p>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-8 text-sm text-gray-400">
                <Icon name="Info" size={16} className="inline mr-2 text-gray-500" />
                Точная стоимость зависит от даты, площадки, удалённости и состава программы. Уточняйте при заявке.
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Когда лучше всего бронировать шоу на Новый год</h2>

              <div className="relative mb-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                <div className="space-y-6 pl-12">
                  <div className="relative">
                    <div className="absolute -left-8 w-4 h-4 rounded-full bg-primary border-2 border-black"></div>
                    <h3 className="text-lg font-bold text-white mb-1">Сентябрь — октябрь</h3>
                    <p className="text-gray-400">Лучшее время. Все даты свободны, можно выбрать любой слот, цена стандартная.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-8 w-4 h-4 rounded-full bg-yellow-500 border-2 border-black"></div>
                    <h3 className="text-lg font-bold text-white mb-1">Ноябрь</h3>
                    <p className="text-gray-400">Ещё есть выбор, но популярные даты (29–31 декабря) начинают занимать.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-8 w-4 h-4 rounded-full bg-orange-500 border-2 border-black"></div>
                    <h3 className="text-lg font-bold text-white mb-1">Декабрь (начало)</h3>
                    <p className="text-gray-400">Остаются единичные окна. 31 декабря в большинстве случаев уже занят.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-8 w-4 h-4 rounded-full bg-red-500 border-2 border-black"></div>
                    <h3 className="text-lg font-bold text-white mb-1">Декабрь (середина и позже)</h3>
                    <p className="text-gray-400">Скорее всего, свободных дат уже нет. Только лист ожидания.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Особенности зимнего шоу на улице</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Огненное шоу зимой выглядит невероятно — контраст огня и снега создаёт магическую атмосферу. Но есть нюансы, которые нужно учесть при организации:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Thermometer" size={20} className="text-blue-400" />
                    <h3 className="font-bold text-white">Температура</h3>
                  </div>
                  <p className="text-gray-400 text-sm">Работаем при морозе до −25°C. При более низкой температуре выступление обсуждается индивидуально.</p>
                </div>
                <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="MapPin" size={20} className="text-green-400" />
                    <h3 className="font-bold text-white">Площадка</h3>
                  </div>
                  <p className="text-gray-400 text-sm">Нужна расчищенная от снега ровная поверхность минимум 6×6 метров. Если площадка закрытая — нужна вентиляция.</p>
                </div>
                <div className="bg-orange-900/20 border border-orange-500/20 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Wind" size={20} className="text-orange-400" />
                    <h3 className="font-bold text-white">Ветер</h3>
                  </div>
                  <p className="text-gray-400 text-sm">Сильный ветер (свыше 10 м/с) влияет на безопасность. В таких условиях используем альтернативные инструменты без открытого огня.</p>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Clock" size={20} className="text-purple-400" />
                    <h3 className="font-bold text-white">Время выступления</h3>
                  </div>
                  <p className="text-gray-400 text-sm">Оптимально — с 22:00 до 02:00. Тёмное небо делает огонь максимально зрелищным.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Как заказать шоу на Новый год</h2>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <strong className="text-white">Оставьте заявку</strong>
                      <p className="text-gray-400 mt-1">Через форму на сайте или напрямую в мессенджер. Укажите дату, примерное время и место.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <strong className="text-white">Уточним детали</strong>
                      <p className="text-gray-400 mt-1">Свяжемся в течение нескольких часов, обсудим программу, площадку и состав шоу.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <strong className="text-white">Бронирование с предоплатой</strong>
                      <p className="text-gray-400 mt-1">Дата фиксируется после внесения предоплаты. В новогодний период — это обязательное условие.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">4</div>
                    <div>
                      <strong className="text-white">Подготовка и выступление</strong>
                      <p className="text-gray-400 mt-1">Приедем заранее, осмотрим площадку, подготовим оборудование. Шоу пройдёт точно в срок.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-orange-500/10 border border-primary/30 rounded-xl p-8 text-center">
                <Icon name="Flame" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Готовы сделать ваш Новый год огненным?</h3>
                <p className="text-gray-300 mb-6">
                  Не откладывайте — новогодние даты разбирают быстро. Оставьте заявку сейчас и зафиксируйте свой слот.
                </p>
                <Link to="/#contact">
                  <Button className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3 text-lg">
                    Оставить заявку
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </main>

        <footer className="bg-black/50 border-t border-gray-800 py-8">
          <div className="container mx-auto px-4 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-xl font-bold mb-4">
              <Icon name="Flame" size={24} />
              OUTCAST Fire Show
            </Link>
            <p className="text-gray-500 text-sm">Огненное шоу в Челябинске · Работаем с 2017 года</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BlogArticle8;