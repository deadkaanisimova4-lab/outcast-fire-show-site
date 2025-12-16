import Icon from '@/components/ui/icon';

const BlogArticle3Styles = () => {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Основные стили файер-шоу</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Каждый стиль имеет свою философию, музыку и визуальный язык:
      </p>

      <div className="space-y-6 mb-12">
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-primary/40 rounded-lg p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary/30 rounded-lg p-3">
              <Icon name="Flame" size={40} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Классический стиль</h3>
              <p className="text-gray-400 text-sm">Традиционное файер-шоу с акцентом на технику</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <strong className="text-primary">Характеристики:</strong>
              <p className="text-gray-300 mt-2">
                Чёткие фигуры, симметрия, правильные траектории. Музыка — от этники до классики.
              </p>
            </div>
            <div>
              <strong className="text-primary">Костюмы:</strong>
              <p className="text-gray-300 mt-2">
                Нейтральные чёрные или белые наряды, позволяющие огню быть главным элементом.
              </p>
            </div>
            <div>
              <strong className="text-primary">Подходит для:</strong>
              <p className="text-gray-300 mt-2">
                Официальные мероприятия, свадьбы, корпоративы
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-primary/40 rounded-lg p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary/30 rounded-lg p-3">
              <Icon name="Sparkles" size={40} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Театральный стиль</h3>
              <p className="text-gray-400 text-sm">Огненное шоу как спектакль с сюжетом</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <strong className="text-primary">Характеристики:</strong>
              <p className="text-gray-300 mt-2">
                Есть история, роли, драматургия. Огонь как элемент повествования.
              </p>
            </div>
            <div>
              <strong className="text-primary">Костюмы:</strong>
              <p className="text-gray-300 mt-2">
                Детальные образы под тему: воины, шаманы, мистические существа, стимпанк.
              </p>
            </div>
            <div>
              <strong className="text-primary">Подходит для:</strong>
              <p className="text-gray-300 mt-2">
                Городские праздники, фестивали, тематические вечеринки
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-primary/40 rounded-lg p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary/30 rounded-lg p-3">
              <Icon name="Zap" size={40} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Экстрим-стиль</h3>
              <p className="text-gray-400 text-sm">Акробатика, трюки и адреналин</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <strong className="text-primary">Характеристики:</strong>
              <p className="text-gray-300 mt-2">
                Сложные трюки, огнеглотание, файер-дыхание, горящие прыжки через препятствия.
              </p>
            </div>
            <div>
              <strong className="text-primary">Музыка:</strong>
              <p className="text-gray-300 mt-2">
                Драм-н-бейс, дабстеп, хард-рок — всё, что создаёт напряжение.
              </p>
            </div>
            <div>
              <strong className="text-primary">Подходит для:</strong>
              <p className="text-gray-300 mt-2">
                Экстремальные мероприятия, спортивные праздники, молодёжные события
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-primary/40 rounded-lg p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary/30 rounded-lg p-3">
              <Icon name="Music" size={40} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Танцевальный стиль</h3>
              <p className="text-gray-400 text-sm">Хореография и пластика</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <strong className="text-primary">Характеристики:</strong>
              <p className="text-gray-300 mt-2">
                Плавные движения, синхронность, акцент на хореографию. Огонь — продолжение тела.
              </p>
            </div>
            <div>
              <strong className="text-primary">Направления:</strong>
              <p className="text-gray-300 mt-2">
                Контемпорари, модерн, восточные танцы (belly dance с огнём).
              </p>
            </div>
            <div>
              <strong className="text-primary">Подходит для:</strong>
              <p className="text-gray-300 mt-2">
                Концерты, шоу-программы, торжества с акцентом на эстетику
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle3Styles;
