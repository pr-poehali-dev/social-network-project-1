import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface CreateGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateGroup: (group: { name: string; avatar: string; description: string; category: string }) => void;
}

const CreateGroupModal = ({ isOpen, onClose, onCreateGroup }: CreateGroupModalProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('📁');

  const emojis = [
    '💻', '🎨', '📸', '🎵', '🎮', '⚽', '🍳', '✈️',
    '📚', '🎬', '🏋️', '🧘', '🎯', '🚀', '💼', '🌟',
  ];

  const categories = [
    'Технологии',
    'Дизайн',
    'Творчество',
    'Спорт',
    'Образ жизни',
    'Еда',
    'Путешествия',
    'Бизнес',
    'Образование',
    'Развлечения',
  ];

  const handleSubmit = () => {
    if (name.trim() && description.trim() && category) {
      onCreateGroup({
        name: name.trim(),
        avatar: selectedEmoji,
        description: description.trim(),
        category,
      });
      setName('');
      setDescription('');
      setCategory('');
      setSelectedEmoji('📁');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-2xl max-w-lg w-full p-6 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Создать группу
          </h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Аватар группы</label>
            <div className="flex flex-wrap gap-2">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`text-3xl w-12 h-12 rounded-lg transition-all ${
                    selectedEmoji === emoji
                      ? 'bg-gradient-to-br from-primary/20 to-secondary/20 scale-110'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Название группы</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите название группы"
              maxLength={50}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Категория</label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    category === cat
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Описание</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Расскажите о группе..."
              rows={4}
              maxLength={200}
            />
            <p className="text-xs text-muted-foreground mt-1">
              {description.length}/200 символов
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSubmit}
              disabled={!name.trim() || !description.trim() || !category}
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <Icon name="Check" size={20} className="mr-2" />
              Создать группу
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Отмена
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
