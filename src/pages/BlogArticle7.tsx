import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BlogMeta from '@/components/BlogMeta';

const BlogArticle7 = () => {
  return (
    <>
      <BlogMeta
        title="Огненное шоу на свадьбу весной 2026 — Как заказать в свадебный сезон | OUTCAST Fire Show"
        description="Весна и лето — пик свадебного сезона. Узнайте, как заказать огненное шоу на свадьбу в Челябинске, сколько стоит и почему бронировать лучше заранее."
        keywords="огненное шоу на свадьбу 2026, заказать файер-шоу весной, свадебный сезон огненное шоу, огненное шоу на свадьбу челябинск цена, файер-шоу на свадьбу лето, заказать шоу на свадьбу заранее"
        url="https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/ognennoe-shou-na-novyj-god"
        image="https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg"
        datePublished="2026-04-23"
        dateModified="2026-04-23"
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
                Огненное шоу на свадьбу весной: как заказать в пиковый сезон
              </h1>
              <div className="flex items-center gap-6 text-gray-400 mb-8">
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  23 апреля 2026
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  6 минут чтения
                </span>
              </div>
            </div>

            <img
              src="https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg"
              alt="Огненное шоу на свадьбу весной"
              className="w-full h-96 object-cover rounded-lg mb-12 shadow-2xl"
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Май, июнь, июль — в Челябинске расписание свадеб расписано на месяцы вперёд. Если вы планируете свадьбу на весну или лето 2026 года и хотите огненное шоу — читайте эту статью. Объясним, почему бронировать надо уже сейчас и как не остаться без артистов в самый важный день.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Почему весна и лето — пик сезона</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Только в мае-июле к нам поступает в 3–4 раза больше заявок, чем в межсезонье. Свадьбы, юбилеи, корпоративы — все хотят хорошую погоду и открытые площадки. Свободных дат становится всё меньше с каждой неделей. Некоторые даты уже забронированы на три месяца вперёд.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="AlertTriangle" size={24} className="text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-red-400 mb-2">Важно знать</h3>
                    <p className="text-gray-300">
                      В пиковые выходные (пятница–воскресенье с мая по август) мы работаем на 2–3 мероприятия одновременно. Если дата свободна сегодня — это не значит, что она будет свободна через неделю. Бронирование фиксирует дату.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Какую программу выбрать на свадьбу</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Для свадеб мы рекомендуем программы средней и высокой продолжительности — гостям нужно время, чтобы выйти, насладиться, сфотографироваться и вернуться обратно.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <Icon name="Star" size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white">MYSTIC — 6 мин</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Камерная атмосфера, подходит для свадьбы до 40 гостей. Романтичное выступление.</p>
                  <p className="text-primary font-bold">от 18 000 ₽</p>
                </div>

                <div className="bg-gray-900/50 border border-primary/30 rounded-lg p-6 relative">
                  <div className="absolute top-3 right-3 bg-primary text-black text-xs font-bold px-2 py-1 rounded">Популярное</div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <Icon name="Flame" size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white">TRAILER — 10 мин</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Оптимальный выбор для большинства свадеб. Динамичное шоу с несколькими блоками.</p>
                  <p className="text-primary font-bold">от 30 000 ₽</p>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <Icon name="Music" size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white">SHAMANISM — 10 мин</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Этническая стилистика, глубокое погружение в атмосферу. Для свадеб в загородном стиле.</p>
                  <p className="text-primary font-bold">от 32 000 ₽</p>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <Icon name="Crown" size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white">SORRY MAX — 15 мин</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Полноценный спектакль. Для тех, кто хочет сделать шоу центральным событием вечера.</p>
                  <p className="text-primary font-bold">от 45 000 ₽</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Как бронировать: пошагово</h2>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">1</div>
                    <div>
                      <strong className="text-white block mb-1">Позвоните или напишите нам</strong>
                      <p className="text-gray-400">Расскажите дату, место и количество гостей. Мы проверим свободные даты и подберём подходящую программу.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">2</div>
                    <div>
                      <strong className="text-white block mb-1">Согласуем детали</strong>
                      <p className="text-gray-400">Обсудим тайминг, место выступления, пожелания по реквизиту. При необходимости выедем на площадку заранее.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">3</div>
                    <div>
                      <strong className="text-white block mb-1">Фиксируем дату</strong>
                      <p className="text-gray-400">Небольшой задаток закрепляет дату за вами. Остальная оплата — в день мероприятия.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">4</div>
                    <div>
                      <strong className="text-white block mb-1">Наслаждаетесь шоу</strong>
                      <p className="text-gray-400">В день свадьбы мы приезжаем заранее, готовим площадку и проводим выступление. Вам не нужно ни о чём беспокоиться.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Часто задаваемые вопросы</h2>

              <div className="space-y-4 mb-12">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">За сколько дней нужно бронировать?</h3>
                  <p className="text-gray-400">В сезон рекомендуем минимум за 4–6 недель. Популярные даты (особенно красивые числа) разбирают за 2–3 месяца.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Что если будет дождь?</h3>
                  <p className="text-gray-400">Лёгкий дождь — не проблема. Если погода совсем не позволяет, перенесём шоу под навес или согласуем другой формат. Форс-мажор обсуждается индивидуально.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Нужно ли согласование с площадкой?</h3>
                  <p className="text-gray-400">Да. Мы можем помочь в переговорах с площадкой или проверить условия самостоятельно. Большинство загородных ресторанов и коттеджей принимают огненные шоу.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Можно добавить пиротехнику?</h3>
                  <p className="text-gray-400">Да — холодные фонтаны, огненное сердце, именные надписи. Это отличное дополнение к любой программе, стоимость обсуждается при заказе.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-orange-600/20 border border-primary/40 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-3">Забронируйте дату прямо сейчас</h2>
                <p className="text-gray-300 mb-6">
                  Свободных дат в мае–июле становится всё меньше. Позвоните нам — расскажем, есть ли ваша дата, и подберём программу.
                </p>
                <a href="tel:+79085740813">
                  <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (908) 574-08-13
                  </Button>
                </a>
              </div>
            </div>
          </article>
        </main>

        <footer className="bg-black/50 border-t border-gray-800 py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© 2026 OUTCAST Fire Show. Все права защищены.</p>
            <p className="mt-2">
              <a href="tel:+79085740813" className="text-primary hover:text-primary/80">
                +7 (908) 574-08-13
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BlogArticle7;
