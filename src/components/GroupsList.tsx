import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CreateGroupModal from '@/components/CreateGroupModal';

interface Group {
  id: number;
  name: string;
  avatar: string;
  members: number;
  description: string;
  isJoined: boolean;
  category: string;
}

interface GroupsListProps {
  onGroupClick: (groupId: number) => void;
}

const GroupsList = ({ onGroupClick }: GroupsListProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      name: 'Веб-разработка',
      avatar: '💻',
      members: 15234,
      description: 'Сообщество веб-разработчиков',
      isJoined: true,
      category: 'Технологии',
    },
    {
      id: 2,
      name: 'Дизайн и UX',
      avatar: '🎨',
      members: 8921,
      description: 'Всё о современном дизайне',
      isJoined: true,
      category: 'Дизайн',
    },
    {
      id: 3,
      name: 'Путешествия',
      avatar: '✈️',
      members: 23456,
      description: 'Делимся впечатлениями о поездках',
      isJoined: false,
      category: 'Образ жизни',
    },
    {
      id: 4,
      name: 'Фотография',
      avatar: '📸',
      members: 12890,
      description: 'Искусство фотографии',
      isJoined: true,
      category: 'Творчество',
    },
    {
      id: 5,
      name: 'Кулинария',
      avatar: '🍳',
      members: 19234,
      description: 'Рецепты и кулинарные советы',
      isJoined: false,
      category: 'Еда',
    },
  ]);

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleJoin = (groupId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setGroups(
      groups.map((group) =>
        group.id === groupId ? { ...group, isJoined: !group.isJoined } : group
      )
    );
  };

  const handleCreateGroup = (newGroup: Omit<Group, 'id' | 'members' | 'isJoined'>) => {
    const group: Group = {
      ...newGroup,
      id: groups.length + 1,
      members: 1,
      isJoined: true,
    };
    setGroups([group, ...groups]);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Группы
        </h2>
        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        >
          <Icon name="Plus" size={20} className="mr-2" />
          Создать группу
        </Button>
      </div>

      <div className="mb-6 relative">
        <Icon
          name="Search"
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          type="text"
          placeholder="Поиск групп..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="space-y-4">
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            onClick={() => onGroupClick(group.id)}
            className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16 text-3xl">
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20">
                  {group.avatar}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{group.name}</h3>
                    <p className="text-sm text-muted-foreground">{group.category}</p>
                  </div>
                  <Button
                    onClick={(e) => handleToggleJoin(group.id, e)}
                    variant={group.isJoined ? 'outline' : 'default'}
                    className={
                      !group.isJoined
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity'
                        : ''
                    }
                  >
                    {group.isJoined ? (
                      <>
                        <Icon name="Check" size={16} className="mr-2" />
                        Участник
                      </>
                    ) : (
                      <>
                        <Icon name="Plus" size={16} className="mr-2" />
                        Вступить
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-sm mb-3">{group.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={16} />
                    <span>{group.members.toLocaleString('ru-RU')} участников</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Группы не найдены</p>
          </div>
        )}
      </div>

      <CreateGroupModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateGroup={handleCreateGroup}
      />
    </div>
  );
};

export default GroupsList;
