import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'feed', icon: 'Home', label: 'Лента', path: '/' },
    { id: 'profile', icon: 'User', label: 'Профиль', path: '/profile' },
    { id: 'messages', icon: 'MessageCircle', label: 'Сообщения', path: '/messages' },
    { id: 'friends', icon: 'Users', label: 'Друзья', path: '/friends' },
    { id: 'groups', icon: 'UsersRound', label: 'Группы', path: '/groups' },
    { id: 'settings', icon: 'Settings', label: 'Настройки', path: '/settings' },
  ];

  return (
    <aside className="w-64 cyber-card border-r-2 border-primary/30 h-screen sticky top-0 p-4 scan-line">
      <div className="mb-8 relative">
        <h1 className="text-2xl font-bold neon-text">
          CYBER//NET
        </h1>
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-2"></div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 relative group ${
              location.pathname === item.path
                ? 'text-primary neon-border bg-primary/5'
                : 'text-foreground hover:text-primary hover:bg-primary/5 border border-primary/10'
            }`}
            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
          >
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50"></div>
            
            <Icon name={item.icon} size={20} />
            <span className="font-medium tracking-wider">{item.label}</span>
            
            {location.pathname === item.path && (
              <span className="ml-auto text-xs text-primary">▶</span>
            )}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-8 left-4 right-4">
        <div className="cyber-card p-4 neon-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-primary/20 animate-ping"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold"
                   style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                А
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm tracking-wide">АЛЕКСАНДР</p>
              <p className="text-xs text-primary">ID: #ALX_2077</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
