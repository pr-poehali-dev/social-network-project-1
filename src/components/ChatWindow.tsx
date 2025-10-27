import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import RatingBattery from '@/components/RatingBattery';

interface Message {
  id: number;
  text: string;
  time: string;
  isMine: boolean;
}

interface ChatWindowProps {
  chatId: number | null;
}

const ChatWindow = ({ chatId }: ChatWindowProps) => {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Привет! Как дела?', time: '10:30', isMine: false },
    { id: 2, text: 'Привет! Всё отлично, работаю над новым проектом 😊', time: '10:32', isMine: true },
    { id: 3, text: 'Круто! Расскажешь подробнее?', time: '10:33', isMine: false },
    { id: 4, text: 'Конечно! Это социальная сеть с современным дизайном', time: '10:35', isMine: true },
    { id: 5, text: 'Отличная идея! Давай обсудим завтра', time: '14:23', isMine: false },
  ]);

  const chatInfo = {
    1: { name: 'Мария Иванова', avatar: 'М', online: true, rating: 3200 },
    2: { name: 'Дмитрий Петров', avatar: 'Д', online: true, rating: 4800 },
    3: { name: 'Екатерина Смирнова', avatar: 'Е', online: false, rating: 3800 },
    4: { name: 'Иван Козлов', avatar: 'И', online: false, rating: 850 },
    5: { name: 'Анна Волкова', avatar: 'А', online: true, rating: 2900 },
  };

  const currentChat = chatId ? chatInfo[chatId as keyof typeof chatInfo] : null;

  const handleSendMessage = () => {
    if (messageText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: messageText,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        isMine: true,
      };
      setMessages([...messages, newMessage]);
      setMessageText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!chatId || !currentChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted/20">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Icon name="MessageCircle" size={40} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Выберите чат</h3>
          <p className="text-muted-foreground">Начните общение с друзьями</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background">
      <div className="p-4 border-b border-border bg-card flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                {currentChat.avatar}
              </AvatarFallback>
            </Avatar>
            {currentChat.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{currentChat.name}</h3>
              <RatingBattery rating={currentChat.rating} size="sm" showValue={true} />
            </div>
            <p className="text-sm text-muted-foreground">
              {currentChat.online ? 'В сети' : 'Не в сети'}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Icon name="Phone" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Video" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="MoreVertical" size={20} />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isMine ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-md px-4 py-3 rounded-2xl ${
                message.isMine
                  ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-br-sm'
                  : 'bg-card border border-border rounded-bl-sm'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p className={`text-xs mt-1 ${message.isMine ? 'text-white/70' : 'text-muted-foreground'}`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-border bg-card">
        <div className="flex items-end gap-2">
          <Button variant="ghost" size="icon" className="mb-1">
            <Icon name="Paperclip" size={20} />
          </Button>
          
          <div className="flex-1">
            <Input
              placeholder="Напишите сообщение..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="resize-none"
            />
          </div>

          <Button variant="ghost" size="icon" className="mb-1">
            <Icon name="Smile" size={20} />
          </Button>

          <Button
            onClick={handleSendMessage}
            disabled={!messageText.trim()}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity mb-1"
            size="icon"
          >
            <Icon name="Send" size={20} className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;