import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const BlogArticle3Conclusion = () => {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Заключение</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Файер-шоу — это не просто зрелище, это древнее искусство, превратившееся в современную форму выражения. Каждый вид реквизита открывает новые возможности для творчества, а стили позволяют артистам создавать уникальные представления под любую аудиторию и мероприятие.
      </p>

      <p className="text-gray-300 leading-relaxed mb-6">
        Выбирая файер-шоу для своего праздника, обращайте внимание не только на технику артистов, но и на их способность создать атмосферу, рассказать историю и погрузить зрителей в мир огня и магии. Профессиональное файер-шоу — это гармония технического мастерства, артистизма и безопасности.
      </p>

      <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 rounded-lg p-8 mt-12 mb-8">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">Хотите увидеть всё это вживую?</h3>
        <p className="text-gray-300 text-center mb-6">
          OUTCAST Fire Show предлагает профессиональные огненные постановки в разных стилях и с любым реквизитом. Более 7 лет опыта и 500+ успешных выступлений.
        </p>
        <div className="flex justify-center">
          <Link to="/">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Icon name="Flame" size={20} className="mr-2" />
              Заказать файер-шоу
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-6">Читайте также</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/blog/kak-vybrat-ognennoe-shou-dlya-svadby" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
            <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Как выбрать огненное шоу для свадьбы</h3>
            <p className="text-gray-400 text-sm">Полный гид по выбору программы для свадьбы</p>
          </Link>
          <Link to="/blog/bezopasnost-ognennogo-shou" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
            <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Безопасность огненного шоу</h3>
            <p className="text-gray-400 text-sm">Как профессионалы защищают зрителей на каждом выступлении</p>
          </Link>
          <Link to="/blog/ognennoe-shou-na-korporativ" className="bg-gray-900/60 border border-gray-700 hover:border-primary/50 rounded-lg p-5 transition-all group">
            <h3 className="text-primary font-semibold mb-2 group-hover:text-primary/80">Огненное шоу на корпоратив</h3>
            <p className="text-gray-400 text-sm">Форматы, тайминг и типичные ошибки при заказе</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle3Conclusion;