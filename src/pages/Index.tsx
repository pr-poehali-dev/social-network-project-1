import Sidebar from '@/components/Sidebar';
import Stories from '@/components/Stories';
import CreatePost from '@/components/CreatePost';
import Post from '@/components/Post';

const Index = () => {
  const posts = [
    {
      id: 1,
      author: 'Мария Иванова',
      avatar: 'М',
      time: '2 часа назад',
      content: 'Сегодня прекрасный день для новых начинаний! 🚀 Запустила свой новый проект и очень рада поделиться с вами!',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      initialLikes: 234,
      initialShares: 45,
      initialComments: 67,
    },
    {
      id: 2,
      author: 'Дмитрий Петров',
      avatar: 'Д',
      time: '5 часов назад',
      content: 'Интересная статья о современных трендах в дизайне. Обязательно почитайте!',
      initialLikes: 189,
      initialShares: 32,
      initialComments: 41,
    },
    {
      id: 3,
      author: 'Екатерина Смирнова',
      avatar: 'Е',
      time: '8 часов назад',
      content: 'Завершила марафон! 42 км позади 💪 Спасибо всем за поддержку!',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',
      initialLikes: 456,
      initialShares: 89,
      initialComments: 123,
    },
    {
      id: 4,
      author: 'Иван Козлов',
      avatar: 'И',
      time: '12 часов назад',
      content: 'Кто-нибудь знает хорошее место для работы в центре города? Нужен коворкинг с быстрым интернетом.',
      initialLikes: 78,
      initialShares: 12,
      initialComments: 34,
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 max-w-4xl mx-auto p-6">
        <Stories />
        <CreatePost />
        
        <div className="space-y-6">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </main>

      <aside className="w-80 p-6 hidden xl:block">
        <div className="sticky top-6 space-y-6">
          <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Актуальные темы
            </h3>
            <div className="space-y-4">
              {['#веб-разработка', '#дизайн', '#технологии', '#путешествия', '#спорт'].map((tag, idx) => (
                <div key={idx} className="flex items-center justify-between hover:bg-muted p-2 rounded-lg transition-colors cursor-pointer">
                  <span className="font-medium">{tag}</span>
                  <span className="text-sm text-muted-foreground">{Math.floor(Math.random() * 1000)}K</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl shadow-sm border border-primary/20 p-6">
            <h3 className="font-bold text-lg mb-4">Рекомендации</h3>
            <div className="space-y-3">
              {['Анна Волкова', 'Сергей Новиков', 'Ольга Лебедева'].map((name, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
                      {name[0]}
                    </div>
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                  <button className="text-xs px-3 py-1 rounded-full bg-primary text-white hover:opacity-90 transition-opacity">
                    Добавить
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Index;
