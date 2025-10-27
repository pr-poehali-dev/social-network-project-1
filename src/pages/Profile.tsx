import Sidebar from '@/components/Sidebar';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileTabs from '@/components/ProfileTabs';

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 max-w-5xl mx-auto p-6">
        <ProfileHeader />
        <ProfileTabs />
      </main>

      <aside className="w-80 p-6 hidden xl:block">
        <div className="sticky top-6 space-y-6">
          <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Интересы
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Веб-разработка', 'Дизайн', 'Технологии', 'Путешествия', 'Фотография', 'Музыка'].map((interest, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-sm rounded-full border border-primary/20"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>🎂</span>
                <span>15 марта 1995</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>📍</span>
                <span>Москва, Россия</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>💼</span>
                <span>Frontend Developer</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>🎓</span>
                <span>МГУ им. Ломоносова</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl shadow-sm border border-primary/20 p-6">
            <h3 className="font-bold text-lg mb-4">Достижения</h3>
            <div className="grid grid-cols-3 gap-3">
              {['🏆', '⭐', '🎯', '💎', '🔥', '🎨'].map((emoji, idx) => (
                <div 
                  key={idx}
                  className="aspect-square bg-card rounded-xl flex items-center justify-center text-3xl hover:scale-110 transition-transform cursor-pointer"
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Profile;
