interface UserRankProps {
  rank: 'НОВИЧОК' | 'УЧАСТНИК' | 'ЭКСПЕРТ' | 'МАСТЕР' | 'ЛЕГЕНДА' | 'АДМИН';
  level?: number;
  compact?: boolean;
}

const UserRank = ({ rank, level, compact = false }: UserRankProps) => {
  const rankConfig = {
    'НОВИЧОК': { 
      color: 'from-gray-500 to-gray-600', 
      border: 'border-gray-500/50',
      glow: 'shadow-gray-500/20',
      icon: '▪'
    },
    'УЧАСТНИК': { 
      color: 'from-green-500 to-emerald-600', 
      border: 'border-green-500/50',
      glow: 'shadow-green-500/30',
      icon: '▸'
    },
    'ЭКСПЕРТ': { 
      color: 'from-blue-500 to-cyan-600', 
      border: 'border-cyan-500/50',
      glow: 'shadow-cyan-500/30',
      icon: '◆'
    },
    'МАСТЕР': { 
      color: 'from-purple-500 to-pink-600', 
      border: 'border-purple-500/50',
      glow: 'shadow-purple-500/40',
      icon: '★'
    },
    'ЛЕГЕНДА': { 
      color: 'from-yellow-500 to-orange-600', 
      border: 'border-yellow-500/50',
      glow: 'shadow-yellow-500/40',
      icon: '◈'
    },
    'АДМИН': { 
      color: 'from-red-500 to-rose-600', 
      border: 'border-red-500/50',
      glow: 'shadow-red-500/50',
      icon: '●'
    },
  };

  const config = rankConfig[rank];

  if (compact) {
    return (
      <div className={`inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r ${config.color} text-background text-xs font-bold tracking-wider border ${config.border}`}
           style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
        <span>{config.icon}</span>
        <span>{rank}</span>
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${config.color} text-background font-bold tracking-wider border-2 ${config.border} ${config.glow} shadow-lg`}
         style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
      <div className="absolute top-0 right-0 w-2 h-2 bg-white/50"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-black/30"></div>
      
      <span className="text-lg">{config.icon}</span>
      <div className="flex flex-col leading-none">
        <span className="text-sm">{rank}</span>
        {level && <span className="text-[10px] opacity-80">LVL {level}</span>}
      </div>
      
      <div className={`absolute -inset-px bg-gradient-to-r ${config.color} opacity-50 blur-sm -z-10`}
           style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}></div>
    </div>
  );
};

export default UserRank;
