import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactFormWidget = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Заполните имя и телефон",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const whatsappNumber = '89085740813';
    const text = `🔥 *Новая заявка с сайта!*

👤 *Имя:* ${formData.name}
📞 *Телефон:* ${formData.phone}
💬 *Сообщение:* ${formData.message || 'Не указано'}

---
⏰ Время: ${new Date().toLocaleString('ru-RU')}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 px-6 rounded-full shadow-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-110 transition-all duration-300 flex items-center gap-3"
        >
          <Icon name="MessageCircle" size={24} className="animate-pulse" />
          <span className="font-bold text-base">Заказать шоу</span>
        </Button>
        <div className="absolute -top-2 -right-2 h-7 w-7 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce shadow-lg">
          🔥
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Card className="w-96 bg-card/95 backdrop-blur-lg border-2 border-green-500/30 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Icon name="MessageCircle" className="text-green-500" size={24} />
              <h3 className="font-bold text-lg">Быстрая заявка</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Оставьте контакты — мы свяжемся с вами через WhatsApp за 5 минут! 🔥
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Ваше имя *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-green-500/30 focus:border-green-500"
                required
              />
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Ваш телефон *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-green-500/30 focus:border-green-500"
                required
              />
            </div>

            <div>
              <Textarea
                placeholder="Комментарий к заказу (опционально)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-green-500/30 focus:border-green-500 min-h-[80px]"
                rows={3}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 text-base"
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить в WhatsApp
                </>
              )}
            </Button>
          </form>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-center text-muted-foreground">
              📞 Или звоните: <a href="tel:+89085740813" className="text-green-500 font-semibold hover:underline">+7 (908) 574-08-13</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactFormWidget;