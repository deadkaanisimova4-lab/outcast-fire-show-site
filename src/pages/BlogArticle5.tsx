import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BlogMeta from '@/components/BlogMeta';

const BlogArticle5 = () => {
  return (
    <>
      <BlogMeta
        title="Безопасность огненного шоу — Как мы защищаем зрителей | OUTCAST Fire Show"
        description="Всё о безопасности файер-шоу: какие меры принимают профессионалы, какие документы нужны, как выбрать безопасных артистов. Подробный разбор от OUTCAST Fire Show."
        keywords="безопасность огненного шоу, файер-шоу безопасно, пожарная безопасность огненное шоу, страховка артистов огненного шоу, безопасное огненное шоу челябинск"
        url="https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/bezopasnost-ognennogo-shou"
        image="https://cdn.poehali.dev/files/282a58c5-553c-4af6-b6e2-c9bf922c59c0.jpg"
        datePublished="2026-02-10"
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
                Безопасность огненного шоу: как мы защищаем зрителей
              </h1>
              <div className="flex items-center gap-6 text-gray-400 mb-8">
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  10 февраля 2026
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  6 минут чтения
                </span>
              </div>
            </div>

            <img
              src="https://cdn.poehali.dev/files/282a58c5-553c-4af6-b6e2-c9bf922c59c0.jpg"
              alt="Безопасное огненное шоу"
              loading="lazy"
              className="w-full h-96 object-cover rounded-lg mb-12 shadow-2xl"
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                «А это не опасно?» — первый вопрос, который задают 90% клиентов. Понимаем. Огонь — штука серьёзная. Именно поэтому профессиональные артисты уделяют безопасности больше времени, чем самим трюкам. Рассказываем, как это работает изнутри.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Подготовка артистов</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Прежде чем выйти к зрителям с огнём, артист проходит серьёзную подготовку:
              </p>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Shield" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Минимум 2 года тренировок без огня</strong>
                      <p className="text-gray-400 mt-1">Каждый трюк сначала отрабатывается сотни раз с безопасным реквизитом. Только когда движения доведены до автоматизма — начинается работа с огнём.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Shield" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Регулярные репетиции</strong>
                      <p className="text-gray-400 mt-1">Наша команда репетирует минимум 3 раза в неделю. Каждый элемент программы отработан до мышечной памяти.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Shield" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Первая медицинская помощь</strong>
                      <p className="text-gray-400 mt-1">Все артисты проходят курсы первой помощи. На каждом выступлении есть аптечка и огнетушитель.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Безопасный реквизит</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Реквизит профессионалов принципиально отличается от любительского:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Топливо</h3>
                  <p className="text-gray-300">
                    Используем только специальный состав с контролируемой температурой горения. Никакого бензина или спирта — они дают непредсказуемое пламя и опасные испарения.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Реквизит</h3>
                  <p className="text-gray-300">
                    Сертифицированный кевларовый материал. Не разбрасывает искры, горит ровно и предсказуемо. Каждый элемент проверяется перед выступлением.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Пиротехника</h3>
                  <p className="text-gray-300">
                    Холодные фонтаны и бенгальские огни сертифицированы для использования в помещениях. Температура искр не превышает 60°C — не поджигают одежду.
                  </p>
                </div>

              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Меры безопасности на площадке</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Перед каждым выступлением мы проводим проверку площадки:
              </p>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="ClipboardCheck" size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-500 mb-2">Чек-лист перед выступлением:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Проверка площадки: расстояние до зрителей, высота потолков, покрытие пола</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Установка защитного коврика из негорючего материала</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Размещение 2 огнетушителей и противопожарного одеяла</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Проверка направления ветра (на открытых площадках)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Разметка безопасной зоны для зрителей (минимум 3 метра)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Проверка всего реквизита и запасных комплектов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Инструктаж ведущего и организаторов</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Как отличить профессионалов от любителей</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Вот на что стоит обратить внимание при выборе артистов:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Профессионалы</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Страховка гражданской ответственности</li>
                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Портфолио с видео выступлений</li>
                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Реальные отзывы с фото</li>
                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Свой реквизит и защитное оборудование</li>
                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Договор на оказание услуг</li>
                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Проверяют площадку заранее</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-3">Любители</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Нет страховки</li>
                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Мало видео, снятых на телефон</li>
                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Нет отзывов или только текстовые</li>
                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Дешёвый или самодельный реквизит</li>
                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Работают без договора</li>
                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Готовы выступать где угодно</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Наша статистика безопасности</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-gray-400 text-sm mt-1">выступлений</div>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">0</div>
                  <div className="text-gray-400 text-sm mt-1">инцидентов</div>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">7+</div>
                  <div className="text-gray-400 text-sm mt-1">лет опыта</div>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-gray-400 text-sm mt-1">страховка</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-orange-600/20 border border-primary/40 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Остались вопросы о безопасности?</h2>
                <p className="text-gray-300 mb-6">Позвоните нам — расскажем всё подробно и покажем документы. Ваш праздник должен быть не только ярким, но и безопасным.</p>
                <Link to="/#contacts">
                  <Button className="bg-primary hover:bg-primary/80 text-black font-bold text-lg px-8 py-3">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Задать вопрос
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Читайте также</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/blog/chto-takoe-faier-shou-vidy-i-stili" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Что такое файер-шоу: виды и стили</h3>
                  <p className="text-gray-400 text-sm">Все виды реквизита и стили выступлений — полный гид</p>
                </Link>
                <Link to="/blog/ognennoe-shou-na-korporativ" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Огненное шоу на корпоратив</h3>
                  <p className="text-gray-400 text-sm">Форматы, тайминг и типичные ошибки при заказе</p>
                </Link>
                <Link to="/blog/kak-vybrat-ognennoe-shou-dlya-svadby" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
                  <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Как выбрать огненное шоу для свадьбы</h3>
                  <p className="text-gray-400 text-sm">Полный гид по выбору программы — форматы, цены, стили</p>
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

export default BlogArticle5;