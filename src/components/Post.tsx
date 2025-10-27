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
    <div className="bg-card rounded-2xl shadow-sm border border-border p-6 animate-fade-in hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="w-12 h-12 ring-2 ring-primary/20">
          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
            {avatar}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{author}</h3>
          <p className="text-sm text-muted-foreground">{time}</p>
        </div>
      </div>

      <p className="mb-4 text-foreground leading-relaxed">{content}</p>

      {image && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <img 
            src={image} 
            alt="Post content" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex items-center gap-6 py-3 border-t border-b border-border">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 transition-all ${
            isLiked ? 'text-secondary scale-110' : 'text-muted-foreground hover:text-secondary'
          }`}
        >
          <Icon name="Heart" size={20} className={isLiked ? 'fill-current' : ''} />
          <span className="font-medium">{likes}</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <Icon name="Share2" size={20} />
          <span className="font-medium">{shares}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon name="MessageCircle" size={20} />
          <span className="font-medium">{comments}</span>
        </button>
      </div>

      {showComments && (
        <div className="mt-4 space-y-3 animate-scale-in">
          <div className="flex gap-2">
            <Textarea
              placeholder="Написать комментарий..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="resize-none"
              rows={2}
            />
            <Button 
              onClick={handleComment}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
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
