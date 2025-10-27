import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Post from './Post';
import Icon from '@/components/ui/icon';

const ProfileTabs = () => {
  const userPosts = [
    {
      id: 1,
      author: 'Александр Петров',
      avatar: 'А',
      time: '1 день назад',
      content: 'Работаю над новым проектом! Скоро покажу результаты 🚀',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      initialLikes: 342,
      initialShares: 67,
      initialComments: 89,
      rank: 'МАСТЕР' as const,
    },
    {
      id: 2,
      author: 'Александр Петров',
      avatar: 'А',
      time: '3 дня назад',
      content: 'Отличная конференция по веб-разработке! Узнал много нового о современных технологиях.',
      initialLikes: 256,
      initialShares: 45,
      initialComments: 52,
      rank: 'МАСТЕР' as const,
    },
    {
      id: 3,
      author: 'Александр Петров',
      avatar: 'А',
      time: '5 дней назад',
      content: 'Завершил курс по TypeScript. Теперь буду применять на практике! 💪',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
      initialLikes: 489,
      initialShares: 92,
      initialComments: 134,
      rank: 'МАСТЕР' as const,
    },
  ];

  const photos = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
  ];

  const friends = [
    { name: 'Мария Иванова', avatar: 'М', mutual: 23 },
    { name: 'Дмитрий Петров', avatar: 'Д', mutual: 45 },
    { name: 'Екатерина Смирнова', avatar: 'Е', mutual: 12 },
    { name: 'Иван Козлов', avatar: 'И', mutual: 34 },
    { name: 'Анна Волкова', avatar: 'А', mutual: 56 },
    { name: 'Сергей Новиков', avatar: 'С', mutual: 28 },
  ];

  return (
    <Tabs defaultValue="posts" className="w-full">
      <TabsList className="w-full justify-start bg-card border border-border rounded-2xl p-1 mb-6">
        <TabsTrigger value="posts" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
          <Icon name="FileText" size={16} />
          Посты
        </TabsTrigger>
        <TabsTrigger value="photos" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
          <Icon name="Image" size={16} />
          Фото
        </TabsTrigger>
        <TabsTrigger value="friends" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
          <Icon name="Users" size={16} />
          Друзья
        </TabsTrigger>
      </TabsList>

      <TabsContent value="posts" className="space-y-6">
        {userPosts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </TabsContent>

      <TabsContent value="photos">
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo, idx) => (
            <div 
              key={idx} 
              className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
            >
              <img 
                src={photo} 
                alt={`Photo ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="friends">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {friends.map((friend, idx) => (
            <div 
              key={idx}
              className="bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {friend.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{friend.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {friend.mutual} общих друзей
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity">
                  <Icon name="MessageCircle" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;