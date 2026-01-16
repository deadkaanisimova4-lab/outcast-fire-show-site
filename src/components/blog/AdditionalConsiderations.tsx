import Icon from '@/components/ui/icon';

const AdditionalConsiderations = () => {
  return (
    <>
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
    </>
  );
};

export default AdditionalConsiderations;
