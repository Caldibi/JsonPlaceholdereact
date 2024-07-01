import create from 'zustand';

interface Photo {
  userId?: number;
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}


 export const useFavoritesStore = create<{photos: Photo[];
  addPhotoToFavorites: (photo: Photo) => void;
}>((set) => ({
  photos: [],

 
  addPhotoToFavorites: (photo) =>
    set((state) => {
    
        return { photos: [...state.photos, photo] }; 
    }),
    deletePhotoFromFavorites: (photoId: number) =>
      set((state) => {
        return { photos: state.photos.filter((p) => p.id !== photoId) };
      }),
}));


