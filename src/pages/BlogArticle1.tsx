import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BlogMeta from '@/components/BlogMeta';

const BlogArticle1 = () => {
  return (
    <>
      <BlogMeta
        title="Как выбрать огненное шоу для свадьбы в Челябинске — Гид от OUTCAST Fire Show"
        description="Полное руководство по выбору файер-шоу на свадьбу: какие программы бывают, как подобрать под формат, что важно учесть. Советы от профессионалов OUTCAST Fire Show с опытом 7+ лет."
        keywords="огненное шоу на свадьбу, файер-шоу цена челябинск, заказать огненное шоу на свадьбу, как выбрать файер-шоу, свадебное огненное шоу челябинск, выступление с огнем на свадьбу"
        url="https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/kak-vybrat-ognennoe-shou-dlya-svadby"
        image="https://cdn.poehali.dev/files/d524fd97-2aa3-484d-ae46-9fa3748e5790.jpg"
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
              Как выбрать огненное шоу для свадьбы
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                25 ноября 2024
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                7 минут чтения
              </span>
            </div>
          </div>

          <img 
            src="https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg" 
            alt="Огненное шоу на свадьбе"
            className="w-full h-96 object-cover rounded-lg mb-12 shadow-2xl"
          />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Свадьба — один из самых важных дней в жизни. И каждая пара хочет сделать его незабываемым не только для себя, но и для гостей. Огненное шоу — это яркий и эффектный способ удивить всех присутствующих. Но как выбрать правильную программу и не разочароваться?
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4 mt-12">1. Определите формат свадьбы</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Прежде всего, нужно понять, какая у вас свадьба. От этого зависит выбор программы огненного шоу:
            </p>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="Flame" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Камерная свадьба (до 50 гостей):</strong>
                    <p className="text-gray-400 mt-1">Подойдёт парное выступление на 6-8 минут. Это создаст уютную атмосферу и не "перегрузит" программу.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Flame" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Средняя свадьба (50-100 гостей):</strong>
                    <p className="text-gray-400 mt-1">Идеально подойдёт шоу на 10-15 минут с 2-3 артистами. Можно добавить пиротехнику и огненные спецэффекты.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Flame" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Большая свадьба (100+ гостей):</strong>
                    <p className="text-gray-400 mt-1">Масштабная программа на 15-20 минут с 3-4 артистами, сложными трюками и огненным финалом.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4 mt-12">2. Выберите стиль выступления</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Огненное шоу может быть разным по настроению и энергетике:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">🔥 Романтичное</h3>
                <p className="text-gray-300">
                  Нежные движения, плавная музыка, огненные сердца и надписи. Подходит для первого танца молодожёнов или медленной части вечера.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">⚡ Энергичное</h3>
                <p className="text-gray-300">
                  Драйвовая музыка, сложные трюки, огненные вихри. Идеально для кульминации вечера, когда все гости уже в хорошем настроении.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">🎭 Театральное</h3>
                <p className="text-gray-300">
                  Сюжетная постановка с элементами драмы. Например, история любви, рассказанная через огненные образы.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">🌀 Этническое</h3>
                <p className="text-gray-300">
                  Огненные ритуалы, шаманские мотивы, народная музыка. Создаёт мистическую атмосферу и запоминается надолго.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4 mt-12">3. Учтите особенности площадки</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Не каждая площадка подходит для огненного шоу. Важно учесть:
            </p>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Icon name="AlertTriangle" size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-500 mb-2">Требования к площадке:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Минимальная площадь:</strong> 4×4 метра для одного артиста</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Высота потолков:</strong> не менее 4 метров (для закрытых помещений)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Пожарная безопасность:</strong> наличие огнетушителя обязательно</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Покрытие:</strong> негорючее (бетон, асфальт, плитка). Паркет и ламинат — нужна защита</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Расстояние до зрителей:</strong> минимум 2-3 метра</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4 mt-12">4. Определите бюджет</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Стоимость огненного шоу на свадьбу в Челябинске зависит от нескольких факторов:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-primary/10 border-b border-gray-800">
                  <tr>
                    <th className="text-left p-4 text-white">Программа</th>
                    <th className="text-left p-4 text-white">Длительность</th>
                    <th className="text-left p-4 text-white">Артисты</th>
                    <th className="text-left p-4 text-white">Цена</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="p-4">MYSTIC (базовая)</td>
                    <td className="p-4">6-8 минут</td>
                    <td className="p-4">2 человека</td>
                    <td className="p-4 text-primary font-bold">18 000₽</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4">TRAILER (средняя)</td>
                    <td className="p-4">10-12 минут</td>
                    <td className="p-4">2-3 человека</td>
                    <td className="p-4 text-primary font-bold">30 000₽</td>
                  </tr>
                  <tr>
                    <td className="p-4">SHAMANISM (премиум)</td>
                    <td className="p-4">15-18 минут</td>
                    <td className="p-4">3-4 человека</td>
                    <td className="p-4 text-primary font-bold">32 000₽</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Дополнительные услуги:</strong>
            </p>
            <ul className="space-y-2 text-gray-300 mb-8">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Выезд за город (более 20 км от Челябинска) — от 1500₽</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Дополнительные артисты — 5000₽ за каждого</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Световое шоу — от 8000₽</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Фотозона с огнём — от 5000₽</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-4 mt-12">5. Проверьте опыт артистов</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Огненное шоу — это не только красиво, но и опасно. Поэтому важно:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <Icon name="Shield" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Опыт работы:</strong>
                  <p className="text-gray-400 mt-1">Минимум 3-5 лет. У OUTCAST Fire Show — 7+ лет опыта и 500+ выступлений.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <Icon name="Award" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Портфолио:</strong>
                  <p className="text-gray-400 mt-1">Попросите видео прошлых выступлений. Обратите внимание на качество трюков и реакцию зрителей.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <Icon name="FileText" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Документы:</strong>
                  <p className="text-gray-400 mt-1">Профессиональная команда должна иметь договор, страховку и разрешения на работу с огнём.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <Icon name="Star" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Отзывы:</strong>
                  <p className="text-gray-400 mt-1">Почитайте отзывы реальных клиентов в соцсетях и на сайтах-отзовиках.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4 mt-12">6. Согласуйте детали заранее</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Чтобы всё прошло гладко в день свадьбы:
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 border border-primary/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">Чек-лист перед заказом:</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-primary" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Обсудили место и время выступления</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-primary" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Проверили площадку на соответствие требованиям</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-primary" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Выбрали музыкальное сопровождение</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-primary" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Согласовали программу и длительность</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-primary" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Обсудили стоимость и форму оплаты</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-primary" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Подписали договор</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-primary" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Получили контакты артистов для связи в день свадьбы</span>
                </label>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4 mt-12">Частые ошибки при заказе</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-red-400">Заказ в последний момент</strong>
                    <p className="text-gray-400 mt-1">Лучшие команды расписаны на месяцы вперёд. Бронируйте за 2-3 месяца до свадьбы.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-red-400">Не проверили площадку</strong>
                    <p className="text-gray-400 mt-1">В день свадьбы выясняется, что потолки низкие или пол деревянный. Итог — шоу отменяется.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-red-400">Выбор по самой низкой цене</strong>
                    <p className="text-gray-400 mt-1">Дешевле — не значит лучше. Непрофессионалы могут испортить праздник и создать опасную ситуацию.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-red-400">Не обсудили детали</strong>
                    <p className="text-gray-400 mt-1">Музыку выбрали в последний момент, время выступления не согласовали — в итоге шоу "не вписалось" в программу.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-orange-500/20 border-2 border-primary/50 rounded-lg p-8 text-center mt-12">
              <h2 className="text-3xl font-bold text-white mb-4">Готовы заказать огненное шоу?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                OUTCAST Fire Show — 7+ лет опыта, 500+ выступлений, профессиональное оборудование и полная безопасность
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+79085740813">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить: +7 (908) 574-08-13
                  </Button>
                </a>
                <Link to="/">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                    <Icon name="Flame" size={20} className="mr-2" />
                    Посмотреть программы
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-black/50 border-t border-gray-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 OUTCAST Fire Show. Все права защищены.</p>
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

export default BlogArticle1;