import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { groupsStore, type Group } from '@/store/groupsStore';

interface City {
  id: number;
  name: string;
  x: number;
  y: number;
}

interface MapObject {
  id: number;
  type: 'base' | 'tower' | 'resource' | 'marker';
  x: number;
  y: number;
  owner: string;
}

const InteractiveMap = () => {
  const navigate = useNavigate();
  const [objects, setObjects] = useState<MapObject[]>([]);
  const [selectedTool, setSelectedTool] = useState<'base' | 'tower' | 'resource' | 'marker' | null>(null);
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);
  const [groups, setGroups] = useState<Group[]>(groupsStore.getGroups());

  useEffect(() => {
    const unsubscribe = groupsStore.subscribe(() => {
      setGroups(groupsStore.getGroups());
    });
    return unsubscribe;
  }, []);

  const cities: City[] = [
    { id: 1, name: 'Москва', x: 45, y: 42 },
    { id: 2, name: 'Санкт-Петербург', x: 40, y: 28 },
    { id: 3, name: 'Новосибирск', x: 72, y: 45 },
    { id: 4, name: 'Екатеринбург', x: 58, y: 40 },
    { id: 5, name: 'Казань', x: 52, y: 42 },
    { id: 6, name: 'Нижний Новгород', x: 48, y: 40 },
    { id: 7, name: 'Владивосток', x: 95, y: 52 },
    { id: 8, name: 'Красноярск', x: 78, y: 42 },
    { id: 9, name: 'Иркутск', x: 82, y: 46 },
    { id: 10, name: 'Хабаровск', x: 92, y: 48 },
  ];

  const tools = [
    { type: 'base' as const, icon: 'Home', label: 'БАЗА', color: 'from-red-600 to-red-800' },
    { type: 'tower' as const, icon: 'Zap', label: 'БАШНЯ', color: 'from-yellow-600 to-orange-700' },
    { type: 'resource' as const, icon: 'Package', label: 'РЕСУРС', color: 'from-green-600 to-emerald-700' },
    { type: 'marker' as const, icon: 'MapPin', label: 'МЕТКА', color: 'from-blue-600 to-cyan-700' },
  ];

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedTool) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newObject: MapObject = {
      id: Date.now(),
      type: selectedTool,
      x,
      y,
      owner: 'Александр',
    };

    setObjects([...objects, newObject]);
  };

  const removeObject = (id: number) => {
    setObjects(objects.filter(obj => obj.id !== id));
  };

  const getObjectIcon = (type: string) => {
    switch (type) {
      case 'base': return 'Home';
      case 'tower': return 'Zap';
      case 'resource': return 'Package';
      case 'marker': return 'MapPin';
      default: return 'Circle';
    }
  };

  const getObjectColor = (type: string) => {
    switch (type) {
      case 'base': return 'text-red-500';
      case 'tower': return 'text-yellow-500';
      case 'resource': return 'text-green-500';
      case 'marker': return 'text-blue-500';
      default: return 'text-primary';
    }
  };

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="cyber-card p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold neon-text">ПАНЕЛЬ УПРАВЛЕНИЯ</h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>ОБЪЕКТОВ: {objects.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {tools.map((tool) => (
            <Button
              key={tool.type}
              onClick={() => setSelectedTool(selectedTool === tool.type ? null : tool.type)}
              className={`flex flex-col items-center gap-1 h-auto py-3 transition-all ${
                selectedTool === tool.type
                  ? `bg-gradient-to-br ${tool.color} text-white neon-border`
                  : 'bg-muted hover:bg-muted/80 text-foreground border border-primary/20'
              }`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
            >
              <Icon name={tool.icon} size={20} />
              <span className="text-xs font-mono">{tool.label}</span>
            </Button>
          ))}
        </div>

        {selectedTool && (
          <div className="mt-3 p-2 bg-primary/10 border border-primary/30 text-xs text-primary font-mono"
               style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
            ▸ РЕЖИМ РАЗМЕЩЕНИЯ АКТИВЕН - КЛИКНИТЕ НА КАРТУ
          </div>
        )}
      </div>

      <div className="cyber-card p-6 flex-1 relative overflow-hidden">
        <div className="absolute top-4 left-4 text-xs text-primary/70 font-mono z-10">
          MAP://RUSSIA
        </div>

        <div
          className="w-full h-full relative bg-muted/30 cursor-crosshair border-2 border-primary/20"
          onClick={handleMapClick}
          style={{ 
            clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 20px, hsl(var(--primary) / 0.05) 20px, hsl(var(--primary) / 0.05) 21px),
              repeating-linear-gradient(90deg, transparent, transparent 20px, hsl(var(--primary) / 0.05) 20px, hsl(var(--primary) / 0.05) 21px)
            `,
            transform: 'perspective(1200px) rotateX(45deg) rotateZ(-2deg)',
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center'
          }}
        >
          <svg viewBox="0 0 100 60" className="w-full h-full" style={{ transform: 'translateZ(10px)', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.5))' }}>
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--muted) / 0.5)" />
                <stop offset="100%" stopColor="hsl(var(--muted) / 0.2)" />
              </linearGradient>
            </defs>
            <path
              d="M 15,25 L 20,20 L 30,22 L 35,18 L 45,20 L 50,25 L 55,22 L 65,25 L 75,28 L 85,30 L 95,32 L 98,38 L 95,45 L 90,50 L 80,52 L 70,50 L 60,48 L 50,50 L 40,52 L 30,50 L 20,48 L 15,42 L 12,35 L 15,25 Z"
              fill="url(#mapGradient)"
              stroke="hsl(var(--primary) / 0.7)"
              strokeWidth="0.5"
              className="hover:fill-primary/10 transition-all"
            />
          </svg>

          {cities.map((city) => (
            <div
              key={city.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ 
                left: `${city.x}%`, 
                top: `${city.y}%`,
                transform: 'translateZ(15px) translate(-50%, -50%)',
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" 
                   style={{ boxShadow: '0 0 20px hsl(var(--primary)), 0 8px 15px rgba(0,0,0,0.6)' }}></div>
              <div className="w-4 h-4 border-2 border-primary/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform"></div>
              
              {hoveredCity === city.id && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-card border border-primary/50 px-2 py-1 text-xs font-mono text-primary shadow-lg"
                       style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                    {city.name}
                  </div>
                </div>
              )}
            </div>
          ))}

          {groups.map((group) => (
            <div
              key={`group-${group.id}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ 
                left: `${group.x}%`, 
                top: `${group.y}%`,
                transform: 'translateZ(30px) translate(-50%, -50%)',
                transformStyle: 'preserve-3d'
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate('/groups');
                setTimeout(() => {
                  window.dispatchEvent(new CustomEvent('openGroup', { detail: group.id }));
                }, 100);
              }}
              onMouseEnter={() => setHoveredGroup(group.id)}
              onMouseLeave={() => setHoveredGroup(null)}
            >
              <div className="relative hover:scale-125 transition-all duration-300" 
                   style={{ 
                     transform: 'translateZ(20px)',
                     filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.8))'
                   }}>
                <div className="text-5xl relative" 
                     style={{ 
                       textShadow: '0 5px 15px rgba(0,0,0,0.8), 0 0 30px hsl(var(--primary))',
                       transform: 'rotateX(-45deg) rotateZ(2deg)'
                     }}>
                  {group.avatar}
                </div>
                <div className="absolute inset-0 blur-xl opacity-60 animate-pulse" 
                     style={{ 
                       background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
                       transform: 'translateZ(-10px)'
                     }}></div>
              </div>
              
              {hoveredGroup === group.id && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                  <div className="bg-card border border-primary/50 px-3 py-2 text-xs font-mono shadow-xl"
                       style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                    <div className="text-primary font-bold">{group.name}</div>
                    <div className="text-muted-foreground">{group.members.toLocaleString('ru-RU')} участников</div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {objects.map((obj) => (
            <div
              key={obj.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ 
                left: `${obj.x}%`, 
                top: `${obj.y}%`,
                transform: 'translateZ(25px) translate(-50%, -50%)',
                transformStyle: 'preserve-3d'
              }}
              onClick={(e) => {
                e.stopPropagation();
                removeObject(obj.id);
              }}
            >
              <div className={`${getObjectColor(obj.type)} relative`}
                   style={{ 
                     filter: 'drop-shadow(0 15px 20px rgba(0,0,0,0.7))',
                     transform: 'translateZ(10px)'
                   }}>
                <Icon name={getObjectIcon(obj.type)} size={24} className="drop-shadow-lg" />
                <div className="absolute inset-0 bg-current blur-md opacity-50 animate-pulse"></div>
              </div>
              
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <div className="bg-card border border-primary/50 px-2 py-1 text-[10px] font-mono"
                     style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                  <div className={getObjectColor(obj.type)}>{obj.type.toUpperCase()}</div>
                  <div className="text-muted-foreground">{obj.owner}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setObjects([])}
            className="bg-card/80 backdrop-blur border-primary/30 hover:bg-primary/20"
          >
            <Icon name="Trash2" size={16} className="mr-2" />
            ОЧИСТИТЬ
          </Button>
        </div>
      </div>

      <div className="cyber-card p-4">
        <h4 className="text-sm font-bold mb-2 text-primary">РАЗМЕЩЁННЫЕ ОБЪЕКТЫ</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={14} className="text-red-500" />
            <span>БАЗЫ: {objects.filter(o => o.type === 'base').length}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={14} className="text-yellow-500" />
            <span>БАШНИ: {objects.filter(o => o.type === 'tower').length}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Package" size={14} className="text-green-500" />
            <span>РЕСУРСЫ: {objects.filter(o => o.type === 'resource').length}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={14} className="text-blue-500" />
            <span>МЕТКИ: {objects.filter(o => o.type === 'marker').length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;