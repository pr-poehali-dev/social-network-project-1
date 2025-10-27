import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const CreatePost = () => {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (postText.trim()) {
      setPostText('');
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border p-6 mb-6">
      <div className="flex gap-3">
        <Avatar className="w-12 h-12 ring-2 ring-primary/20">
          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
            А
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-3">
          <Textarea
            placeholder="Что у вас нового?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="resize-none min-h-24 text-base"
            rows={3}
          />
          
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Icon name="Image" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                <Icon name="Video" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-secondary">
                <Icon name="Smile" size={20} />
              </Button>
            </div>
            
            <Button 
              onClick={handlePost}
              disabled={!postText.trim()}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <Icon name="Send" size={18} className="mr-2" />
              Опубликовать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
