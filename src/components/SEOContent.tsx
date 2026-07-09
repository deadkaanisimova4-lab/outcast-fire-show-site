import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SEOContent = () => {
  return (
    <section id="about-company" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-black/40 border-fire-500/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-center bg-gradient-to-r from-fire-400 via-fire-500 to-fire-600 bg-clip-text text-transparent">
              Профессиональное огненное шоу в Челябинске от OUTCAST Fire Show
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              <strong className="text-fire-400">Огненное шоу в Челябинске</strong> — уникальное зрелище, которое превратит ваш праздник в незабываемое событие. 
              Коллектив OUTCAST Fire Show уже более 7 лет создаёт яркие огненные представления. 
              За это время мы провели более 500 успешных выступлений по всей Челябинской области.
            </p>

            <p>
              Ищете <strong className="text-fire-400">артистов на праздник</strong>, которые точно удивят гостей? Наша шоу-программа с огнём — 
              одно из самых эффектных решений для любого торжества. Мы выступаем на свадьбах, корпоративах, юбилеях, 
              днях рождения и городских праздниках — подбираем номер под формат и настроение вашего мероприятия.
            </p>

            <p>
              Наша команда состоит из опытных артистов с профессиональной подготовкой по работе с огнём и пиротехникой. 
              Мы используем только сертифицированное оборудование и соблюдаем все нормы пожарной безопасности. 
              За 7+ лет работы — ни одного инцидента.
            </p>

            <h3 className="text-2xl font-bold text-fire-400 mt-8">Программы на любой бюджет</h3>
            <p>
              Цены на <strong className="text-fire-400">огненное шоу в Челябинске</strong> начинаются от 18 000 рублей за постановку «MYSTIC». 
              Для максимального эффекта — грандиозная постановка «SORRY MAX» от 45 000 рублей. 
              В стоимость входит: работа артистов и техника, реквизит, акустика, трансфер по Челябинску.
            </p>

            <h3 className="text-2xl font-bold text-fire-400 mt-8">Как заказать</h3>
            <p>
              Позвоните по телефону 
              <a href="tel:+79085740813" className="text-fire-400 hover:text-fire-300 ml-1 underline">+7 (908) 574-08-13</a> или 
              оставьте заявку на сайте. Обсудим детали, подберём программу и рассчитаем стоимость. Работаем быстро и всегда вовремя!
            </p>

            <div className="bg-fire-500/10 border border-fire-500/30 rounded-lg p-6 mt-8">
              <p className="text-xl font-semibold text-fire-400 text-center">
                OUTCAST Fire Show — делаем ваши праздники ярче! 🔥
              </p>
              <p className="text-center mt-3 text-gray-400">
                7+ лет опыта • 500+ успешных выступлений • Работаем по всей Челябинской области
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SEOContent;