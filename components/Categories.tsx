'use client'

import React from 'react'
import { useStore } from '@/store/useStore'
import { cn } from '@/lib/utils'

const categories = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Snacks',
  'Vegetarian',
  'Vegan',
]

export function Categories() {
  const { selectedCategory, setSelectedCategory } = useStore()

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category.toLowerCase())}
          className={cn(
            'px-4 py-2 rounded-full transition-all',
            selectedCategory === category.toLowerCase()
              ? 'bg-primary text-white'
              : 'bg-secondary hover:bg-secondary/80'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
} 