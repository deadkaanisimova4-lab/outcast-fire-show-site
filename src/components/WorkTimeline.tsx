import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const steps = [
  {
    icon: 'MessageCircle',
    title: 'Обсуждение',
    description: 'Вы рассказываете о мероприятии, мы подбираем идеальную программу'
  },
  {
    icon: 'Calendar',
    title: 'Бронирование',
    description: 'Фиксируем дату и вносите предоплату 50% для брони'
  },
  {
    icon: 'ClipboardCheck',
    title: 'Подготовка',
    description: 'Репетиции, проверка реквизита и техники безопасности'
  },
  {
    icon: 'Flame',
    title: 'Выступление',
    description: 'Приезжаем, готовим площадку и устраиваем незабываемое шоу!'
  }
];

const WorkTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleSteps(prev => prev.includes(index) ? prev : [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = containerRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black via-primary/5 to-black scroll-reveal">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 fire-glow">
          Как мы работаем
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-12 md:mb-16 px-4">
          4 простых шага до вашего незабываемого шоу
        </p>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-primary/60 md:-translate-x-px" />

          {steps.map((step, index) => {
            const isVisible = visibleSteps.includes(index);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                data-index={index}
                className={`relative flex items-center mb-12 md:mb-16 last:mb-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`hidden md:flex w-full items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-[calc(50%-2rem)] ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>

                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
                    <Icon name={step.icon} size={28} className="text-white" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>

                  <div className="w-[calc(50%-2rem)]" />
                </div>

                <div className="flex md:hidden items-start gap-4 pl-2">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
                    <Icon name={step.icon} size={20} className="text-white" />
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
