import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

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

const AdminCalendar = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [availability, setAvailability] = useState<Record<string, DateAvailability>>({});
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showLimit, setShowLimit] = useState('0');
  const [installationLimit, setInstallationLimit] = useState('0');
  const [saving, setSaving] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;

  const loadMonth = () => {
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
      .catch(() => {
        toast({ title: 'Ошибка загрузки данных', variant: 'destructive' });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (authed) loadMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed, monthKey]);

  const handleLogin = () => {
    if (!password.trim()) return;
    setAuthed(true);
  };

  const days = (() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startWeekday = (firstDay.getDay() + 6) % 7;
    const totalDays = lastDay.getDate();
    const cells: (number | null)[] = Array(startWeekday).fill(null);
    for (let d = 1; d <= totalDays; d++) cells.push(d);
    return cells;
  })();

  const todayStr = new Date().toISOString().split('T')[0];

  const selectDate = (dateStr: string) => {
    setSelectedDate(dateStr);
    const info = availability[dateStr];
    setShowLimit(String(info?.show_limit ?? 0));
    setInstallationLimit(String(info?.installation_limit ?? 0));
  };

  const saveLimit = async () => {
    if (!selectedDate) return;
    setSaving(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Password': password,
        },
        body: JSON.stringify({
          date: selectedDate,
          show_limit: parseInt(showLimit) || 0,
          installation_limit: parseInt(installationLimit) || 0,
        }),
      });
      if (res.status === 401) {
        toast({ title: 'Неверный пароль', variant: 'destructive' });
        setAuthed(false);
        return;
      }
      if (!res.ok) throw new Error();
      toast({ title: 'Сохранено' });
      loadMonth();
    } catch {
      toast({ title: 'Ошибка сохранения', variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  const clearLimit = async () => {
    if (!selectedDate) return;
    setSaving(true);
    try {
      const res = await fetch(`${API_URL}?date=${selectedDate}`, {
        method: 'DELETE',
        headers: { 'X-Admin-Password': password },
      });
      if (res.status === 401) {
        toast({ title: 'Неверный пароль', variant: 'destructive' });
        setAuthed(false);
        return;
      }
      if (!res.ok) throw new Error();
      toast({ title: 'Дата сброшена' });
      setSelectedDate(null);
      loadMonth();
    } catch {
      toast({ title: 'Ошибка', variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <Card className="w-full max-w-sm bg-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Icon name="Lock" size={20} className="text-primary" />
              Вход в админку
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
            <Button className="w-full" onClick={handleLogin}>
              Войти
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Icon name="CalendarDays" size={24} className="text-primary" />
          Управление календарём доступности
        </h1>

        <Card className="bg-card border-primary/20">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => { setSelectedDate(null); setCurrentDate(new Date(year, month - 1, 1)); }}
                className="p-2 rounded-lg hover:bg-primary/20"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <h2 className="font-bold text-lg">{MONTH_NAMES[month]} {year}</h2>
              <button
                onClick={() => { setSelectedDate(null); setCurrentDate(new Date(year, month + 1, 1)); }}
                className="p-2 rounded-lg hover:bg-primary/20"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((wd) => (
                <div key={wd} className="text-center text-xs text-muted-foreground font-semibold py-1">{wd}</div>
              ))}
            </div>

            {loading ? (
              <p className="text-center text-sm text-muted-foreground py-8">Загрузка...</p>
            ) : (
              <div className="grid grid-cols-7 gap-1">
                {days.map((day, idx) => {
                  if (day === null) return <div key={`e-${idx}`} />;
                  const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const info = availability[dateStr];
                  const isToday = dateStr === todayStr;
                  const isSelected = dateStr === selectedDate;
                  const hasData = !!info;

                  return (
                    <button
                      key={dateStr}
                      onClick={() => selectDate(dateStr)}
                      className={`h-12 rounded-lg text-sm font-medium transition-colors flex flex-col items-center justify-center gap-0.5 ${
                        isSelected ? 'ring-2 ring-primary bg-primary/20' : hasData ? 'bg-primary/10 hover:bg-primary/20' : 'hover:bg-white/5'
                      } ${isToday ? 'font-bold' : ''}`}
                    >
                      <span>{day}</span>
                      {hasData && (
                        <span className="text-[10px] text-primary">
                          {info.show_limit}/{info.installation_limit}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {selectedDate && (
              <div className="mt-6 pt-6 border-t border-border space-y-4">
                <p className="font-semibold">
                  {new Date(selectedDate).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Лимит шоу</label>
                    <Input
                      type="number"
                      min={0}
                      value={showLimit}
                      onChange={(e) => setShowLimit(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Лимит инсталляций</label>
                    <Input
                      type="number"
                      min={0}
                      value={installationLimit}
                      onChange={(e) => setInstallationLimit(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button onClick={saveLimit} disabled={saving} className="flex-1">
                    <Icon name="Check" size={16} className="mr-2" />
                    Сохранить
                  </Button>
                  <Button onClick={clearLimit} disabled={saving} variant="outline">
                    <Icon name="Trash2" size={16} className="mr-2" />
                    Сбросить
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminCalendar;
