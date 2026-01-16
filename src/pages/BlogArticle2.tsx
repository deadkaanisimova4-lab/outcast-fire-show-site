import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BlogMeta from '@/components/BlogMeta';
import BlogHeader from '@/components/blog/BlogHeader';
import VenueCard from '@/components/blog/VenueCard';
import VenueComparisonTable from '@/components/blog/VenueComparisonTable';
import AdditionalConsiderations from '@/components/blog/AdditionalConsiderations';

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
      <BlogHeader />

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

            <VenueCard
              number={1}
              title='Загородный комплекс "Берёзка"'
              info={{
                address: 'пос. Долгодеревенское, ул. Лесная, 45',
                capacity: 'до 250 гостей',
                price: 'Аренда: от 50 000₽/день',
                phone: '+7 (351) 123-45-67'
              }}
              features={[
                'Открытая терраса 8×10 метров',
                'Каменное покрытие',
                'Безопасное расстояние от леса',
                'Есть подсветка площадки'
              ]}
              experience="Выступали здесь 30+ раз. Идеальное место для свадеб на природе. Большая площадка позволяет делать масштабные постановки с пиротехникой."
            />

            <VenueCard
              number={2}
              title='Загородный комплекс "Усадьба" (Сугояк)'
              info={{
                address: 'пос. Сугояк, ул. Центральная, 15',
                capacity: 'до 180 гостей',
                price: 'Аренда: от 55 000₽/день',
                phone: '+7 (351) 234-56-78'
              }}
              features={[
                'Просторная открытая площадка',
                'Асфальтированное покрытие',
                'Красивый природный фон',
                'Территория 10×12 метров'
              ]}
              experience="Отличная площадка на природе для свадеб и корпоративов. Живописная территория на берегу озера создаёт романтическую атмосферу. Огненное шоу под открытым небом здесь смотрится особенно эффектно!"
            />

            <VenueCard
              number={3}
              title='Парк-отель "Урал"'
              info={{
                address: 'Челябинский тракт, 25 км',
                capacity: 'до 300 гостей',
                price: 'Аренда: от 70 000₽/день',
                phone: '+7 (351) 345-67-89'
              }}
              features={[
                'Большая открытая площадка 15×12 метров',
                'Безопасное бетонное покрытие',
                'Профессиональный свет и звук',
                'Удобный подъезд для оборудования'
              ]}
              experience="Премиальная площадка для масштабных корпоративов и свадеб. Большая территория даёт развернуться на полную. Живописный вид на лес создаёт особую атмосферу."
            />

            <VenueCard
              number={4}
              title='База отдыха "Зюраткуль"'
              info={{
                address: 'Саткинский р-н, оз. Зюраткуль',
                capacity: 'до 100 гостей',
                price: 'Аренда: от 35 000₽/день',
                phone: '+7 (351) 456-78-90'
              }}
              features={[
                'Открытая площадка у озера',
                'Невероятные виды на горы',
                'Безопасное удаление от деревьев',
                'Романтическая атмосфера'
              ]}
              experience="Магическое место для свадеб на природе. Огненное шоу на фоне гор и озера — это что-то невероятное! Важно: выезд платный (+3500₽ от Челябинска)."
            />

            <VenueCard
              number={5}
              title='Ресторан "Палермо"'
              info={{
                address: 'ул. Свободы, 166',
                capacity: 'до 200 гостей',
                price: 'Банкет: от 3000₽/чел',
                phone: '+7 (351) 567-89-01'
              }}
              features={[
                'Открытая летняя площадка',
                'Просторная терраса 8×10 метров',
                'Итальянская атмосфера',
                'Огонь создаёт эффектные фото'
              ]}
              experience="Уютная площадка с открытой террасой для камерных мероприятий. Средиземноморский стиль интерьера создаёт особую атмосферу. Выступаем здесь только на открытой площадке!"
            />

            <VenueComparisonTable />

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

            <AdditionalConsiderations />

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
