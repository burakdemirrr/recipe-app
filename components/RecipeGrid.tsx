'use client'

import React, { useMemo, useCallback } from 'react'
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
      const response = await axios.get<Recipe[]>('/api/recipes')
      return response.data
    },
    gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  })

  const matchesCategory = useCallback((recipe: Recipe) => {
    return selectedCategory === 'all' || recipe.category.toLowerCase() === selectedCategory
  }, [selectedCategory])

  const matchesSearch = useCallback((recipe: Recipe) => {
    if (!searchQuery.trim()) {
      return true
    }

    const searchTerms = searchQuery.toLowerCase().split(' ')
    const recipeText = `${recipe.title} ${recipe.description} ${recipe.category}`.toLowerCase()
    return searchTerms.every(term => recipeText.includes(term))
  }, [searchQuery])

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe: Recipe) => {
      return matchesCategory(recipe) && matchesSearch(recipe)
    })
  }, [recipes, matchesCategory, matchesSearch])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 animate-pulse rounded-lg aspect-[3/4]"
          />
        ))}
      </div>
    )
  }

  if (filteredRecipes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No recipes found</h3>
        <p className="text-gray-600">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredRecipes.map((recipe: Recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
} 