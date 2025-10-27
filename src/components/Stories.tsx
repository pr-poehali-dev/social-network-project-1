import Icon from '@/components/ui/icon';

const Stories = () => {
  const stories = [
    { id: 1, name: 'ВАШ СТАТУС', avatar: 'А', gradient: 'from-primary to-secondary', isYours: true },
    { id: 2, name: 'МАРИЯ', avatar: 'М', gradient: 'from-secondary to-accent' },
    { id: 3, name: 'ДМИТРИЙ', avatar: 'Д', gradient: 'from-accent to-primary' },
    { id: 4, name: 'ЕКАТЕРИНА', avatar: 'Е', gradient: 'from-primary via-secondary to-accent' },
    { id: 5, name: 'ИВАН', avatar: 'И', gradient: 'from-secondary to-primary' },
  ];

  return (
    <div className="cyber-card p-4 mb-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 text-xs text-primary/50 font-mono px-3 py-1 bg-primary/10 border-b border-r border-primary/30"
           style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}>
        STORIES//ACTIVE
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2 pt-6 cyber-grid">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-2 min-w-fit cursor-pointer group">
            <div className="relative">
              <div className={`relative w-16 h-16 bg-gradient-to-br ${story.gradient} p-[2px] hover:scale-110 transition-transform`}
                   style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                <div className="w-full h-full bg-card flex items-center justify-center"
                     style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                  <span className={`font-bold text-lg bg-gradient-to-br ${story.gradient} bg-clip-text text-transparent`}>
                    {story.avatar}
                  </span>
                </div>
              </div>
              {story.isYours && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary flex items-center justify-center border-2 border-card"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <Icon name="Plus" size={12} className="text-background" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-xs text-primary/70 group-hover:text-primary transition-colors font-mono tracking-wider">
              {story.name}
            </span>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/10 to-transparent blur-2xl"></div>
    </div>
  );
};

export default Stories;
