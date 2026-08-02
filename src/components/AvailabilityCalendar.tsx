import { useState, useEffect, useMemo } from 'react';
import Icon from '@/components/ui/icon';

interface DateAvailability {
  date: string;
  show_limit: number;
  installation_limit: number;
}

const API_URL = 'https://functions.poehali.dev/175a4ca7-2aa2-4df2-b86c-774f96e31289';

const MONTH_NAMES = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const AvailabilityCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [availability, setAvailability] = useState<Record<string, DateAvailability>>({});
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}?month=${monthKey}`)
      .then((res) => res.json())
      .then((data) => {
        const map: Record<string, DateAvailability> = {};
        (data.dates || []).forEach((d: DateAvailability) => {
          map[d.date] = d;
        });
        setAvailability(map);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [monthKey]);

  const days = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startWeekday = (firstDay.getDay() + 6) % 7;
    const totalDays = lastDay.getDate();

    const cells: (number | null)[] = Array(startWeekday).fill(null);
    for (let d = 1; d <= totalDays; d++) cells.push(d);
    return cells;
  }, [year, month]);

  const todayStr = new Date().toISOString().split('T')[0];

  const getStatus = (dateStr: string) => {
    const info = availability[dateStr];
    if (!info) return null;
    const total = info.show_limit + info.installation_limit;
    if (total <= 0) return 'busy';
    if (total <= 2) return 'limited';
    return 'free';
  };

  const changeMonth = (delta: number) => {
    setSelectedDate(null);
    setCurrentDate(new Date(year, month + delta, 1));
  };

  const isPast = (dateStr: string) => dateStr < todayStr;

  const selectedInfo = selectedDate ? availability[selectedDate] : null;

  return (
    <div className="bg-card/60 border border-border rounded-xl p-4 md:p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
          aria-label="Предыдущий месяц"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        <h3 className="font-bold text-lg text-white">
          {MONTH_NAMES[month]} {year}
        </h3>
        <button
          onClick={() => changeMonth(1)}
          className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
          aria-label="Следующий месяц"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((wd) => (
          <div key={wd} className="text-center text-xs text-muted-foreground font-semibold py-1">
            {wd}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => {
          if (day === null) return <div key={`empty-${idx}`} />;

          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const status = getStatus(dateStr);
          const past = isPast(dateStr);
          const isToday = dateStr === todayStr;
          const isSelected = dateStr === selectedDate;

          let statusClasses = 'text-muted-foreground/50';
          if (!past) {
            if (status === 'free') statusClasses = 'bg-green-500/20 text-green-400 hover:bg-green-500/30 cursor-pointer';
            else if (status === 'limited') statusClasses = 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 cursor-pointer';
            else if (status === 'busy') statusClasses = 'bg-red-500/20 text-red-400 cursor-not-allowed';
            else statusClasses = 'text-white hover:bg-primary/20 cursor-pointer';
          }

          return (
            <button
              key={dateStr}
              disabled={past || status === 'busy'}
              onClick={() => setSelectedDate(dateStr === selectedDate ? null : dateStr)}
              className={`h-9 rounded-lg text-sm font-medium transition-colors relative ${statusClasses} ${
                isSelected ? 'ring-2 ring-primary' : ''
              } ${isToday ? 'font-bold' : ''}`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {loading && (
        <p className="text-center text-xs text-muted-foreground mt-4">Загрузка...</p>
      )}

      {selectedInfo && (
        <div className="mt-4 pt-4 border-t border-border text-center animate-fade-in">
          <p className="text-sm text-white font-semibold mb-1">
            {new Date(selectedDate!).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            Свободно: {selectedInfo.show_limit} шоу, {selectedInfo.installation_limit} инсталляций
          </p>
          <a
            href={`https://vk.me/write-203229964?text=${encodeURIComponent(
              `Здравствуйте! Хочу забронировать дату ${new Date(selectedDate!).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}. Расскажите, пожалуйста, что нужно для оформления.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-white font-semibold text-sm py-2.5 px-5 rounded-lg"
          >
            <Icon name="MessageCircle" size={16} />
            Забронировать эту дату
          </a>
        </div>
      )}

      <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-green-500/40" />
          Свободно
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-yellow-500/40" />
          Мало мест
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-red-500/40" />
          Занято
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;