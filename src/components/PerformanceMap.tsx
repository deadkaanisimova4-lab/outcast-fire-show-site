import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PerformanceMap = () => {
  const cities = [
    // Челябинская область
    { name: 'Челябинск', performances: 180, region: 'Челябинская область' },
    { name: 'Магнитогорск', performances: 45, region: 'Челябинская область' },
    { name: 'Миасс', performances: 38, region: 'Челябинская область' },
    { name: 'Златоуст', performances: 32, region: 'Челябинская область' },
    { name: 'Копейск', performances: 28, region: 'Челябинская область' },
    { name: 'Озёрск', performances: 22, region: 'Челябинская область' },
    { name: 'Троицк', performances: 18, region: 'Челябинская область' },
    { name: 'Снежинск', performances: 16, region: 'Челябинская область' },
    { name: 'Сатка', performances: 14, region: 'Челябинская область' },
    { name: 'Коркино', performances: 12, region: 'Челябинская область' },
    { name: 'Южноуральск', performances: 11, region: 'Челябинская область' },
    { name: 'Верхний Уфалей', performances: 9, region: 'Челябинская область' },
    { name: 'Трёхгорный', performances: 8, region: 'Челябинская область' },
    { name: 'Еманжелинск', performances: 7, region: 'Челябинская область' },
    { name: 'Чебаркуль', performances: 7, region: 'Челябинская область' },
    { name: 'Кыштым', performances: 6, region: 'Челябинская область' },
    { name: 'Касли', performances: 5, region: 'Челябинская область' },
    { name: 'Усть-Катав', performances: 5, region: 'Челябинская область' },
    { name: 'Аша', performances: 4, region: 'Челябинская область' },
    { name: 'Карабаш', performances: 3, region: 'Челябинская область' },
    // Башкирия
    { name: 'Уфа', performances: 25, region: 'Башкортостан' },
    { name: 'Стерлитамак', performances: 12, region: 'Башкортостан' },
    { name: 'Салават', performances: 10, region: 'Башкортостан' },
    { name: 'Нефтекамск', performances: 8, region: 'Башкортостан' },
    { name: 'Октябрьский', performances: 7, region: 'Башкортостан' },
    { name: 'Белорецк', performances: 6, region: 'Башкортостан' },
    { name: 'Туймазы', performances: 5, region: 'Башкортостан' },
    { name: 'Ишимбай', performances: 5, region: 'Башкортостан' },
    { name: 'Мелеуз', performances: 4, region: 'Башкортостан' },
    { name: 'Сибай', performances: 3, region: 'Башкортостан' },
  ];

  const chelyabinskCities = cities.filter(c => c.region === 'Челябинская область');
  const bashkiriaCities = cities.filter(c => c.region === 'Башкортостан');

  return (
    <section id="geography" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 fire-glow">
            География наших выступлений
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 500 огненных шоу в Челябинской области и Башкортостане. Мы работаем в вашем городе!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Челябинская область */}
          <Card className="bg-black/40 border-fire-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-fire-400 to-fire-600 bg-clip-text text-transparent flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-fire-400" />
                Челябинская область
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
                {chelyabinskCities.map((city, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-3 bg-fire-500/5 rounded-lg border border-fire-500/10 hover:border-fire-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-fire-400/20 to-fire-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="Flame" size={20} className="text-fire-400" />
                      </div>
                      <span className="text-gray-200 font-medium">{city.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-fire-400 text-sm">
                      <Icon name="Star" size={16} />
                      <span>{city.performances} шоу</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Башкортостан */}
          <Card className="bg-black/40 border-fire-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-fire-400 to-fire-600 bg-clip-text text-transparent flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-fire-400" />
                Башкортостан
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
                {bashkiriaCities.map((city, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-3 bg-fire-500/5 rounded-lg border border-fire-500/10 hover:border-fire-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-fire-400/20 to-fire-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="Flame" size={20} className="text-fire-400" />
                      </div>
                      <span className="text-gray-200 font-medium">{city.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-fire-400 text-sm">
                      <Icon name="Star" size={16} />
                      <span>{city.performances} шоу</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-fire-500/10 to-fire-600/10 border-fire-500/20">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-black text-fire-400 mb-2">30+</div>
              <div className="text-sm text-gray-300">Городов</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-fire-500/10 to-fire-600/10 border-fire-500/20">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-black text-fire-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Выступлений</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-fire-500/10 to-fire-600/10 border-fire-500/20">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-black text-fire-400 mb-2">2</div>
              <div className="text-sm text-gray-300">Региона</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-fire-500/10 to-fire-600/10 border-fire-500/20">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-black text-fire-400 mb-2">7+</div>
              <div className="text-sm text-gray-300">Лет опыта</div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-fire-500/20 to-fire-600/20 border-fire-500/30 inline-block">
            <CardContent className="p-6">
              <p className="text-xl font-semibold text-gray-200 mb-3">
                Нет вашего города в списке?
              </p>
              <p className="text-gray-400 mb-4">
                Мы готовы выехать в любой населённый пункт! Просто свяжитесь с нами.
              </p>
              <a 
                href="tel:+79085740813"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-fire-500 to-fire-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all"
              >
                <Icon name="Phone" size={20} />
                <span>+7 (908) 574-08-13</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMap;
