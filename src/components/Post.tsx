import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';

interface PostProps {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  initialLikes: number;
  initialShares: number;
  initialComments: number;
}

const Post = ({ author, avatar, time, content, image, initialLikes, initialShares, initialComments }: PostProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [shares, setShares] = useState(initialShares);
  const [comments, setComments] = useState(initialComments);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  const handleComment = () => {
    if (commentText.trim()) {
      setComments(comments + 1);
      setCommentText('');
      setShowComments(true);
    }
  };

  return (
    <div className="cyber-card p-6 animate-fade-in hover:shadow-lg hover:shadow-primary/20 transition-all relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/5 blur-3xl"></div>
      
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <Avatar className="w-12 h-12 border-2 border-primary/30">
          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-background font-bold">
            {avatar}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold tracking-wide">{author}</h3>
          <p className="text-sm text-primary/70">{time}</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-primary">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>ONLINE</span>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4"></div>

      <p className="mb-4 text-foreground leading-relaxed relative z-10">{content}</p>

      {image && (
        <div className="mb-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"></div>
          <img 
            src={image} 
            alt="Post content" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
          />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
        </div>
      )}

      <div className="flex items-center gap-6 py-3 border-t border-b border-primary/20 relative z-10">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 transition-all group ${
            isLiked ? 'text-secondary scale-110' : 'text-muted-foreground hover:text-secondary'
          }`}
        >
          <div className="relative">
            <Icon name="Heart" size={20} className={isLiked ? 'fill-current' : ''} />
            {isLiked && <div className="absolute inset-0 bg-secondary/30 blur-lg"></div>}
          </div>
          <span className="font-mono font-medium">{likes.toLocaleString()}</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-all group"
        >
          <Icon name="Share2" size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="font-mono font-medium">{shares.toLocaleString()}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all"
        >
          <Icon name="MessageCircle" size={20} />
          <span className="font-mono font-medium">{comments.toLocaleString()}</span>
        </button>

        <div className="ml-auto text-xs text-primary/50 font-mono">
          #{Math.random().toString(36).substr(2, 6).toUpperCase()}
        </div>
      </div>

      {showComments && (
        <div className="mt-4 space-y-3 animate-scale-in relative z-10">
          <div className="flex gap-2">
            <Textarea
              placeholder="ВВЕДИТЕ СООБЩЕНИЕ..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="resize-none bg-background/50 border-primary/30 focus:border-primary"
              rows={2}
            />
            <Button 
              onClick={handleComment}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 neon-border"
            >
              <Icon name="Send" size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
