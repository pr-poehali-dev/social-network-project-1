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
    <div className="cyber-card p-6 mb-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="flex items-start gap-4 mb-4">
        <div className="text-xs text-primary/70 font-mono">NEW_POST//</div>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent mt-2"></div>
      </div>

      <div className="flex gap-3">
        <Avatar className="w-12 h-12 border-2 border-primary/30">
          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-background font-bold">
            А
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-3">
          <Textarea
            placeholder="НОВОЕ СООБЩЕНИЕ..."
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="resize-none min-h-24 text-base bg-background/50 border-primary/30 focus:border-primary font-mono"
            rows={3}
          />
          
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 border border-primary/20"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                <Icon name="Image" size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-accent hover:bg-accent/10 border border-accent/20"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                <Icon name="Video" size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-secondary hover:bg-secondary/10 border border-secondary/20"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                <Icon name="Smile" size={20} />
              </Button>
            </div>
            
            <Button 
              onClick={handlePost}
              disabled={!postText.trim()}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity neon-border font-mono tracking-wider"
            >
              <Icon name="Send" size={18} className="mr-2" />
              ОТПРАВИТЬ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
