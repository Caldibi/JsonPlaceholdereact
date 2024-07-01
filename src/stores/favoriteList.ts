import create from 'zustand';

interface Photo{
  userId?: number;
  albumId: number;
  id: number | undefined;
  title: string;
  url: string;
  thumbnailUrl: string;
  photoId:number | undefined;
}


 export const useFavoritesStore = create<{photos: Photo[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addPhotoToFavorites: (photo: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deletePhotoFromFavorites: (photoId: any) => void;

}>((set) => ({
  photos: [],

  addPhotoToFavorites: (photo) =>
    set((state) => {
    
        return { photos: [...state.photos, photo] }; 
    }),
    deletePhotoFromFavorites: (photoId) =>
      set((state) => {
          return { photos: state.photos.filter((p) => p.id !== photoId)};
      }),
    
}));




