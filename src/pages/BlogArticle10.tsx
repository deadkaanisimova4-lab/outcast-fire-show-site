import { Link } from "@/lib/router-compat";
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BlogMeta from '@/components/BlogMeta';

const SITE = 'https://xn----74-k4dma6dbagfc4ewd.xn--p1ai';
const ORDER_LINK = `https://vk.me/write-203229964?text=${encodeURIComponent(
  'Здравствуйте! Хочу заказать огненное шоу на юбилей. Дата: ____, площадка: ____, гостей: ____.'
)}`;

const BlogArticle10 = () => {
  return (
    <>
      <BlogMeta
        title="Огненное шоу на юбилей в Челябинске — программы и цены от 20 000 ₽ | OUTCAST Fire Show"
        description="Огненное шоу на юбилей в Челябинске: как выбрать программу для 30, 50 или 60 лет, где провести, что добавить (огненные символы, фонтаны), сколько стоит. Советы от OUTCAST Fire Show."
        keywords="огненное шоу на юбилей челябинск, файер шоу на юбилей, заказать огненное шоу на юбилей, шоу на юбилей 50 лет челябинск, огненное шоу на юбилей цена, сюрприз на юбилей, огненные символы на юбилей, артисты на юбилей челябинск"
        url={`${SITE}/blog/ognennoe-shou-na-yubilej-v-chelyabinske`}
        image={`${SITE}/yubilej-cover.jpg`}
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
                Огненное шоу на юбилей в Челябинске: как выбрать программу и не прогадать
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
              src="/yubilej-cover.jpg"
              alt="Артистки огненного шоу с искрами и огнём на юбилее в Челябинске"
              className="w-full h-80 md:h-[28rem] object-cover rounded-lg mb-12 shadow-2xl"
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Юбилей бывает один раз, и хочется, чтобы гости говорили о нём не «посидели, поели», а «помнишь, как там горел огонь?». Огненное шоу даёт именно такой эффект: это яркий номер, который объединяет всех гостей, от внуков до коллег. Разбираем, как выбрать программу, когда её ставить и что добавить, чтобы юбиляр остался в восторге.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Почему огненное шоу подходит для юбилея</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Icon name="Gift" size={18} className="text-primary" />Необычный подарок</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Подарок, который нельзя поставить на полку, но невозможно забыть. Шоу можно подарить от семьи, от друзей или от коллектива.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Icon name="Users" size={18} className="text-primary" />Нравится всем возрастам</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Огонь одинаково завораживает детей, родителей и бабушек с дедушками. Не нужно подбирать «под вкус» каждой группы гостей.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Icon name="Camera" size={18} className="text-primary" />Кадры на память</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Искры, огонь и дым дают яркие фото и видео. Именно их потом показывают родственникам, которые не смогли приехать.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Icon name="Sparkles" size={18} className="text-primary" />Личный момент</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Можно добавить огненные символы: имя, цифру возраста или короткое слово, которое загорится на глазах у гостей.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Какую программу выбрать под формат юбилея</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Выбор зависит от размера площадки, количества гостей и бюджета. Ориентируйтесь на такую схему:
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold">Камерный юбилей до 30 гостей: «MYSTIC»</h3>
                    <span className="text-primary font-bold whitespace-nowrap">от 20 000 ₽</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">Парное выступление на 6 минут, два артиста. Подходит для кафе, загородного дома, небольшой площадки. Компактно, но очень эффектно.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold">Праздник в ресторане или банкетном зале: «TRAILER»</h3>
                    <span className="text-primary font-bold whitespace-nowrap">от 35 000 ₽</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">10 минут, 3–4 артиста, пять видов огненного реквизита и пиротехника. Динамичный номер с современной музыкой, который заводит зал.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold">Для тех, кто любит русские мотивы: «RUSSIAN STYLE»</h3>
                    <span className="text-primary font-bold whitespace-nowrap">от 43 000 ₽</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">10 минут, 4 артиста, яркие костюмы и музыка, которую подпевают все гости. Хорошо подходит для юбилеев старшего поколения. Подробнее в{' '}
                    <Link to="/blog/russkoe-ognennoe-shou-na-svadbu" className="text-primary hover:underline">статье про постановку</Link>.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold">Масштабный праздник: «SORRY MAX»</h3>
                    <span className="text-primary font-bold whitespace-nowrap">от 50 000 ₽</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">15 минут, 8 видов огненного и 6 видов пиротехнического реквизита. Для большого юбилея на открытой площадке, когда нужен грандиозный финал.</p>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-8 text-sm text-gray-400 flex gap-3">
                <Icon name="Info" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Итоговая стоимость зависит от даты, площадки и удалённости от Челябинска. Полный список программ и состав смотрите в разделе «Наши программы» на главной странице.</span>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Что добавить, чтобы шоу стало личным</h2>
              <div className="grid md:grid-cols-5 gap-6 mb-8 items-start">
                <img
                  src="/yubilej-photo.jpg"
                  alt="Огненное шоу на юбилее: артистки с огнём и холодными искрами"
                  loading="lazy"
                  className="md:col-span-2 w-full rounded-lg shadow-xl object-cover max-h-[34rem]"
                />
                <div className="md:col-span-3 space-y-4">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold">Огненные символы</h3>
                      <span className="text-primary font-bold whitespace-nowrap text-sm">от 2 000 ₽</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">Огненный реквизит со словами, инициалами или цифрой возраста. Например, «60» или имя юбиляра.</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold">Церемония зажжения сердца</h3>
                      <span className="text-primary font-bold whitespace-nowrap text-sm">от 7 000 ₽</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">Огненное сердце, 2 холодных фонтана и дорожка из огненных чаш. Трогательный момент для юбиляра и его близких.</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold">Пиротехнические огнепады</h3>
                      <span className="text-primary font-bold whitespace-nowrap text-sm">от 10 000 ₽</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">Стена из холодных искр, похожая на огненный водопад. Эффектный фон для общего фото.</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold">Дополнительные фонтаны</h3>
                      <span className="text-primary font-bold whitespace-nowrap text-sm">от 1 700 ₽/шт</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">Холодные искры для выхода юбиляра, тоста или финала вечера.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Когда ставить шоу на юбилее</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong className="text-white">После торжественной части и первых тостов</strong>, когда гости уже расслабились, но ещё полны сил.</li>
                <li><strong className="text-white">Перед тортом или поздравлением от семьи</strong>: шоу создаёт настроение, а потом наступает тёплый личный момент.</li>
                <li><strong className="text-white">Как финал вечера</strong>, если хочется, чтобы последним впечатлением был огонь.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Шоу лучше проводить в тёмное время суток или в затемнённом зале: тогда огонь и искры смотрятся ярче всего. Точное время подберём вместе с ведущим или организатором.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Где провести огненное шоу на юбилей</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Открытая площадка</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Загородный дом, база отдыха, двор, терраса. Самый простой вариант: места много, потолка нет.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Ресторан или кафе</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Возможно, если есть место на улице или просторный зал. Заранее согласуем площадку с администрацией.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Банкетный зал</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Подбираем программу и эффекты с учётом высоты потолка и требований площадки.</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Идеи площадок с адресами и особенностями собрали в статье{' '}
                <Link to="/blog/top-5-ploshchadok-v-chelyabinske-dlya-faier-shou" className="text-primary hover:underline">«Топ-5 площадок в Челябинске для файер-шоу»</Link>.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Как организовать сюрприз</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Если шоу задумано как подарок-сюрприз, соблюдайте несколько простых правил:</p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-8">
                <li>Заказывайте шоу через организатора праздника или родственника, а не через самого юбиляра.</li>
                <li>Сообщите нам заранее время выхода артистов, чтобы мы приехали и подготовились незаметно.</li>
                <li>Определите, кто будет «ведущим момента»: он объявит выход артистов и подведёт юбиляра к нужному месту.</li>
                <li>Сообщите, есть ли среди гостей маленькие дети и пожилые люди: мы заранее выберем безопасную дистанцию.</li>
              </ol>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Безопасность на юбилее</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Мы работаем с сертифицированным оборудованием, согласуем площадку и расстояние до гостей заранее. В программы входит работа техника на площадке. Подробнее о том, как проходит подготовка, читайте в статье{' '}
                <Link to="/blog/bezopasnost-ognennogo-shou" className="text-primary hover:underline">«Безопасность огненного шоу»</Link>.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Частые вопросы</h2>
              <div className="space-y-4 mb-12">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Сколько стоит огненное шоу на юбилей в Челябинске?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Постановки стоят от 20 000 ₽ («MYSTIC») до 50 000 ₽ («SORRY MAX»). Дополнительные эффекты: огненные символы от 2 000 ₽, церемония зажжения сердца от 7 000 ₽, огнепады от 10 000 ₽.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Подойдёт ли шоу для юбилея 50 или 60 лет?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Да, это один из частых поводов. Для старшего поколения хорошо подходит постановка «RUSSIAN STYLE» с узнаваемой музыкой, а огненные символы с цифрой возраста добавят личный штрих.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Можно ли провести шоу в помещении?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Иногда да, если позволяют потолок, вентиляция и правила площадки. Заранее уточняем эти вопросы и подбираем подходящую программу или холодные эффекты.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Как узнать, свободна ли дата?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Напишите нам в ВКонтакте или позвоните. Также можно выбрать дату в календаре на главной странице и сразу отправить сообщение.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-white font-bold mb-2">Выезжаете ли вы за пределы Челябинска?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Да, работаем по Челябинской области и в Башкортостане. Трансфер в пределах Челябинска включён, за город стоимость рассчитывается отдельно.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-orange-600/20 border border-primary/40 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Планируете юбилей?</h2>
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
                <Link to="/blog/ognennoe-shou-na-den-rozhdeniya" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Огненное шоу на день рождения</h3>
                  <p className="text-gray-400 text-sm">Идеи для сюрприза именинника: программы для любого возраста</p>
                </Link>
                <Link to="/blog/russkoe-ognennoe-shou-na-svadbu" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Русское огненное шоу</h3>
                  <p className="text-gray-400 text-sm">Постановка RUSSIAN STYLE: костюмы, огонь и узнаваемые треки</p>
                </Link>
                <Link to="/ognennoe-shou-na-den-rozhdeniya" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Шоу на день рождения и юбилей</h3>
                  <p className="text-gray-400 text-sm">Программы, цены и кнопка заказа на одной странице</p>
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

export default BlogArticle10;
