import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const ProfileHeader = () => {
  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden mb-6 animate-fade-in">
      <div className="h-48 bg-gradient-to-r from-primary via-secondary to-accent relative">
        <Button 
          variant="secondary" 
          size="sm" 
          className="absolute top-4 right-4 bg-white/90 hover:bg-white"
        >
          <Icon name="Camera" size={16} className="mr-2" />
          Изменить обложку
        </Button>
      </div>

      <div className="px-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 -mt-16 relative">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <span className="text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                    А
                  </span>
                </div>
              </div>
              <button className="absolute bottom-2 right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Icon name="Camera" size={18} className="text-white" />
              </button>
            </div>

            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl font-bold mb-1">Александр Петров</h1>
              <p className="text-muted-foreground mb-2">@alex_dev</p>
              <p className="text-sm max-w-md">
                Веб-разработчик | Люблю создавать красивые интерфейсы ✨ | Москва 📍
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Settings" size={16} className="mr-2" />
              Редактировать
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="UserPlus" size={16} className="mr-2" />
              Добавить в друзья
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-border">
          <div className="text-center hover:bg-muted p-3 rounded-lg transition-colors cursor-pointer">
            <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              1,234
            </p>
            <p className="text-sm text-muted-foreground">Постов</p>
          </div>
          <div className="text-center hover:bg-muted p-3 rounded-lg transition-colors cursor-pointer">
            <p className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              5,678
            </p>
            <p className="text-sm text-muted-foreground">Друзей</p>
          </div>
          <div className="text-center hover:bg-muted p-3 rounded-lg transition-colors cursor-pointer">
            <p className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              9,012
            </p>
            <p className="text-sm text-muted-foreground">Подписчиков</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
