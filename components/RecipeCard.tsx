'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Recipe } from '@/store/useStore'
import { FiClock, FiUsers } from 'react-icons/fi'

type RecipeCardProps = {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
    >
      <div className="relative aspect-[3/2]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FiClock className="w-4 h-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiUsers className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </Link>
  )
} 