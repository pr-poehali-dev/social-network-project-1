interface Group {
  id: number;
  name: string;
  avatar: string;
  members: number;
  description: string;
  isJoined: boolean;
  category: string;
  x?: number;
  y?: number;
}

class GroupsStore {
  private groups: Group[] = [
    {
      id: 1,
      name: 'Веб-разработка',
      avatar: '💻',
      members: 15234,
      description: 'Сообщество веб-разработчиков',
      isJoined: true,
      category: 'Технологии',
      x: 45,
      y: 42,
    },
    {
      id: 2,
      name: 'Дизайн и UX',
      avatar: '🎨',
      members: 8921,
      description: 'Всё о современном дизайне',
      isJoined: true,
      category: 'Дизайн',
      x: 55,
      y: 38,
    },
    {
      id: 3,
      name: 'Путешествия',
      avatar: '✈️',
      members: 23456,
      description: 'Делимся впечатлениями о поездках',
      isJoined: false,
      category: 'Образ жизни',
      x: 72,
      y: 45,
    },
    {
      id: 4,
      name: 'Фотография',
      avatar: '📸',
      members: 12890,
      description: 'Искусство фотографии',
      isJoined: true,
      category: 'Творчество',
      x: 40,
      y: 28,
    },
    {
      id: 5,
      name: 'Кулинария',
      avatar: '🍳',
      members: 19234,
      description: 'Рецепты и кулинарные советы',
      isJoined: false,
      category: 'Еда',
      x: 58,
      y: 40,
    },
  ];

  private listeners: Array<() => void> = [];

  getGroups(): Group[] {
    return [...this.groups];
  }

  addGroup(group: Omit<Group, 'id' | 'members' | 'isJoined'>): void {
    const newGroup: Group = {
      ...group,
      id: this.groups.length + 1,
      members: 1,
      isJoined: true,
      x: group.x || Math.random() * 80 + 10,
      y: group.y || Math.random() * 40 + 20,
    };
    this.groups = [newGroup, ...this.groups];
    this.notifyListeners();
  }

  toggleJoin(groupId: number): void {
    this.groups = this.groups.map((group) =>
      group.id === groupId ? { ...group, isJoined: !group.isJoined } : group
    );
    this.notifyListeners();
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }
}

export const groupsStore = new GroupsStore();
export type { Group };
