import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import PostCard from '@/components/PostCard';

interface GroupViewProps {
  groupId: number;
  onBack: () => void;
}

const GroupView = ({ groupId, onBack }: GroupViewProps) => {
  const [postText, setPostText] = useState('');
  const [isJoined, setIsJoined] = useState(true);

  const groupData = {
    1: {
      name: 'Веб-разработка',
      avatar: '💻',
      members: 15234,
      description: 'Сообщество веб-разработчиков. Делимся знаниями, опытом и новостями из мира веб-технологий.',
      category: 'Технологии',
      posts: 1289,
      cover: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    2: {
      name: 'Дизайн и UX',
      avatar: '🎨',
      members: 8921,
      description: 'Всё о современном дизайне, UX/UI, трендах и инструментах.',
      category: 'Дизайн',
      posts: 756,
      cover: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    3: {
      name: 'Путешествия',
      avatar: '✈️',
      members: 23456,
      description: 'Делимся впечатлениями о поездках, советами и красивыми фото.',
      category: 'Образ жизни',
      posts: 2134,
      cover: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  };

  const group = groupData[groupId as keyof typeof groupData] || groupData[1];

  const posts = [
    {
      id: 1,
      author: 'Алексей Смирнов',
      avatar: 'А',
      rating: 4200,
      time: '2 часа назад',
      content: 'Отличная статья о новых возможностях CSS Grid! Всем рекомендую к прочтению 🚀',
      likes: 124,
      comments: 18,
      shares: 9,
    },
    {
      id: 2,
      author: 'Мария Петрова',
      avatar: 'М',
      rating: 3800,
      time: '5 часов назад',
      content: 'Поделюсь своим опытом внедрения TypeScript в большой проект. Кто сталкивался с подобным?',
      likes: 89,
      comments: 34,
      shares: 12,
    },
  ];

  const handleCreatePost = () => {
    if (postText.trim()) {
      setPostText('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className="relative h-48 rounded-t-2xl"
        style={{ background: group.cover }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="absolute top-4 left-4 bg-black/20 hover:bg-black/40 text-white"
        >
          <Icon name="ArrowLeft" size={20} />
        </Button>
      </div>

      <div className="bg-card border border-border rounded-b-2xl p-6 -mt-16 relative">
        <div className="flex items-end justify-between mb-4">
          <div className="flex items-end gap-4">
            <Avatar className="w-24 h-24 text-5xl border-4 border-card">
              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20">
                {group.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="mb-2">
              <h1 className="text-3xl font-bold">{group.name}</h1>
              <p className="text-muted-foreground">{group.category}</p>
            </div>
          </div>

          <Button
            onClick={() => setIsJoined(!isJoined)}
            variant={isJoined ? 'outline' : 'default'}
            className={
              !isJoined
                ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity'
                : ''
            }
          >
            {isJoined ? (
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

        <p className="text-sm mb-4">{group.description}</p>

        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="Users" size={16} />
            <span>{group.members.toLocaleString('ru-RU')} участников</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="FileText" size={16} />
            <span>{group.posts.toLocaleString('ru-RU')} постов</span>
          </div>
        </div>
      </div>

      {isJoined && (
        <div className="bg-card border border-border rounded-2xl p-6 mt-6">
          <div className="flex gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                В
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Поделитесь чем-нибудь с группой..."
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className="mb-3 resize-none"
                rows={3}
              />
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Icon name="Image" size={18} className="mr-2" />
                    Фото
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Video" size={18} className="mr-2" />
                    Видео
                  </Button>
                </div>
                <Button
                  onClick={handleCreatePost}
                  disabled={!postText.trim()}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  Опубликовать
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default GroupView;
