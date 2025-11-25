import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const BlogArticle3 = () => {
  return (
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
              Что такое файер-шоу: виды и стили
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                25 ноября 2024
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                8 минут чтения
              </span>
            </div>
          </div>

          <img 
            src="https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg" 
            alt="Файер-шоу виды и стили"
            className="w-full h-96 object-cover rounded-lg mb-12 shadow-2xl"
          />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Файер-шоу (fire show) — это яркое зрелищное представление с использованием огня в качестве основного элемента. Артисты манипулируют горящими предметами, создавая завораживающие образы и трюки. Это искусство сочетает акробатику, танец, театр и пиротехнику.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-4 mt-12">История огненного искусства</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Работа с огнём — одно из древнейших искусств человечества:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">🏛️ Древность</h3>
                <p className="text-gray-300 text-sm">
                  Огненные ритуалы в племенах Полинезии, Африки и Америки. Шаманы использовали огонь для обрядов и празднеств.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">🎪 Средние века</h3>
                <p className="text-gray-300 text-sm">
                  Уличные актёры и жонглёры в Европе. Огненные представления на ярмарках и праздниках.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">🔥 Современность</h3>
                <p className="text-gray-300 text-sm">
                  Профессиональное искусство с 1990-х годов. Международные фестивали, соревнования, новые техники и стили.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Виды реквизита в файер-шоу</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Каждый вид реквизита создаёт уникальные визуальные эффекты:
            </p>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 rounded-lg p-3">
                    <Icon name="Circle" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Пои (Poi)</h3>
                    <p className="text-gray-300 mb-4">
                      Два шара на цепях или верёвках. Артист вращает их в разных плоскостях, создавая огненные круги и спирали.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Эффекты:</strong>
                        <p className="text-gray-400 text-sm mt-1">Круги, восьмёрки, спирали, туннели</p>
                      </div>
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Сложность:</strong>
                        <p className="text-gray-400 text-sm mt-1">От базовой до экспертной</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 rounded-lg p-3">
                    <Icon name="Minus" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Стафф (Staff)</h3>
                    <p className="text-gray-300 mb-4">
                      Длинный шест с огнём на одном или обоих концах. Напоминает посох или копьё.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Эффекты:</strong>
                        <p className="text-gray-400 text-sm mt-1">Вертикальные вращения, пропеллеры, перехваты</p>
                      </div>
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Стиль:</strong>
                        <p className="text-gray-400 text-sm mt-1">Боевые искусства, танец, акробатика</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 rounded-lg p-3">
                    <Icon name="Sparkles" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Веера (Fans)</h3>
                    <p className="text-gray-300 mb-4">
                      Огненные веера с горящими спицами. Один из самых красивых и женственных видов реквизита.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Эффекты:</strong>
                        <p className="text-gray-400 text-sm mt-1">Волны, веера света, огненные стены</p>
                      </div>
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Применение:</strong>
                        <p className="text-gray-400 text-sm mt-1">Танцевальные номера, восточные мотивы</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 rounded-lg p-3">
                    <Icon name="Play" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Булавы (Clubs)</h3>
                    <p className="text-gray-300 mb-4">
                      Огненные булавы для жонглирования. Требуют высокой координации и мастерства.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Эффекты:</strong>
                        <p className="text-gray-400 text-sm mt-1">Каскады, фонтаны, сложные паттерны</p>
                      </div>
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Особенность:</strong>
                        <p className="text-gray-400 text-sm mt-1">Можно передавать между артистами</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 rounded-lg p-3">
                    <Icon name="Disc" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Обручи (Hoops)</h3>
                    <p className="text-gray-300 mb-4">
                      Огненные обручи разных размеров. От маленьких до огромных, в которых можно стоять.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Эффекты:</strong>
                        <p className="text-gray-400 text-sm mt-1">Огненные порталы, вращения, манипуляции</p>
                      </div>
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Сочетание:</strong>
                        <p className="text-gray-400 text-sm mt-1">Хуп-данс + огонь</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 rounded-lg p-3">
                    <Icon name="Zap" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Факелы (Torches)</h3>
                    <p className="text-gray-300 mb-4">
                      Классические огненные факелы. Простой, но эффектный реквизит для динамичных номеров.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Использование:</strong>
                        <p className="text-gray-400 text-sm mt-1">Жонглирование, пируэты, театральные образы</p>
                      </div>
                      <div className="bg-primary/10 rounded p-3">
                        <strong className="text-primary">Преимущество:</strong>
                        <p className="text-gray-400 text-sm mt-1">Яркий свет, подходит для больших площадок</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Стили файер-шоу</h2>

            <div className="space-y-8 mb-12">
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-2 border-purple-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Icon name="Sparkles" size={28} className="text-purple-400" />
                  Классическое файер-шоу
                </h3>
                <p className="text-gray-300 mb-4">
                  Традиционный стиль с акцентом на техничность и разнообразие трюков. Артисты демонстрируют мастерство владения различным реквизитом.
                </p>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Подходит для:</strong> корпоративов, юбилеев, городских праздников
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Icon name="Heart" size={28} className="text-red-400" />
                  Романтическое файер-шоу
                </h3>
                <p className="text-gray-300 mb-4">
                  Нежные движения, медленная музыка, огненные сердца и надписи. Часто используется на свадьбах во время первого танца молодожёнов.
                </p>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Подходит для:</strong> свадеб, предложений руки и сердца, годовщин
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border-2 border-green-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Icon name="Wind" size={28} className="text-green-400" />
                  Этническое/Шаманское
                </h3>
                <p className="text-gray-300 mb-4">
                  Ритуальные движения, барабанная музыка, мистическая атмосфера. Основано на древних огненных обрядах разных народов.
                </p>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Подходит для:</strong> тематических вечеринок, этно-фестивалей, необычных свадеб
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-2 border-blue-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Icon name="Zap" size={28} className="text-blue-400" />
                  Экстремальное шоу
                </h3>
                <p className="text-gray-300 mb-4">
                  Драйвовая музыка, сложные акробатические трюки, огнедышание, работа с большим количеством реквизита одновременно.
                </p>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Подходит для:</strong> крупных мероприятий, фестивалей, молодёжных вечеринок
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border-2 border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Icon name="Theater" size={28} className="text-yellow-400" />
                  Театральное шоу
                </h3>
                <p className="text-gray-300 mb-4">
                  Постановка с сюжетом и персонажами. Огонь используется для создания образов и передачи эмоций. Может включать элементы драмы и комедии.
                </p>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Подходит для:</strong> премьер, презентаций, культурных мероприятий
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-900/30 to-rose-900/30 border-2 border-pink-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Icon name="Music" size={28} className="text-pink-400" />
                  Танцевальное файер-шоу
                </h3>
                <p className="text-gray-300 mb-4">
                  Синхронизация движений с ритмом музыки, элементы контемпорари, хип-хопа или восточных танцев. Огонь — продолжение танца.
                </p>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Подходит для:</strong> танцевальных фестивалей, клубных вечеринок, артистических мероприятий
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Дополнительные спецэффекты</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Flame" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Огнедышание</h3>
                    <p className="text-gray-300 text-sm">
                      Артист выпускает струю огня изо рта. Эффектный, но опасный трюк, требующий профессиональных навыков.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Sparkles" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Пиротехника</h3>
                    <p className="text-gray-300 text-sm">
                      Фонтаны искр, римские свечи, бенгальские огни. Добавляют яркости и создают wow-эффект в финале.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Lightbulb" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">LED-реквизит</h3>
                    <p className="text-gray-300 text-sm">
                      Светящиеся пои, стаффы и обручи. Можно использовать в закрытых помещениях с низкими потолками.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Cloud" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Холодные фонтаны</h3>
                    <p className="text-gray-300 text-sm">
                      Безопасные искры, которые не обжигают. Можно использовать близко к зрителям и в небольших помещениях.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Как проходит типичное выступление?</h2>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4 bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Вступление (1-2 минуты)</h4>
                  <p className="text-gray-300">Артисты выходят с зажжённым реквизитом под музыку. Начинают с простых, но красивых движений для "разогрева" публики.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Основная часть (4-12 минут)</h4>
                  <p className="text-gray-300">Демонстрация различного реквизита и трюков. Постепенное нарастание темпа и сложности. Синхронизация между артистами.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Кульминация (2-3 минуты)</h4>
                  <p className="text-gray-300">Самые зрелищные трюки: огнедышание, пиротехника, сложные синхронные элементы. Пик энергии и эмоций.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Финал (1 минута)</h4>
                  <p className="text-gray-300">Яркая концовка с использованием всего реквизита одновременно. Эффектное гашение огня или финальный пиротехнический залп.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-3">
                <Icon name="Shield" size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-500 mb-2">Техника безопасности</h3>
                  <p className="text-gray-300 mb-3">
                    Профессиональные артисты соблюдают строгие правила безопасности:
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Использование специального огнеупорного топлива</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Огнеупорная одежда из натуральных тканей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Наличие огнетушителя и страховки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Проверка площадки перед выступлением</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Минимум 7 лет тренировок и опыта</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Современные тренды</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Icon name="Smartphone" size={24} className="text-primary" />
                  LED + Огонь
                </h3>
                <p className="text-gray-300 text-sm">
                  Комбинация светодиодного и огненного реквизита создаёт невероятные визуальные эффекты и позволяет выступать в любых условиях.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Icon name="Video" size={24} className="text-primary" />
                  Интерактив с публикой
                </h3>
                <p className="text-gray-300 text-sm">
                  Артисты вовлекают зрителей в шоу: приглашают на сцену, учат простым трюкам, делают фото с горящим реквизитом.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Icon name="Music" size={24} className="text-primary" />
                  Музыкальная синхронизация
                </h3>
                <p className="text-gray-300 text-sm">
                  Каждое движение попадает в такт. Используются популярные треки, классическая музыка или этнические мотивы.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Icon name="Users" size={24} className="text-primary" />
                  Групповые постановки
                </h3>
                <p className="text-gray-300 text-sm">
                  Синхронные выступления 3-5 артистов создают масштабные огненные картины и сложные хореографические композиции.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-orange-500/20 border-2 border-primary/50 rounded-lg p-8 text-center mt-12">
              <h2 className="text-3xl font-bold text-white mb-4">Хотите увидеть все стили вживую?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                OUTCAST Fire Show владеет всеми видами реквизита и стилями. Подберём идеальное шоу для вашего мероприятия!
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
  );
};

export default BlogArticle3;
