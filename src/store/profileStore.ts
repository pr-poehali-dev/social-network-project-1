export interface UserProfile {
  id: string;
  name: string;
  gender: 'male' | 'female';
  rating: number;
  level: number;
}

class ProfileStore {
  private profile: UserProfile = {
    id: '1',
    name: 'Игрок',
    gender: 'male',
    rating: 1500,
    level: 1,
  };

  private listeners: Array<() => void> = [];

  getProfile(): UserProfile {
    return this.profile;
  }

  setGender(gender: 'male' | 'female'): void {
    this.profile.gender = gender;
    this.notify();
  }

  updateProfile(updates: Partial<UserProfile>): void {
    this.profile = { ...this.profile, ...updates };
    this.notify();
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => listener());
  }
}

export const profileStore = new ProfileStore();
