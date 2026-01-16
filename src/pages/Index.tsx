import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import SEOContent from '@/components/SEOContent';
import ContactFormWidget from '@/components/ContactFormWidget';

import PerformanceMap from '@/components/PerformanceMap';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    programType: 'mystic',
    duration: '6',
    artists: '2',
    distance: '0'
  });
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('https://cdn.pixabay.com/audio/2022/03/10/audio_4a465392de.mp3');
    audio.loop = true;
    audio.volume = 0.12;
    setAudioElement(audio);

    const playSound = () => {
      audio.play().catch(() => {});
      setIsSoundPlaying(true);
      document.removeEventListener('click', playSound);
      document.removeEventListener('touchstart', playSound);
    };

    document.addEventListener('click', playSound);
    document.addEventListener('touchstart', playSound);

    return () => {
      audio.pause();
      audio.src = '';
      document.removeEventListener('click', playSound);
      document.removeEventListener('touchstart', playSound);
    };
  }, []);

  const toggleSound = () => {
    if (audioElement) {
      if (isSoundPlaying) {
        audioElement.pause();
        setIsSoundPlaying(false);
      } else {
        audioElement.play().catch(() => {});
        setIsSoundPlaying(true);
      }
    }
  };

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'fire-particle';
      const left = Math.random() * 100;
      const duration = 3 + Math.random() * 4;
      const xOffset = (Math.random() - 0.5) * 100;
      const size = 2 + Math.random() * 4;
      
      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.setProperty('--x-offset', `${xOffset}px`);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      const container = document.getElementById('particles-container');
      if (container) {
        container.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
      }
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const calculatePrice = () => {
    const basePrice = calculatorData.programType === 'mystic' ? 18000 : 
                      calculatorData.programType === 'trailer' ? 30000 : 32000;
    const durationMultiplier = parseInt(calculatorData.duration) / 6;
    const artistsBonus = (parseInt(calculatorData.artists) - 2) * 5000;
    const distanceBonus = parseInt(calculatorData.distance) * 35;
    
    const total = Math.max(basePrice * durationMultiplier + artistsBonus + distanceBonus, basePrice);
    return Math.round(total);
  };

  const programs = [
    {
      title: "Постановка «MYSTIC»",
      description: "Парное выступление, наполненное огнём, искрами и драйвом современной музыки",
      duration: "6 минут",
      price: "от 18 000 ₽",
      videoUrl: "https://vk.com/wall-203229964_921",
      features: [
        "2 артиста",
        "3 вида огненного реквизита",
        "3 вида пиротехнического реквизита",
        "Огненные чаши и сценический свет",
        "Акустическая система 500Вт",
        "Подготовка и демонтаж площадки",
        "Работа техника на площадке",
        "Трансфер артистов (г. Челябинск)"
      ],
      suitable: "Подходит для детских и корпоративных праздников, юбилеев, дней рождения, свадеб"
    },
    {
      title: "Постановка «TRAILER»",
      description: "Максимально современный, энергичный номер. Это взрыв спецэффектов в танце с огнем и пиротехникой. Современная хореография, популярная музыка - этот номер сформирован так, чтобы зритель получил WOW эффект",
      duration: "10 минут",
      price: "от 30 000 ₽",
      videoUrl: "https://vk.com/wall-203229964_930",
      features: [
        "4 артиста на площадке",
        "5 видов огненного реквизита",
        "4 вида пиротехнического реквизита",
        "Сценический свет и огненные чаши",
        "Акустическая система 500Вт",
        "Подготовка и демонтаж площадки",
        "Работа техника на площадке",
        "Трансфер артистов (г. Челябинск)"
      ],
      suitable: "Отлично смотрится на свадьбе, корпоративе, выпускном, юбилее, вечеринке любого уровня"
    },
    {
      title: "Постановка «SHAMANISM» 🔥✨",
      description: "Непередаваемая дикая энергия степей и огненных 'шаманов' прямиком с Урала. ЗДЕСЬ БУШУЕТ ОГОНЬ И ИСКРЫ",
      duration: "10 минут",
      price: "от 32 000 ₽",
      videoUrl: "https://vk.com/wall-203229964_893",
      features: [
        "7 видов огненного реквизита",
        "4 вида пиротехнического реквизита",
        "Эффектная фоновая пиротехника",
        "Эксклюзивный реквизит (единственный в Челябинской области)",
        "Огненные чаши и сценический свет",
        "Акустическая система 500Вт",
        "🎁 Церемония зажжения сердца в подарок",
        "🎁 2 фонтана в подарок"
      ],
      suitable: "Идеально для тех, кто хочет удивить гостей необычным и мощным огненным шоу"
    },
    {
      title: "Постановка «SORRY MAX»",
      description: "Грандиозное огненное представление с максимальным количеством реквизита и спецэффектов",
      duration: "15 минут",
      price: "от 45 000 ₽",
      videoUrl: "https://vk.com/wall-203229964_836",
      features: [
        "8 видов огненного реквизита",
        "6 видов пиротехнического реквизита",
        "Уйма фоновой пиротехники",
        "Эксклюзивный реквизит (единственный в Челябинской области)",
        "Сценический свет и огненные чаши",
        "Акустическая система 500Вт",
        "🎁 Церемония зажжения сердца в подарок"
      ],
      suitable: "Отлично смотрится на свадьбе, корпоративе, выпускном, юбилее, вечеринке любого уровня"
    }
  ];

  const installations = [
    {
      title: "Церемония зажжения огненного сердца",
      description: "Пылающее пламенем сердце, зажжённое от рук молодожёнов, столб холодных искр вырывающийся вверх - эта настоящая феерия не оставит никого равнодушным",
      duration: "4-7 минут",
      price: "от 7 000 ₽",
      features: [
        "Дорожка из огненных чаш",
        "Собственная акустическая система",
        "Музыкальное сопровождение на ваш выбор",
        "2 холодных фонтана (4 метра в высоту, 45 секунд работы)",
        "Огненное сердце и булавы",
        "Работа пиротехника на площадке",
        "Трансфер по городу Челябинск",
        "Дополнительные фонтаны от 1 700 ₽/шт"
      ],
      suitable: "Романтическая церемония идеально подходит для свадеб и торжественных мероприятий"
    },
    {
      title: "Пиротехнические мельницы",
      description: "Яркое завершение, миллионы искр и вы в центре всей этой красоты",
      duration: "По запросу",
      price: "Уточняйте в личных сообщениях",
      features: [
        "3 луча - компактный вариант",
        "6 лучей - стандартное оформление",
        "12 лучей - грандиозное завершение",
        "Безопасные холодные искры",
        "Эффектное завершение мероприятия",
        "Работа пиротехника на площадке"
      ],
      suitable: "Идеально для завершения свадеб, юбилеев и торжественных мероприятий"
    },
    {
      title: "Пиротехнические огнепады",
      description: "Стена из струй холодного огня и искр, напоминающий огненный дождь или водопад",
      duration: "По запросу",
      price: "от 10 000 ₽",
      videoUrl: "https://vk.com/wall-203229964_900",
      features: [
        "Эффект огненного дождя",
        "Безопасные холодные искры",
        "Впечатляющая визуальная стена",
        "Работа пиротехника на площадке",
        "Оформление площадки"
      ],
      suitable: "Создаёт невероятную атмосферу на любом празднике"
    },
    {
      title: "Огненные символы",
      description: "Огненный реквизит с индивидуальными символами, словами и инициалами",
      duration: "По запросу",
      price: "от 2 000 ₽",
      videoUrls: [
        { url: "https://vk.com/video-203229964_456239509", label: "ВЫХОДИ ЗА МЕНЯ" },
        { url: "https://vk.com/wall-203229964_649", label: "LOVE" },
        { url: "https://vk.com/wall-203229964_91", label: "Инициалы имени" }
      ],
      features: [
        "Индивидуальные огненные символы",
        "Огненные чаши для оформления площадки",
        "Собственная акустическая система",
        "Музыкальное сопровождение",
        "Работа пиротехника на площадке"
      ],
      suitable: "Идеально для предложений руки и сердца, признаний в любви, юбилеев"
    },
    {
      title: "Гендер-пати 🎀💙",
      description: "Яркое огненно-пиротехническое шоу для раскрытия пола будущего малыша",
      duration: "По запросу",
      price: "от 15 000 ₽",
      videoUrl: "https://vk.com/wall-203229964_900",
      features: [
        "Цветной дым (розовый или синий)",
        "Огненные символы Д и М (загорится нужный)",
        "Веерный дневной отстрел (розовый или синий)",
        "Музыкальное сопровождение",
        "Работа пиротехника",
        "Огнетушитель (розовый или синий)"
      ],
      suitable: "Незабываемое раскрытие пола ребенка для будущих родителей и их близких"
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/files/d524fd97-2aa3-484d-ae46-9fa3748e5790.jpg",
      title: "Церемония зажжения огненного сердца"
    },
    {
      url: "https://cdn.poehali.dev/files/10e15dc7-2136-468b-a52f-6e4c74eda592.jpg",
      title: "Огненное выступление артистов"
    },
    {
      url: "https://cdn.poehali.dev/files/b2bf0036-be42-46c9-97af-f15b12d8cbd3.jpg",
      title: "Постановка с пиротехникой"
    },
    {
      url: "https://i.mycdn.me/getVideoPreview?id=7990578514497&idx=7&type=39&tkn=eWOulkag1uksE0oqIkUN-QKtPj0&fn=vid_x",
      title: "Огнепады - золотые каскады искр",
      videoUrl: "https://vk.com/wall-203229964_900"
    },
    {
      url: "https://cdn.poehali.dev/files/656fa87f-60dd-485f-9d4e-8c2bc97e6455.jpg",
      title: "Огненные фонтаны и спецэффекты"
    },
    {
      url: "https://cdn.poehali.dev/files/f3175266-0801-4d7b-9dd0-690e757ef3ad.jpg",
      title: "Шоу с цветными дымами"
    },
    {
      url: "https://cdn.poehali.dev/files/fa23ea1f-f8fe-44fa-8d12-2be4b02d84d4.jpg",
      title: "Динамичное огненное выступление"
    },
    {
      url: "https://cdn.poehali.dev/files/f96a2f13-fff3-4d64-8cb3-5ad8fd87d693.jpg",
      title: "Огненная постановка с цветными эффектами"
    },
    {
      url: "https://cdn.poehali.dev/files/eea5efad-8935-495e-b7c3-72a69ac50926.jpg",
      title: "Дуэт с пиротехникой и искрами"
    },
    {
      url: "https://cdn.poehali.dev/files/282a58c5-553c-4af6-b6e2-c9bf922c59c0.jpg",
      title: "Грандиозное огненное шоу"
    },
    {
      url: "https://cdn.poehali.dev/files/5e28f939-32a0-48c9-bc22-4e027c463c35.jpg",
      title: "Искры и фейерверки в постановке"
    }
  ];

  const testimonials = [
    {
      name: "Юлия Цветкова",
      event: "Праздник",
      rating: 5,
      text: "Вы - одно из лучших шоу в нашем городе! Молодцы! Приехали вовремя, провели шоу мастерски, гостям всем понравилось. Горящие символы, фонтаны, салют - всё было классно! Успехов вам и дальнейшего процветания! ❤️",
      photo: "https://cdn.poehali.dev/files/d524fd97-2aa3-484d-ae46-9fa3748e5790.jpg"
    },
    {
      name: "Аня Ваганова",
      event: "Мероприятие",
      rating: 5,
      text: "Здравствуйте, спасибо вам! Всем очень понравилось 💗💗💗",
      photo: "https://cdn.poehali.dev/files/282a58c5-553c-4af6-b6e2-c9bf922c59c0.jpg"
    },
    {
      name: "Валентина Кашутина",
      event: "Праздник",
      rating: 5,
      text: "Девочки, вы просто волшебницы! Были случайными зрителями вашего шоу, мы такого вообще никогда не видели, мурашило от начала и до конца. Очень грамотно построено выступление, эмоции по нарастающей. И огромное спасибо за фото с сыном, ребёнок в восторге! 😍😍😍",
      photo: "https://cdn.poehali.dev/files/IMG_3169.png"
    },
    {
      name: "Ira Gileva",
      event: "Праздник",
      rating: 5,
      text: "Спасибо большое, что даже такую небольшую площадку смогли украсить яркими эмоциями 🔥 Из-за запрета на фейерверки было принято решение найти альтернативу. Места было не много, поэтому нам помогли подобрать оптимальный вариант! Все прошло красиво, качественно и профессионально! ✨✨✨🤍✨✨✨",
      photo: "https://cdn.poehali.dev/files/IMG_3169.png"
    },
    {
      name: "Мазда",
      event: "Огненное шоу / Огненные сердца / Артисты",
      rating: 5,
      text: "Ну что правдивый отзыв, эти девушки настолько прекрасно выступили что еще годами мбудем вспоминать, их место где то на телевизоре, но они решили радовать нас за очень маленькое вознаграждение по сравнению с их стараниями. Какие эмоции они принесли нам и гостям все были просто в шоке, красивые очень и улыбка с их лица не сходила, они кайфуют от того что делают, такого что они делают не видел не где, это просто заглядение + сделали подарок. Спасибо вам большое 27.07.2024 🔥",
      photo: "https://cdn.poehali.dev/files/5e28f939-32a0-48c9-bc22-4e027c463c35.jpg"
    }
  ];

  const stats = [
    { value: "500+", label: "Выступлений" },
    { value: "7+", label: "Лет опыта" },
    { value: "100%", label: "Довольных клиентов" },
    { value: "24/7", label: "Поддержка" }
  ];

  const faq = [
    {
      question: "Насколько безопасно огненное шоу?",
      answer: "Безопасность — наш главный приоритет. Все артисты имеют многолетний опыт работы с огнём, используется профессиональное оборудование. На площадке всегда присутствует техник безопасности с огнетушителем. Мы соблюдаем все требования пожарной безопасности и имеем необходимые документы."
    },
    {
      question: "Можно ли проводить шоу в плохую погоду?",
      answer: "Мы можем выступать при небольшом дожде, но сильный ветер (более 10 м/с) или ливень могут стать препятствием по соображениям безопасности. В таких случаях мы предложим перенос выступления на другую дату."
    },
    {
      question: "Какие требования к площадке для выступления?",
      answer: "Для огненного шоу нужна открытая площадка размером минимум 4×4 метра, свободная от легковоспламеняющихся материалов. Зрители должны находиться на расстоянии не менее 3 метров от зоны выступления. Мы выступаем только на открытом воздухе."
    },
    {
      question: "Как происходит оплата?",
      answer: "Для бронирования даты требуется предоплата 50%. Оставшаяся сумма оплачивается в день выступления наличными или по безналичному расчёту. Мы предоставляем все необходимые документы для юридических лиц."
    },
    {
      question: "За сколько нужно бронировать выступление?",
      answer: "Рекомендуем бронировать за 2-4 недели, особенно в сезон (май-сентябрь). В некоторых случаях можем организовать выступление за 3-5 дней. Свяжитесь с нами, и мы проверим доступность на нужную дату."
    },
    {
      question: "Можно ли добавить индивидуальные элементы в шоу?",
      answer: "Конечно! Мы можем адаптировать программу под ваши пожелания: добавить определённую музыку, создать тематическое выступление, включить огненные надписи или логотипы. Обсудим детали при заказе."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black border-b border-primary/20 p-2">
        <div className="flex items-center justify-center gap-2">
          <a href="tel:+79518152553" className="flex-1 flex items-center justify-center gap-2 bg-primary/20 hover:bg-primary/30 py-2 px-3 rounded-lg transition-colors">
            <Icon name="Phone" size={16} className="text-primary" />
            <span className="text-sm font-semibold">Позвонить</span>
          </a>
          <a href="https://wa.me/79085740813" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 py-2 px-3 rounded-lg transition-colors">
            <Icon name="MessageCircle" size={16} className="text-[#25D366]" />
            <span className="text-sm font-semibold">WhatsApp</span>
          </a>
          <a href="https://vk.com/im?entrypoint=community_page&media=&sel=-203229964" className="flex-1 flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 py-2 px-3 rounded-lg transition-colors">
            <Icon name="Send" size={16} className="text-blue-400" />
            <span className="text-sm font-semibold">VK</span>
          </a>
        </div>
      </div>

      <nav className="fixed top-0 md:top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-primary/20 mt-12 md:mt-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/6542e7b2-83ab-46b5-8dee-6d7f743b92c4.jpg" 
                alt="OUTCAST Fire Show - профессиональное огненное шоу в Челябинске" 
                className="h-12 w-auto object-contain logo-animate cursor-pointer"
                onClick={() => scrollToSection('home')}
              />
              <Button onClick={() => window.open('https://vk.com/im?entrypoint=community_page&media=&sel=-203229964', '_blank')} className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Заказать шоу
              </Button>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('programs')} className="hover:text-primary transition-colors">Программы</button>
              <button onClick={() => scrollToSection('installations')} className="hover:text-primary transition-colors">Инсталляции</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button>
              <a href="/blog" className="hover:text-primary transition-colors">Блог</a>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2">
                <a 
                  href="https://vk.com/im?entrypoint=community_page&media=&sel=-203229964" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-blue-600/20 rounded-lg transition-colors group"
                  aria-label="VK"
                >
                  <Icon name="Send" size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://t.me/+79518152553" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-sky-600/20 rounded-lg transition-colors group"
                  aria-label="Telegram"
                >
                  <Icon name="Send" size={20} className="text-sky-400 group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-primary/20 rounded-lg transition-colors"
                aria-label="Меню"
              >
                {isMobileMenuOpen ? (
                  <Icon name="X" size={24} className="text-primary" />
                ) : (
                  <Icon name="Menu" size={24} className="text-primary" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
              <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 w-full text-left py-3 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                <Icon name="Home" size={18} className="text-primary" />
                <span>Главная</span>
              </button>
              <button onClick={() => scrollToSection('programs')} className="flex items-center gap-3 w-full text-left py-3 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                <Icon name="Flame" size={18} className="text-primary" />
                <span>Программы</span>
              </button>
              <button onClick={() => scrollToSection('installations')} className="flex items-center gap-3 w-full text-left py-3 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                <Icon name="Sparkles" size={18} className="text-primary" />
                <span>Инсталляции</span>
              </button>
              <button onClick={() => scrollToSection('gallery')} className="flex items-center gap-3 w-full text-left py-3 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                <Icon name="Image" size={18} className="text-primary" />
                <span>Галерея</span>
              </button>
              <button onClick={() => scrollToSection('prices')} className="flex items-center gap-3 w-full text-left py-3 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                <Icon name="DollarSign" size={18} className="text-primary" />
                <span>Цены</span>
              </button>
              <button onClick={() => scrollToSection('contacts')} className="flex items-center gap-3 w-full text-left py-3 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                <Icon name="Mail" size={18} className="text-primary" />
                <span>Контакты</span>
              </button>
              <Button 
                onClick={() => window.open('https://vk.com/im?entrypoint=community_page&media=&sel=-203229964', '_blank')} 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 mt-4"
              >
                <Icon name="Flame" size={18} className="mr-2" />
                Заказать шоу
              </Button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-black"></div>
        <div id="particles-container" className="absolute inset-0 overflow-hidden"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 md:mb-6 fire-glow">
              OUTCAST
            </h1>
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FIRE SHOW
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 md:mb-4 max-w-2xl mx-auto px-4">
              Огненное шоу для вашего праздника
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Профессиональное файер-шоу на свадьбу, корпоратив, день рождения и любое торжество
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-8 md:mb-12 text-sm sm:text-base md:text-lg">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={18} className="text-primary" />
                <span>Челябинск</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={18} className="text-primary" />
                <a href="tel:+79518152553" className="hover:text-primary transition-colors">+7 (951) 815-25-53</a>
              </div>
            </div>
            <Button 
              size="lg" 
              onClick={() => window.open('https://vk.com/im?entrypoint=community_page&media=&sel=-203229964', '_blank')}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover-scale"
            >
              <Icon name="Flame" size={20} className="mr-2" />
              Заказать выступление
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-b from-black via-primary/5 to-black scroll-reveal">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 fire-glow">
              Постановка «TRAILER» в действии
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Взрыв спецэффектов, огонь и пиротехника. Это то, что получают наши клиенты! 🔥
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 hover:border-primary/60 transition-all group">
            <div className="aspect-video bg-black">
              <iframe
                src="https://vk.com/video_ext.php?oid=-203229964&id=456239833&hash=6d750a5492e6fb9e"
                width="100%"
                height="100%"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="mt-6 text-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('programs')}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              Смотреть все программы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-card scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="group p-4 md:p-0">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 md:mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground">
                <Icon name="Flame" size={20} className="inline mb-1 text-primary" />
                <br />Зажигательных шоу
              </div>
            </div>
            <div className="group p-4 md:p-0">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 md:mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                7+
              </div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground">
                <Icon name="Award" size={20} className="inline mb-1 text-primary" />
                <br />Лет опыта
              </div>
            </div>
            <div className="group p-4 md:p-0">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 md:mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                1000+
              </div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground">
                <Icon name="Heart" size={20} className="inline mb-1 text-primary" />
                <br />Довольных клиентов
              </div>
            </div>
            <div className="group p-4 md:p-0">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 md:mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground">
                <Icon name="Shield" size={20} className="inline mb-1 text-primary" />
                <br />Безопасность
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-12 md:py-20 bg-gradient-to-b from-card to-black scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 fire-glow">Наши программы</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Выберите подходящую программу для вашего мероприятия
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className="bg-card border-primary/20 hover:border-primary/50 transition-all hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 animate-flicker">
                    <Icon name="Flame" size={24} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={18} className="text-primary" />
                      <span>{program.duration}</span>
                    </div>
                    {program.videoUrl && (
                      <a 
                        href={program.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20 hover:bg-primary/20 transition-all group"
                      >
                        <Icon name="Play" size={18} className="text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Смотреть видео-пример</span>
                      </a>
                    )}
                    <div className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary mt-1" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  {program.suitable && (
                    <div className="w-full p-3 bg-primary/10 rounded-lg border border-primary/20 mb-2">
                      <p className="text-sm text-muted-foreground">
                        <Icon name="Sparkles" size={16} className="inline text-primary mr-2" />
                        {program.suitable}
                      </p>
                    </div>
                  )}
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{program.price}</div>
                  <Button 
                    onClick={() => window.open('https://vk.com/im?entrypoint=community_page&media=&sel=-203229964', '_blank')}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="installations" className="py-12 md:py-20 bg-black scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 fire-glow">Инсталляции</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12 px-4">
            Огненные церемонии и оформление вашего праздника
          </p>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {installations.map((installation, index) => (
              <Card 
                key={index} 
                className="bg-card border-primary/20 hover:border-primary/50 transition-all hover-scale"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 animate-flicker">
                    <Icon name={index === 0 ? "Heart" : index === 2 ? "Droplets" : index === 3 ? "Type" : index === 4 ? "Baby" : "Sparkles"} size={24} />
                  </div>
                  <CardTitle className="text-2xl">{installation.title}</CardTitle>
                  <CardDescription className="text-base">{installation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={18} className="text-primary" />
                      <span>{installation.duration}</span>
                    </div>
                    {installation.videoUrl && (
                      <a 
                        href={installation.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20 hover:bg-primary/20 transition-all group"
                      >
                        <Icon name="Play" size={18} className="text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Смотреть видео-пример</span>
                      </a>
                    )}
                    {installation.videoUrls && (
                      <div className="space-y-2">
                        {installation.videoUrls.map((video: any, vidIdx: number) => (
                          <a 
                            key={vidIdx}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20 hover:bg-primary/20 transition-all group"
                          >
                            <Icon name="Play" size={18} className="text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium">Видео: {video.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    <div className="space-y-2">
                      {installation.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary mt-1" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  {installation.suitable && (
                    <div className="w-full p-3 bg-primary/10 rounded-lg border border-primary/20 mb-2">
                      <p className="text-sm text-muted-foreground">
                        <Icon name="Sparkles" size={16} className="inline text-primary mr-2" />
                        {installation.suitable}
                      </p>
                    </div>
                  )}
                  <div className="text-3xl font-bold text-primary">{installation.price}</div>
                  <Button 
                    onClick={() => window.open('https://vk.com/im?entrypoint=community_page&media=&sel=-203229964', '_blank')}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-b from-black to-card scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 fire-glow">Калькулятор стоимости</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12 px-4">
            Рассчитайте примерную стоимость выступления
          </p>
          
          <Card className="max-w-2xl mx-auto bg-card border-primary/20">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm sm:text-base font-semibold mb-3">Тип программы</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { value: 'mystic', label: 'MYSTIC', price: '18000₽' },
                      { value: 'trailer', label: 'TRAILER', price: '30000₽' },
                      { value: 'shamanism', label: 'SHAMANISM', price: '32000₽' }
                    ].map((prog) => (
                      <button
                        key={prog.value}
                        onClick={() => setCalculatorData({...calculatorData, programType: prog.value})}
                        className={`p-3 sm:p-4 rounded-lg border-2 transition-all active:scale-95 ${
                          calculatorData.programType === prog.value 
                            ? 'border-primary bg-primary/20' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-bold text-sm sm:text-base">{prog.label}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">от {prog.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Длительность (минут)</label>
                  <Input
                    type="number"
                    min="6"
                    max="30"
                    value={calculatorData.duration}
                    onChange={(e) => setCalculatorData({...calculatorData, duration: e.target.value})}
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Количество артистов</label>
                  <Input
                    type="number"
                    min="2"
                    max="6"
                    value={calculatorData.artists}
                    onChange={(e) => setCalculatorData({...calculatorData, artists: e.target.value})}
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Удаленность площадки от Челябинска (км)</label>
                  <Input
                    type="number"
                    min="0"
                    max="500"
                    value={calculatorData.distance}
                    onChange={(e) => setCalculatorData({...calculatorData, distance: e.target.value})}
                    className="bg-muted border-border"
                  />
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                    <span className="text-base sm:text-lg font-semibold">Примерная стоимость:</span>
                    <span className="text-3xl sm:text-4xl font-bold text-primary">{calculatePrice().toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <Icon name="Info" size={16} className="inline mr-2 text-primary" />
                    Итоговая стоимость рассчитывается индивидуально после консультации
                  </p>
                  <Button 
                    onClick={() => window.open('https://vk.com/im?entrypoint=community_page&media=&sel=-203229964', '_blank')}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Получить точный расчет
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-12 md:py-20 bg-gradient-to-b from-card to-black scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 fire-glow">Галерея</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12 px-4">
            Моменты наших выступлений
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover-scale"
              >
                {image.videoUrl ? (
                  <a 
                    href={image.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <img 
                      src={image.url} 
                      alt={`Огненное шоу Челябинск OUTCAST - ${image.title} - файер-шоу с пиротехникой на праздник`}
                      loading="lazy"
                      className="w-full h-full object-cover gallery-image transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="Play" size={32} className="text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                    </div>
                  </a>
                ) : (
                  <>
                    <img 
                      src={image.url} 
                      alt={`Файер-шоу Челябинск - ${image.title} - профессиональное пиротехническое шоу OUTCAST`}
                      loading="lazy"
                      className="w-full h-full object-cover gallery-image transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold">{image.title}</h3>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-12 md:py-20 bg-gradient-to-b from-card to-black scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 fire-glow">Цены</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Стоимость зависит от программы, продолжительности и сложности выступления
          </p>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Огненные постановки</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-6">
                  {programs.map((program, index) => (
                    <div key={index} className="flex items-center justify-between pb-6 border-b border-border last:border-0 last:pb-0">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                        <p className="text-sm text-muted-foreground">{program.duration}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">{program.price}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Инсталляции и оформление</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-6">
                  {installations.map((installation, index) => (
                    <div key={index} className="flex items-center justify-between pb-6 border-b border-border last:border-0 last:pb-0">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{installation.title}</h3>
                        <p className="text-sm text-muted-foreground">{installation.duration}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">{installation.price}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start gap-2">
                <Icon name="Info" size={20} className="text-primary mt-1" />
                <p className="text-sm text-muted-foreground">
                  Итоговая стоимость рассчитывается индивидуально и зависит от количества артистов, 
                  использования дополнительных эффектов и удаленности площадки
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-card to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 transition-all hover-scale"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 fire-glow">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-12 md:py-20 bg-gradient-to-b from-black via-primary/5 to-black scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 fire-glow">Отзывы клиентов</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12 px-4">
            Живые эмоции от тех, кто уже выбрал OUTCAST 🔥
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-card via-card to-card/50 border-2 border-primary/20 hover:border-primary/60 transition-all hover-scale overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {testimonial.photo && (
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={testimonial.photo} 
                      alt={`Отзыв о файер-шоу OUTCAST Челябинск - ${testimonial.event} - ${testimonial.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent"></div>
                    <div className="absolute top-3 right-3 flex gap-1 bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={14} 
                          className="text-secondary fill-secondary animate-pulse" 
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                <CardHeader className="relative pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-xs text-primary/80 font-medium flex items-center gap-1 mt-1">
                        <Icon name="Flame" size={12} className="animate-flicker" />
                        {testimonial.event}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative pt-0">
                  <div className="flex items-start gap-3">
                    <Icon name="Quote" size={28} className="text-primary/30 flex-shrink-0 -mt-1" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 border-t border-primary/10 relative">
                  <a 
                    href="https://vk.com/topic-203229964_47521361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:text-accent transition-colors flex items-center gap-1 font-medium group/link"
                  >
                    Еще отзывы в VK
                    <Icon name="ArrowRight" size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => window.open('https://vk.com/topic-203229964_47521361', '_blank')}
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Читать все отзывы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-b from-black to-card scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 fire-glow">Частые вопросы</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12 px-4">
            Ответы на популярные вопросы о fire show
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl flex items-start gap-3">
                    <Icon name="HelpCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed pl-9">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SEOContent />

      <section id="contacts" className="py-12 md:py-20 bg-gradient-to-b from-card to-black scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 fire-glow">Контакты</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12 px-4">
            Свяжитесь с нами для заказа выступления
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">г. Челябинск</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <a href="tel:+89085740813" className="text-muted-foreground hover:text-primary transition-colors">+7 (908) 574-08-13</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@outcast-show.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Время работы</h4>
                  <p className="text-muted-foreground">Ежедневно, 10:00 - 22:00</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-4">Мы в социальных сетях</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://vk.com/fireshow74_outcast_ognennoe_show" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                    aria-label="VKontakte"
                  >
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.77c-.41.55-1.17.74-1.77.74-1.21 0-1.67-.47-2.67-1.47-.81-.81-1.18-1.18-1.86-1.18-.77 0-.89.11-1.15.51-.23.35-.38.95-.38 1.51 0 .34-.28.62-.75.62h-.98c-.78 0-3.23-.17-5.29-2.3C1.28 12.99.62 10.12.56 10c-.11-.31.07-.47.36-.47h2.03c.31 0 .42.16.54.39.12.24 1.27 3.02 1.97 3.74.13.14.22.18.31.18.11 0 .16-.06.22-.19V11.3c-.06-.93-.55-1.01-.55-1.33 0-.24.2-.49.53-.49h3.18c.26 0 .36.14.36.44v3.49c0 .26.12.36.19.36.11 0 .22-.1.41-.29 1.58-1.78 2.72-4.53 2.72-4.53.07-.14.2-.28.47-.28h2.03c.37 0 .45.19.37.44-.14.51-1.79 3.77-1.79 3.77-.1.18-.13.26 0 .47.09.14.37.36.56.57.76.76 1.35 1.39 1.5 1.82.16.43-.08.65-.46.65h-2.03z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/outcast_fireshow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                    aria-label="Instagram"
                  >
                    <Icon name="Instagram" size={24} className="text-primary" />
                  </a>
                  <a 
                    href="https://wa.me/79085740813" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                    aria-label="WhatsApp"
                  >
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-muted border-border min-h-[100px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <PerformanceMap />

      <section className="py-20 bg-gradient-to-b from-black to-card scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fire-glow">Безопасность превыше всего</h2>
          <p className="text-center text-muted-foreground mb-12">
            Мы работаем по всем стандартам безопасности
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Сертифицированные артисты</h3>
                <p className="text-muted-foreground">Все артисты прошли обучение и имеют 7+ лет опыта работы с огнем</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileCheck" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Соблюдение норм</h3>
                <p className="text-muted-foreground">Работаем строго по нормам пожарной безопасности и техники безопасности</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Ambulance" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Страхование</h3>
                <p className="text-muted-foreground">Полное страхование ответственности и наличие средств пожаротушения</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/79085740813"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Написать в WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/50 transition-all hover-scale"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </button>
      )}

      <button
        onClick={toggleSound}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-500/50 transition-all hover-scale"
        aria-label={isSoundPlaying ? "Выключить звук" : "Включить звук"}
      >
        <Icon name={isSoundPlaying ? "Volume2" : "VolumeX"} size={24} />
      </button>

      <footer className="bg-card border-t border-primary/20 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://cdn.poehali.dev/files/6542e7b2-83ab-46b5-8dee-6d7f743b92c4.jpg" 
                  alt="OUTCAST - огненное шоу в Челябинске, файер-шоу на свадьбу и корпоратив" 
                  className="h-8 w-auto object-contain logo-animate cursor-pointer"
                  onClick={() => scrollToSection('home')}
                />
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://vk.com/fireshow74_outcast_ognennoe_show" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                  aria-label="VKontakte"
                >
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.77c-.41.55-1.17.74-1.77.74-1.21 0-1.67-.47-2.67-1.47-.81-.81-1.18-1.18-1.86-1.18-.77 0-.89.11-1.15.51-.23.35-.38.95-.38 1.51 0 .34-.28.62-.75.62h-.98c-.78 0-3.23-.17-5.29-2.3C1.28 12.99.62 10.12.56 10c-.11-.31.07-.47.36-.47h2.03c.31 0 .42.16.54.39.12.24 1.27 3.02 1.97 3.74.13.14.22.18.31.18.11 0 .16-.06.22-.19V11.3c-.06-.93-.55-1.01-.55-1.33 0-.24.2-.49.53-.49h3.18c.26 0 .36.14.36.44v3.49c0 .26.12.36.19.36.11 0 .22-.1.41-.29 1.58-1.78 2.72-4.53 2.72-4.53.07-.14.2-.28.47-.28h2.03c.37 0 .45.19.37.44-.14.51-1.79 3.77-1.79 3.77-.1.18-.13.26 0 .47.09.14.37.36.56.57.76.76 1.35 1.39 1.5 1.82.16.43-.08.65-.46.65h-2.03z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/outcast_fireshow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                  aria-label="Instagram"
                >
                  <Icon name="Instagram" size={20} className="text-primary" />
                </a>
                <a 
                  href="https://wa.me/89085740813" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                  aria-label="WhatsApp"
                >
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                </a>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs sm:text-sm text-muted-foreground px-4">
                © 2024 OUTCAST FIRE SHOW. Огненное шоу в Челябинске. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <ContactFormWidget />
    </div>
  );
};

export default Index;