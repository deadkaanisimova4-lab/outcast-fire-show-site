import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ReviewWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const reviewPlatforms = [
    {
      name: 'Яндекс.Справочник',
      icon: 'Star',
      color: 'bg-yellow-500',
      url: '#yandex-reviews',
      description: 'Оставьте отзыв в Яндекс.Картах'
    },
    {
      name: 'Google Бизнес',
      icon: 'Star',
      color: 'bg-blue-500',
      url: '#google-reviews',
      description: 'Оставьте отзыв в Google'
    },
    {
      name: 'ВКонтакте',
      icon: 'MessageCircle',
      color: 'bg-primary',
      url: 'https://vk.com/fireshow74_outcast_ognennoe_show',
      description: 'Напишите в нашей группе'
    }
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-primary to-orange-600 hover:scale-110 transition-transform duration-300"
          size="icon"
        >
          <Icon name="Star" size={24} className="animate-pulse" />
        </Button>
        <div className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
          !
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Card className="w-80 bg-card/95 backdrop-blur-lg border-2 border-primary/30 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Icon name="Star" className="text-yellow-500" size={24} />
              <h3 className="font-bold text-lg">Оставьте отзыв</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Понравилось наше шоу? Поделитесь впечатлениями — это поможет нам стать лучше! 🔥
          </p>

          <div className="space-y-3">
            {reviewPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-accent transition-all duration-200 border border-border hover:border-primary/50 group"
              >
                <div className={`${platform.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                  <Icon name={platform.icon as any} size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{platform.name}</div>
                  <div className="text-xs text-muted-foreground">{platform.description}</div>
                </div>
                <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-center text-muted-foreground">
              За отзыв с фото — скидка 5% на следующий заказ! 🎁
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewWidget;
