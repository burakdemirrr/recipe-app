import { create } from 'zustand'

export type Recipe = {
  id: string
  title: string
  description: string
  ingredients: string[]
  instructions: string[]
  category: string
  image: string
  prepTime: string
  cookTime: string
  servings: number
}

type RecipeStore = {
  selectedCategory: string
  searchQuery: string
  setSelectedCategory: (category: string) => void
  setSearchQuery: (query: string) => void
}

export const useStore = create<RecipeStore>((set) => ({
  selectedCategory: 'all',
  searchQuery: '',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
})) 