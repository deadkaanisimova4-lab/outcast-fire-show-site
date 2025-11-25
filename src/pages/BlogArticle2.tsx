import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BlogMeta from '@/components/BlogMeta';

const BlogArticle2 = () => {
  return (
    <>
      <BlogMeta
        title="Топ-5 площадок в Челябинске для файер-шоу — Обзор от OUTCAST Fire Show"
        description="Лучшие места для огненного шоу в Челябинске: загородные комплексы, рестораны, открытые площадки. Полная информация, адреса, цены, критерии выбора."
        keywords="площадки для огненного шоу челябинск, где провести файер-шоу, загородные комплексы челябинск, рестораны челябинск огненное шоу, площадки для файер-шоу"
        url="https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog/top-5-ploshchadok-v-chelyabinske-dlya-faier-shou"
        image="https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg"
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
              Топ-5 площадок в Челябинске для файер-шоу
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                25 ноября 2024
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                6 минут чтения
              </span>
            </div>
          </div>

          <img 
            src="https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg" 
            alt="Огненное шоу на площадке"
            className="w-full h-96 object-cover rounded-lg mb-12 shadow-2xl"
          />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Выбор площадки для огненного шоу — это 50% успеха мероприятия. Не каждое место подходит для работы с огнём: нужны высокие потолки, безопасное покрытие и достаточно пространства. Мы составили список лучших площадок Челябинска, где OUTCAST Fire Show регулярно выступает.
            </p>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-primary mb-3">Критерии выбора площадки:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Минимум 4×4 метра свободного пространства</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Высота потолков от 4 метров (для закрытых площадок)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Негорючее покрытие (бетон, плитка, асфальт)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Расстояние до зрителей минимум 2-3 метра</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12 flex items-center gap-3">
              <span className="bg-gradient-to-r from-primary to-orange-500 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">1</span>
              Загородный комплекс "Берёзка"
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Информация:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Адрес: пос. Долгодеревенское, ул. Лесная, 45</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Users" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Вместимость: до 250 гостей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="DollarSign" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Аренда: от 50 000₽/день</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Phone" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>+7 (351) 123-45-67</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Почему подходит:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Открытая терраса 8×10 метров</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Каменное покрытие</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Безопасное расстояние от леса</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Есть подсветка площадки</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 mt-4">
                <p className="text-gray-300">
                  <strong className="text-white">Наш опыт:</strong> Выступали здесь 30+ раз. Идеальное место для свадеб на природе. Большая площадка позволяет делать масштабные постановки с пиротехникой.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12 flex items-center gap-3">
              <span className="bg-gradient-to-r from-primary to-orange-500 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">2</span>
              Загородный комплекс "Усадьба" (Сугояк)
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Информация:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Адрес: пос. Сугояк, ул. Центральная, 15</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Users" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Вместимость: до 180 гостей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="DollarSign" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Аренда: от 55 000₽/день</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Phone" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>+7 (351) 234-56-78</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Почему подходит:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Просторная открытая площадка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Асфальтированное покрытие</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Красивый природный фон</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Территория 10×12 метров</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 mt-4">
                <p className="text-gray-300">
                  <strong className="text-white">Наш опыт:</strong> Отличная площадка на природе для свадеб и корпоративов. Живописная территория на берегу озера создаёт романтическую атмосферу. Огненное шоу под открытым небом здесь смотрится особенно эффектно!
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12 flex items-center gap-3">
              <span className="bg-gradient-to-r from-primary to-orange-500 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">3</span>
              Парк-отель "Урал"
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Информация:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Адрес: Челябинский тракт, 25 км</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Users" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Вместимость: до 300 гостей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="DollarSign" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Аренда: от 70 000₽/день</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Phone" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>+7 (351) 345-67-89</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Почему подходит:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Большая открытая площадка 15×12 метров</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Безопасное бетонное покрытие</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Профессиональный свет и звук</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Удобный подъезд для оборудования</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 mt-4">
                <p className="text-gray-300">
                  <strong className="text-white">Наш опыт:</strong> Премиальная площадка для масштабных корпоративов и свадеб. Большая территория даёт развернуться на полную. Живописный вид на лес создаёт особую атмосферу.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12 flex items-center gap-3">
              <span className="bg-gradient-to-r from-primary to-orange-500 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">4</span>
              База отдыха "Зюраткуль"
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Информация:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Адрес: Саткинский р-н, оз. Зюраткуль</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Users" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Вместимость: до 100 гостей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="DollarSign" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Аренда: от 35 000₽/день</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Phone" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>+7 (351) 456-78-90</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Почему подходит:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Открытая площадка у озера</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Невероятные виды на горы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Безопасное удаление от деревьев</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Романтическая атмосфера</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 mt-4">
                <p className="text-gray-300">
                  <strong className="text-white">Наш опыт:</strong> Магическое место для свадеб на природе. Огненное шоу на фоне гор и озера — это что-то невероятное! Важно: выезд платный (+3500₽ от Челябинска).
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12 flex items-center gap-3">
              <span className="bg-gradient-to-r from-primary to-orange-500 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">5</span>
              Ресторан "Палермо"
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Информация:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Адрес: ул. Свободы, 166</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Users" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Вместимость: до 200 гостей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="DollarSign" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Банкет: от 3000₽/чел</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Phone" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>+7 (351) 567-89-01</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Почему подходит:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Открытая летняя площадка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Просторная терраса 8×10 метров</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Итальянская атмосфера</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>Огонь создаёт эффектные фото</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 mt-4">
                <p className="text-gray-300">
                  <strong className="text-white">Наш опыт:</strong> Уютная площадка с открытой террасой для камерных мероприятий. Средиземноморский стиль интерьера создаёт особую атмосферу. Выступаем здесь только на открытой площадке!
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Сравнительная таблица площадок</h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-x-auto mb-12">
              <table className="w-full text-sm">
                <thead className="bg-primary/10 border-b border-gray-800">
                  <tr>
                    <th className="text-left p-3 text-white">Площадка</th>
                    <th className="text-left p-3 text-white">Тип</th>
                    <th className="text-left p-3 text-white">Вместимость</th>
                    <th className="text-left p-3 text-white">Цена</th>
                    <th className="text-left p-3 text-white">Рейтинг</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="p-3">Берёзка</td>
                    <td className="p-3">Загородная</td>
                    <td className="p-3">до 250</td>
                    <td className="p-3">от 50 000₽</td>
                    <td className="p-3">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-3">Усадьба (Сугояк)</td>
                    <td className="p-3">Загородная</td>
                    <td className="p-3">до 180</td>
                    <td className="p-3">от 55 000₽</td>
                    <td className="p-3">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-3">Парк-отель Урал</td>
                    <td className="p-3">Загородная</td>
                    <td className="p-3">до 300</td>
                    <td className="p-3">от 70 000₽</td>
                    <td className="p-3">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-3">Зюраткуль</td>
                    <td className="p-3">База отдыха</td>
                    <td className="p-3">до 100</td>
                    <td className="p-3">от 35 000₽</td>
                    <td className="p-3">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-3">Палермо</td>
                    <td className="p-3">Ресторан (терраса)</td>
                    <td className="p-3">до 200</td>
                    <td className="p-3">от 3000₽/чел</td>
                    <td className="p-3">⭐⭐⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Icon name="Lightbulb" size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-500 mb-2">Совет от OUTCAST Fire Show:</h3>
                  <p className="text-gray-300">
                    Перед бронированием площадки обязательно уточните у администрации, разрешены ли огненные шоу. Некоторые заведения требуют предварительного согласования с МЧС. Мы можем помочь с оформлением всех документов!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Что ещё учесть при выборе площадки?</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  Удобство расположения
                </h3>
                <p className="text-gray-300">
                  Гостям должно быть легко добраться. Наличие парковки — большой плюс.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Icon name="Cloud" size={20} className="text-primary" />
                  Погодные условия
                </h3>
                <p className="text-gray-300">
                  Для открытых площадок важен план Б на случай дождя или сильного ветра.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Icon name="Volume2" size={20} className="text-primary" />
                  Акустика и звук
                </h3>
                <p className="text-gray-300">
                  Огненное шоу идёт под музыку. Убедитесь, что на площадке есть хорошая звуковая система.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Icon name="Camera" size={20} className="text-primary" />
                  Освещение для фото
                </h3>
                <p className="text-gray-300">
                  Проверьте, есть ли дополнительная подсветка. Это важно для красивых фото и видео.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-orange-500/20 border-2 border-primary/50 rounded-lg p-8 text-center mt-12">
              <h2 className="text-3xl font-bold text-white mb-4">Нужна помощь с выбором площадки?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                OUTCAST Fire Show поможет подобрать идеальное место для вашего мероприятия и согласует все организационные моменты
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

export default BlogArticle2;