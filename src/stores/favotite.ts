import { create } from 'zustand'

interface Favorite {
  fav: number;
  increase: () => void;
  unFav: () => void;
}

 export const useFavoriteStore = create<Favorite>()((set) => ({
  fav: 0,
  increase: () => set((state) => ({ fav: state.fav + 1 })),
  unFav: () => set((state) => ({ fav: state.fav - 1 })),
}));