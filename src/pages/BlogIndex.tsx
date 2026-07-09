import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BlogMeta from '@/components/BlogMeta';

const BlogIndex = () => {
  return (
    <>
      <BlogMeta
        title="Блог OUTCAST Fire Show — Статьи об огненном шоу в Челябинске"
        description="Полезные статьи о файер-шоу: как выбрать программу, лучшие площадки Челябинска, виды и стили огненного шоу. Экспертные советы от OUTCAST Fire Show."
        keywords="блог огненное шоу, файер-шоу статьи, огненное шоу челябинск, как заказать файер-шоу, outcast fire show"
        url="https://xn----74-k4dma6dbagfc4ewd.xn--p1ai/blog"
      />
      <BlogContent />
    </>
  );
};

const BlogContent = () => {
  const articles = [
    {
      id: 'kak-vybrat-ognennoe-shou-dlya-svadby',
      title: 'Как выбрать огненное шоу для свадьбы',
      description: 'Полный гид по выбору идеального файер-шоу для вашего торжества. Что учесть, какую программу выбрать и как не переплатить.',
      image: 'https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg',
      date: '25 ноября 2024',
      readTime: '7 минут'
    },
    {
      id: 'top-5-ploshchadok-v-chelyabinske-dlya-faier-shou',
      title: 'Топ-5 площадок в Челябинске для файер-шоу',
      description: 'Лучшие локации для огненного шоу в Челябинске: рестораны, загородные комплексы и открытые площадки. С ценами и контактами.',
      image: 'https://cdn.poehali.dev/files/f96a2f13-fff3-4d64-8cb3-5ad8fd87d693.jpg',
      date: '25 ноября 2024',
      readTime: '6 минут'
    },
    {
      id: 'chto-takoe-faier-shou-vidy-i-stili',
      title: 'Что такое файер-шоу: виды и стили',
      description: 'Всё, что нужно знать о файер-шоу: история, виды реквизита, стили выступлений и современные тренды в огненных постановках.',
      image: 'https://cdn.poehali.dev/files/f3175266-0801-4d7b-9dd0-690e757ef3ad.jpg',
      date: '25 ноября 2024',
      readTime: '8 минут'
    },
    {
      id: 'ognennoe-shou-na-korporativ',
      title: 'Огненное шоу на корпоратив: как удивить коллег',
      description: 'Как организовать файер-шоу на корпоративе: форматы, тайминг, площадки, бюджет и 5 частых ошибок при заказе.',
      image: 'https://cdn.poehali.dev/files/d524fd97-2aa3-484d-ae46-9fa3748e5790.jpg',
      date: '15 февраля 2026',
      readTime: '8 минут'
    },
    {
      id: 'bezopasnost-ognennogo-shou',
      title: 'Безопасность огненного шоу: как мы защищаем зрителей',
      description: 'Всё о безопасности файер-шоу: подготовка артистов, сертифицированный реквизит, чек-лист площадки и как отличить профессионалов.',
      image: 'https://cdn.poehali.dev/files/282a58c5-553c-4af6-b6e2-c9bf922c59c0.jpg',
      date: '10 февраля 2026',
      readTime: '6 минут'
    },
    {
      id: 'ognennoe-shou-na-den-rozhdeniya',
      title: 'Огненное шоу на день рождения: как удивить именинника',
      description: 'Файер-шоу на день рождения и юбилей: идеи для сюрприза, форматы для любого возраста, цены и реальные истории.',
      image: 'https://cdn.poehali.dev/files/5e28f939-32a0-48c9-bc22-4e027c463c35.jpg',
      date: '18 февраля 2026',
      readTime: '7 минут'
    },
    {
      id: 'ognennoe-shou-na-novyj-god',
      title: 'Огненное шоу на свадьбу весной: как заказать в пиковый сезон',
      description: 'Май, июнь, июль — пик свадебного сезона. Почему бронировать огненное шоу нужно заранее, какую программу выбрать и как не остаться без артистов.',
      image: 'https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg',
      date: '23 апреля 2026',
      readTime: '6 минут'
    },
    {
      id: 'ognennoe-shou-na-novyj-god-tseny',
      title: 'Огненное шоу на Новый год: что важно знать о ценах',
      description: 'Новогодний период — особое время. Цены выше, даты расхватывают быстро. Рассказываем честно: почему так, сколько стоит и когда лучше бронировать.',
      image: 'https://cdn.poehali.dev/projects/72a14de5-7353-4caf-b47a-98d3caa2c09a/files/a8774fc3-2863-4ed4-be83-e56994b2ada4.jpg',
      date: '2 мая 2026',
      readTime: '7 минут'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            <Icon name="Flame" size={32} />
            <span>OUTCAST Fire Show</span>
          </Link>
          
          <Link to="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
              <Icon name="Home" size={18} className="mr-2" />
              На главную
            </Button>
          </Link>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-yellow-500 to-orange-600 text-transparent bg-clip-text">
              Блог об огненном шоу
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Полезные статьи о файер-шоу: как выбрать программу, где провести выступление и что нужно знать организаторам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article) => (
              <Link 
                key={article.id} 
                to={`/blog/${article.id}`}
                className="group"
              >
                <Card className="h-full bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 overflow-hidden group-hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {article.description}
                    </CardDescription>
                    
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-primary hover:text-primary hover:bg-primary/10 p-0"
                    >
                      Читать полностью
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-black/50 border-t border-gray-800 py-8">
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

export default BlogIndex;