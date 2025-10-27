import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ChatList from '@/components/ChatList';
import ChatWindow from '@/components/ChatWindow';

const Messages = () => {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(1);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex">
        <ChatList onSelectChat={setSelectedChatId} selectedChatId={selectedChatId} />
        <ChatWindow chatId={selectedChatId} />
      </div>
    </div>
  );
};

export default Messages;
