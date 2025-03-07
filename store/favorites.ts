import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Animal } from '@/dummy-data/types';

interface FavoritesState {
    favorites: Animal[];
    addFavorite: (pet: Animal) => void;
    removeFavorite: (petId: number) => void;
    isFavorite: (petId: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
    persist(
        (set, get) => ({
            favorites: [],
            addFavorite: (pet) =>
                set((state) => ({
                    favorites: [...state.favorites, pet],
                })),
            removeFavorite: (petId) =>
                set((state) => ({
                    favorites: state.favorites.filter((pet) => pet.id !== petId),
                })),
            isFavorite: (petId) =>
                get().favorites.some((pet) => pet.id === petId),
        }),
        {
            name: 'favorites-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
); 