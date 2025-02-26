import { create } from 'zustand';

import { User } from '../models/user';

export type AppState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useStore = create<AppState>(set => ({
  user: null,
  setUser: (user) => set({user}),
  clearUser: () => set({user: null}),
}));
