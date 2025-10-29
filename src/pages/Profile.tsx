import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileTabs from '@/components/ProfileTabs';
import { profileStore } from '@/store/profileStore';

const Profile = () => {
  const [userGender, setUserGender] = useState<'male' | 'female'>(profileStore.getProfile().gender);

  useEffect(() => {
    const unsubscribe = profileStore.subscribe(() => {
      setUserGender(profileStore.getProfile().gender);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      {/* Character Silhouette */}
      <div className="hidden lg:flex items-end justify-center w-64 p-6">
        <svg 
          viewBox="0 0 100 300" 
          className="h-[75vh] w-auto opacity-20 hover:opacity-40 transition-opacity"
          style={{ filter: 'drop-shadow(0 0 10px hsl(var(--primary) / 0.3))' }}
        >
          {userGender === 'male' ? (
            <g>
              <circle cx="50" cy="30" r="18" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <rect x="44" y="46" width="12" height="10" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <path d="M 30,56 L 30,140 L 40,180 L 45,180 L 45,140 L 55,140 L 55,180 L 60,180 L 70,140 L 70,56 Z" 
                    fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <rect x="20" y="56" width="60" height="12" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <rect x="15" y="68" width="10" height="60" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <rect x="75" y="68" width="10" height="60" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <path d="M 40,180 L 38,260 L 32,300 L 42,300 L 45,260 Z" 
                    fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <path d="M 60,180 L 62,260 L 68,300 L 58,300 L 55,260 Z" 
                    fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            </g>
          ) : (
            <g>
              <circle cx="50" cy="30" r="18" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <path d="M 32,20 Q 50,15 68,20 L 68,35 Q 50,30 32,35 Z" 
                    fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <rect x="44" y="46" width="12" height="10" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <path d="M 28,56 L 25,100 L 30,140 L 40,180 L 45,180 L 45,140 L 55,140 L 55,180 L 60,180 L 70,140 L 75,100 L 72,56 Z" 
                    fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <rect x="20" y="56" width="60" height="10" rx="3" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <path d="M 18,66 L 16,120 L 22,122 L 24,68 Z" 
                    fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <path d="M 82,66 L 84,120 L 78,122 L 76,68 Z" 
                    fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <path d="M 40,180 L 38,260 L 32,300 L 42,300 L 45,260 Z" 
                    fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <path d="M 60,180 L 62,260 L 68,300 L 58,300 L 55,260 Z" 
                    fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            </g>
          )}
        </svg>
      </div>
      
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