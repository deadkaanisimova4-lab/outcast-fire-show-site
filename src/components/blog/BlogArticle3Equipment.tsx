import Icon from '@/components/ui/icon';

const BlogArticle3Equipment = () => {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
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
      </div>
    </div>
  );
};

export default BlogArticle3Equipment;
