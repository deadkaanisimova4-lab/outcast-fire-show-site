const VenueComparisonTable = () => {
  return (
    <>
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
    </>
  );
};

export default VenueComparisonTable;
