const BlogArticle3Hero = () => {
  return (
    <>
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
      </div>
    </>
  );
};

export default BlogArticle3Hero;
