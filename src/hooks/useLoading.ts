import {create} from 'zustand';

// Definisikan tipe state
interface LoadingState {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

// Buat store untuk state loading
const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));

export default useLoadingStore;
``
