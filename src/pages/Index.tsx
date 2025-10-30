import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Навигатор Мозаика
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('teachers')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'teachers' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Педагогам
              </button>
              <button 
                onClick={() => setActiveSection('parents')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'parents' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Родителям
              </button>
              <button 
                onClick={() => setActiveSection('surveys')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'surveys' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Опросы
              </button>
            </nav>
          </div>
        </div>
      </header>

      {activeSection === 'home' && (
        <main className="animate-fade-in">
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
                <div className="inline-block">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Icon name="Zap" size={16} />
                    Образовательная платформа нового поколения
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Персональное обучение для{' '}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    каждого участника
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Современная платформа с личными кабинетами для педагогов, родителей и учащихся. Управляйте образовательным процессом эффективно.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold">
                    <Icon name="Rocket" size={20} className="mr-2" />
                    Начать обучение
                  </Button>
                  <Button size="lg" variant="outline" className="border-2">
                    <Icon name="PlayCircle" size={20} className="mr-2" />
                    Посмотреть видео
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Личные кабинеты</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Выберите свою роль и войдите в персональный кабинет
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name="GraduationCap" size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl">Педагогам</CardTitle>
                    <CardDescription className="text-base">
                      Управление учебным процессом, материалами и успеваемостью учащихся
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <Icon name="LogIn" size={18} className="mr-2" />
                      Войти
                    </Button>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Электронный журнал</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Планирование уроков</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Аналитика успеваемости</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in cursor-pointer" style={{animationDelay: '0.1s'}}>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name="Users" size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl">Родителям</CardTitle>
                    <CardDescription className="text-base">
                      Контроль успехов ребенка, общение с педагогами и участие в образовательном процессе
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                      <Icon name="LogIn" size={18} className="mr-2" />
                      Войти
                    </Button>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        <span>Успеваемость ребенка</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        <span>Расписание занятий</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        <span>Связь с педагогами</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in cursor-pointer" style={{animationDelay: '0.2s'}}>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name="BookOpen" size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl">Учащимся</CardTitle>
                    <CardDescription className="text-base">
                      Доступ к материалам, заданиям, отслеживание прогресса и общение с одноклассниками
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                      <Icon name="LogIn" size={18} className="mr-2" />
                      Войти
                    </Button>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span>Учебные материалы</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span>Домашние задания</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span>Мои достижения</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Преимущества платформы</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Все инструменты для эффективного обучения в одном месте
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {[
                  { icon: 'Sparkles', title: 'Персонализация', desc: 'Индивидуальный подход к каждому учащемуся' },
                  { icon: 'BarChart3', title: 'Аналитика', desc: 'Детальная статистика и отчеты об успеваемости' },
                  { icon: 'MessageSquare', title: 'Коммуникация', desc: 'Прямая связь между всеми участниками процесса' },
                  { icon: 'Shield', title: 'Безопасность', desc: 'Защита данных и контроль доступа' }
                ].map((feature, idx) => (
                  <div 
                    key={idx}
                    className="p-6 bg-white rounded-2xl border-2 hover:border-primary transition-all hover:shadow-lg group animate-fade-in"
                    style={{animationDelay: `${idx * 0.1}s`}}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={feature.icon as any} size={24} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {activeSection === 'teachers' && (
        <section className="py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <Icon name="GraduationCap" size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Педагогам и руководителям</h2>
                  <p className="text-muted-foreground">Инструменты для эффективного управления образовательным процессом</p>
                </div>
              </div>

              <Tabs defaultValue="tools" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tools">Инструменты</TabsTrigger>
                  <TabsTrigger value="features">Возможности</TabsTrigger>
                  <TabsTrigger value="support">Поддержка</TabsTrigger>
                </TabsList>
                <TabsContent value="tools" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Электронный журнал</CardTitle>
                      <CardDescription>Удобное ведение оценок и посещаемости</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Автоматический расчет средних баллов, экспорт отчетов, быстрый доступ к истории оценок каждого учащегося.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Планирование уроков</CardTitle>
                      <CardDescription>Создание и организация учебных материалов</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Шаблоны планов уроков, календарь занятий, интеграция с учебной программой.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="features" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Аналитика и отчеты</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Визуализация успеваемости, сравнительный анализ групп, автоматическая генерация отчетов для администрации.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="support" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Техническая поддержка</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Круглосуточная помощь, обучающие материалы, регулярные вебинары для педагогов.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'parents' && (
        <section className="py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Родителям</h2>
                  <p className="text-muted-foreground">Будьте в курсе успехов вашего ребенка</p>
                </div>
              </div>

              <div className="grid gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" className="text-secondary" />
                      Успеваемость в реальном времени
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Отслеживайте оценки, посещаемость и прогресс ребенка. Получайте уведомления о новых оценках и важных событиях.</p>
                    <Button variant="outline">Открыть дневник</Button>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Calendar" className="text-secondary" />
                      Расписание и события
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Актуальное расписание уроков, родительские собрания, школьные мероприятия в одном календаре.</p>
                    <Button variant="outline">Посмотреть расписание</Button>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Mail" className="text-secondary" />
                      Связь с педагогами
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Личные сообщения учителям, запись на консультации, обратная связь об успехах ребенка.</p>
                    <Button variant="outline">Написать сообщение</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'surveys' && (
        <section className="py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <Icon name="ClipboardList" size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Опросы и анкетирование</h2>
                  <p className="text-muted-foreground">Ваше мнение помогает нам становиться лучше</p>
                </div>
              </div>

              <div className="grid gap-6">
                <Card className="border-2 border-accent/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Удовлетворенность обучением</CardTitle>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">Активен</span>
                    </div>
                    <CardDescription>Оцените качество образовательных услуг</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">15 вопросов · ~5 минут</div>
                      <Button className="bg-accent hover:bg-accent/90">
                        <Icon name="PlayCircle" size={18} className="mr-2" />
                        Пройти опрос
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Качество питания в школе</CardTitle>
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">Завершен</span>
                    </div>
                    <CardDescription>Спасибо за участие!</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Участвовало: 234 человека</div>
                      <Button variant="outline">
                        <Icon name="BarChart3" size={18} className="mr-2" />
                        Результаты
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Предложения по улучшению</CardTitle>
                    <CardDescription>Поделитесь своими идеями</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Свободная форма</div>
                      <Button variant="outline">
                        <Icon name="MessageSquare" size={18} className="mr-2" />
                        Оставить отзыв
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <span className="font-semibold text-lg">Навигатор Мозаика</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Образовательная платформа. Все права защищены.
            </div>
            <div className="flex items-center gap-4">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Info" size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
