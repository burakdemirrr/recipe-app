'use client'

import React from 'react'
import { useStore } from '@/store/useStore'
import { RecipeCard } from './RecipeCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Recipe } from '@/store/useStore'

export function RecipeGrid() {
  const { selectedCategory, searchQuery } = useStore()

  const { data: recipes = [], isLoading } = useQuery<Recipe[]>({
    queryKey: ['recipes'],
    queryFn: async () => {
      const response = await axios.get('/api/recipes')
      return response.data
    },
  })

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      selectedCategory === 'all' || recipe.category.toLowerCase() === selectedCategory
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 animate-pulse rounded-lg aspect-[3/4]"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
} 