import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('feed');

  const menuItems = [
    { id: 'feed', icon: 'Home', label: 'Лента' },
    { id: 'profile', icon: 'User', label: 'Профиль' },
    { id: 'messages', icon: 'MessageCircle', label: 'Сообщения' },
    { id: 'friends', icon: 'Users', label: 'Друзья' },
    { id: 'groups', icon: 'UsersRound', label: 'Группы' },
    { id: 'settings', icon: 'Settings', label: 'Настройки' },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-0 p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          SocialHub
        </h1>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeTab === item.id
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                : 'text-foreground hover:bg-muted hover:scale-102'
            }`}
          >
            <Icon name={item.icon} size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-8 left-4 right-4">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
              А
            </div>
            <div>
              <p className="font-semibold text-sm">Александр</p>
              <p className="text-xs text-muted-foreground">@alex_dev</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
