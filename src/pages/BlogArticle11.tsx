import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BlogMeta from '@/components/BlogMeta';

const SITE = 'https://xn----74-k4dma6dbagfc4ewd.xn--p1ai';
const ORDER_LINK = `https://vk.me/write-203229964?text=${encodeURIComponent(
  'Здравствуйте! Хочу заказать огненное шоу на выпускной. Дата: ____, площадка: ____, гостей: ____.'
)}`;

const BlogArticle11 = () => {
  return (
    <>
      <BlogMeta
        title="Огненное шоу на выпускной в Челябинске — программы и цены от 20 000 ₽ | OUTCAST Fire Show"
        description="Огненное шоу на выпускной в Челябинске: какую программу выбрать для школы, колледжа или вуза, как обеспечить безопасность, что добавить (огненные символы, огнепады), сколько стоит и когда бронировать."
        keywords="огненное шоу на выпускной челябинск, файер шоу на выпускной, заказать огненное шоу на выпускной, шоу на выпускной цена, выпускной 11 класс огненное шоу, выпускной в школе файер шоу, развлечение на выпускной челябинск, шоу на выпускной вечер"
        url={`${SITE}/blog/ognennoe-shou-na-vypusknoj-v-chelyabinske`}
        image={`${SITE}/vypusknoj-cover.jpg`}
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
                Огненное шоу на выпускной в Челябинске: как сделать вечер, который запомнят
              </h1>
              <div className="flex items-center gap-6 text-gray-400 mb-8">
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  18 октября 2026
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  7 минут чтения
                </span>
              </div>
            </div>

            <img
              src="/vypusknoj-cover.jpg"
              alt="Две артистки огненного шоу в облаке искр и огня на выпускном вечере в Челябинске"
              className="w-full h-80 md:h-[28rem] object-cover rounded-lg mb-12 shadow-2xl"
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Выпускной бывает один раз, и ребята хотят, чтобы он отличался от «просто банкета». Огненное шоу даёт то, чего не заменят ни диджей, ни конкурсы: сильные эмоции, яркие кадры и общее чувство «мы были здесь вместе». Рассказываем, как выбрать программу, что учесть организаторам и родителям, и сколько это стоит.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Почему огненное шоу хорошо для выпускного</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Icon name="Sparkles" size={18} className="text-primary" />Кульминация вечера</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Шоу ставят в самый важный момент: перед вручением аттестатов, после официальной части или как финал. Оно задаёт тон и запоминается лучше всего.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Icon name="Camera" size={18} className="text-primary" />Кадры для соцсетей</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Искры и огонь — это лучший фон для общего фото класса. Ребята сами снимают на телефоны, и ролики расходятся по их страницам.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Icon name="Users" size={18} className="text-primary" />Объединяет всех</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Выпускники, родители, педагоги — шоу одинаково нравится всем и не требует подготовки от гостей.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Icon name="Heart" size={18} className="text-primary" />Личный акцент</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Можно добавить огненные символы: год выпуска, название школы или класса, короткое слово на память.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Какую программу выбрать</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Выбор зависит от размера площадки, количества гостей и бюджета родительского комитета или выпускников.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold">Небольшой класс или камерный вечер: «MYSTIC»</h3>
                    <span className="text-primary font-bold whitespace-nowrap">от 20 000 ₽</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">6 минут, два артиста, огонь, искры и современная музыка. Подойдёт для кафе, небольшого двора или террасы.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold">Самый частый выбор: «TRAILER»</h3>
                    <span className="text-primary font-bold whitespace-nowrap">от 35 000 ₽</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">10 минут, 3–4 артиста, современная хореография и популярная музыка. Номер сделан так, чтобы зритель получил «вау-эффект», а для молодой аудитории это именно то, что нужно.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold">Необычный образ: «SHAMANISM»</h3>
                    <span className="text-primary font-bold whitespace-nowrap">от 38 000 ₽</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">10 минут, семь видов огненного реквизита и эксклюзивный реквизит, которого нет у других в Челябинской области. Для тех, кто хочет удивить.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold">Большой выпускной на площадке: «SORRY MAX»</h3>
                    <span className="text-primary font-bold whitespace-nowrap">от 50 000 ₽</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">15 минут, 8 видов огненного и 6 видов пиротехнического реквизита. Для выпускного нескольких классов или всей параллели.</p>
                </div>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-8 text-sm text-gray-400 flex gap-3">
                <Icon name="Info" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Итоговая стоимость зависит от даты, площадки и удалённости от Челябинска. Все программы и их состав смотрите в разделе «Наши программы» на главной.</span>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Что добавить к шоу</h2>
              <div className="grid md:grid-cols-5 gap-6 mb-8 items-start">
                <img
                  src="/vypusknoj-photo.jpg"
                  alt="Огненное шоу на выпускном: артистки с огнём в тёмное время суток"
                  loading="lazy"
                  className="md:col-span-2 w-full rounded-lg shadow-xl object-cover max-h-[34rem]"
                />
                <div className="md:col-span-3 space-y-4">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold">Огненные символы</h3>
                      <span className="text-primary font-bold whitespace-nowrap text-sm">от 2 000 ₽</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">Год выпуска, название школы или класса, слово «Выпуск», инициалы. Отличный фон для общего снимка.</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold">Пиротехнические огнепады</h3>
                      <span className="text-primary font-bold whitespace-nowrap text-sm">от 10 000 ₽</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">Стена из холодных искр, похожая на огненный водопад. Идеальна для общего фото выпускников.</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold">Пиротехнические мельницы</h3>
                      <span className="text-primary font-bold whitespace-nowrap text-sm">по запросу</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">Яркое завершение вечера: миллионы холодных искр, а выпускники оказываются в центре этой красоты. Есть варианты на 3, 6 и 12 лучей.</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold">Дополнительные фонтаны</h3>
                      <span className="text-primary font-bold whitespace-nowrap text-sm">от 1 700 ₽/шт</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">Холодные искры для выхода выпускников, вручения аттестатов или финального вальса.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Безопасность: что важно знать организаторам</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                На выпускном много молодых людей, часто в нарядных платьях и костюмах, поэтому безопасность идёт на первое место. Вот что мы делаем и что стоит продумать вам:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong className="text-white">Согласуем площадку заранее.</strong> Уточняем размер, покрытие, расстояние до зрителей и деревьев или построек.</li>
                <li><strong className="text-white">Определяем зону выступления.</strong> Гости смотрят с безопасного расстояния, зону можно обозначить лентой или ограждением.</li>
                <li><strong className="text-white">Работаем с сертифицированным оборудованием.</strong> На площадке работает техник.</li>
                <li><strong className="text-white">Узнайте правила площадки.</strong> Если выпускной проходит в школе, колледже или вузе, согласуйте огненное шоу с администрацией заранее.</li>
                <li><strong className="text-white">Сообщите нам об особенностях.</strong> Если среди гостей есть маленькие дети или люди с ограниченной мобильностью, мы учтём это при выборе места и программы.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Подробнее о том, как мы готовимся к выступлениям, читайте в статье{' '}
                <Link to="/blog/bezopasnost-ognennogo-shou" className="text-primary hover:underline">«Безопасность огненного шоу»</Link>.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Когда ставить шоу на выпускном</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong className="text-white">После официальной части</strong>: торжественная часть закончилась, начинается праздник.</li>
                <li><strong className="text-white">Перед выходом на «последний звонок» или вальс</strong>: огонь создаёт настроение и задаёт эмоциональный тон.</li>
                <li><strong className="text-white">Как финал вечера</strong>: последний яркий аккорд, который ребята унесут с собой.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Огонь смотрится лучше всего в сумерках и в темноте. Для выпускных в конце мая и июня это значит, что шоу лучше ставить ближе к позднему вечеру. Время подберём вместе с организаторами.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Когда бронировать</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Выпускные сосредоточены в узком окне: конец мая и июнь, а по выходным и в конкретные даты календарь заполняется первым. Мы советуем:
              </p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-8">
                <li>Определить дату и площадку как можно раньше, ещё до заказа банкета.</li>
                <li>Выбрать программу и бюджет вместе с родительским комитетом.</li>
                <li>Проверить свободные даты в календаре на главной странице и написать нам.</li>
                <li>За неделю до события согласовать время выхода и схему площадки.</li>
              </ol>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Частые вопросы</h2>
              <div className="space-y-4 mb-12">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Сколько стоит огненное шоу на выпускной в Челябинске?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Постановки стоят от 20 000 ₽ («MYSTIC») до 50 000 ₽ («SORRY MAX»). Для большинства выпускных подходит «TRAILER» от 35 000 ₽. Дополнительные эффекты (огненные символы, огнепады) заказываются отдельно.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Безопасно ли огненное шоу для школьников?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Мы работаем с сертифицированным оборудованием, заранее согласуем площадку и безопасное расстояние до зрителей. На площадке работает техник. Шоу ставится так, чтобы гости смотрели из безопасной зоны.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Можно ли провести шоу в помещении?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Иногда да, если позволяют потолок, вентиляция и правила площадки. Чаще выпускные проводят на открытой территории, во дворе или на террасе. Заранее уточним детали.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Можно ли заказать шоу для детского сада или начальной школы?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Напишите нам о формате, возрасте детей и площадке. Подберём подходящую программу и порядок работы, при необходимости с безопасной дистанцией и более спокойным форматом.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Выезжаете ли вы за пределы Челябинска?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Да, работаем по Челябинской области и в Башкортостане. Трансфер в пределах Челябинска включён, за город стоимость рассчитывается отдельно.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-orange-600/20 border border-primary/40 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Планируете выпускной?</h2>
                <p className="text-gray-300 mb-6">Напишите дату, площадку и количество гостей. Подберём программу и рассчитаем стоимость.</p>
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
                <Link to="/blog/ognennoe-shou-na-yubilej-v-chelyabinske" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Огненное шоу на юбилей</h3>
                  <p className="text-gray-400 text-sm">Как выбрать программу и сделать личный момент для юбиляра</p>
                </Link>
                <Link to="/blog/top-5-ploshchadok-v-chelyabinske-dlya-faier-shou" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Топ-5 площадок для файер-шоу</h3>
                  <p className="text-gray-400 text-sm">Лучшие места в Челябинске для выступления с огнём</p>
                </Link>
                <Link to="/ognennoe-shou-na-korporativ" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Шоу на корпоратив</h3>
                  <p className="text-gray-400 text-sm">Программы и цены для компаний на одной странице</p>
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

export default BlogArticle11;
