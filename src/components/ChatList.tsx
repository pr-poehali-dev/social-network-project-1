import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import RatingBattery from '@/components/RatingBattery';

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  rating: number;
}

interface ChatListProps {
  onSelectChat: (chatId: number) => void;
  selectedChatId: number | null;
}

const ChatList = ({ onSelectChat, selectedChatId }: ChatListProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const chats: Chat[] = [
    {
      id: 1,
      name: 'Мария Иванова',
      avatar: 'М',
      lastMessage: 'Отличная идея! Давай обсудим завтра',
      time: '14:23',
      unread: 2,
      online: true,
      rating: 3200,
    },
    {
      id: 2,
      name: 'Дмитрий Петров',
      avatar: 'Д',
      lastMessage: 'Спасибо за помощь!',
      time: '12:45',
      unread: 0,
      online: true,
      rating: 4800,
    },
    {
      id: 3,
      name: 'Екатерина Смирнова',
      avatar: 'Е',
      lastMessage: 'Посмотри, пожалуйста, файлы',
      time: '11:20',
      unread: 5,
      online: false,
      rating: 3800,
    },
    {
      id: 4,
      name: 'Иван Козлов',
      avatar: 'И',
      lastMessage: 'Созвонимся вечером?',
      time: 'Вчера',
      unread: 0,
      online: false,
      rating: 850,
    },
    {
      id: 5,
      name: 'Анна Волкова',
      avatar: 'А',
      lastMessage: 'Классный проект получился!',
      time: 'Вчера',
      unread: 1,
      online: true,
      rating: 2900,
    },
  ];

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Сообщения</h2>
          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center hover:opacity-90 transition-opacity">
            <Icon name="Plus" size={20} className="text-white" />
          </button>
        </div>
        
        <div className="relative">
          <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Поиск сообщений..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`w-full p-4 flex items-center gap-3 hover:bg-muted transition-colors border-b border-border ${
              selectedChatId === chat.id ? 'bg-muted' : ''
            }`}
          >
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                  {chat.avatar}
                </AvatarFallback>
              </Avatar>
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
              )}
            </div>

            <div className="flex-1 text-left overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold truncate">{chat.name}</p>
                  <RatingBattery rating={chat.rating} size="sm" showValue={false} />
                </div>
                <span className="text-xs text-muted-foreground">{chat.time}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
            </div>

            {chat.unread > 0 && (
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                <span className="text-xs font-bold text-white">{chat.unread}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatList;