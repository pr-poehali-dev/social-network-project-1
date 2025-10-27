import Icon from '@/components/ui/icon';

const Stories = () => {
  const stories = [
    { id: 1, name: 'Ваша история', avatar: 'А', gradient: 'from-primary to-secondary', isYours: true },
    { id: 2, name: 'Мария', avatar: 'М', gradient: 'from-secondary to-accent' },
    { id: 3, name: 'Дмитрий', avatar: 'Д', gradient: 'from-accent to-primary' },
    { id: 4, name: 'Екатерина', avatar: 'Е', gradient: 'from-primary via-secondary to-accent' },
    { id: 5, name: 'Иван', avatar: 'И', gradient: 'from-secondary to-primary' },
  ];

  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border p-4 mb-6">
      <div className="flex gap-4 overflow-x-auto pb-2">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-2 min-w-fit cursor-pointer group">
            <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${story.gradient} p-[3px] hover:scale-110 transition-transform`}>
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className={`font-bold text-lg bg-gradient-to-br ${story.gradient} bg-clip-text text-transparent`}>
                  {story.avatar}
                </span>
              </div>
              {story.isYours && (
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-card">
                  <Icon name="Plus" size={14} className="text-white" />
                </div>
              )}
            </div>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              {story.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
