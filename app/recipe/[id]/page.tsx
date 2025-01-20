'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import { FiClock, FiUsers } from 'react-icons/fi'
import type { Recipe } from '@/store/useStore'
import Link from 'next/link'

export default function RecipePage({ params }: { params: { id: string } }) {
  const { data: recipe, isLoading } = useQuery<Recipe>({
    queryKey: ['recipe', params.id],
    queryFn: async () => {
      const response = await axios.get(`/api/recipes/${params.id}`)
      return response.data
    },
  })

  if (isLoading || !recipe) {
    return (
      <div className="container mx-auto px-4 py-8 animate-pulse">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-200 h-8 w-1/3 mb-4 rounded" />
          <div className="bg-gray-200 aspect-video w-full mb-8 rounded" />
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-4 w-full rounded" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          ← Back to recipes
        </Link>
        <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-6 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <FiClock className="w-5 h-5" />
            <span>Cook time: {recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiUsers className="w-5 h-5" />
            <span>Servings: {recipe.servings}</span>
          </div>
        </div>
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="mb-8">{recipe.description}</p>
          
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="mb-8">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal pl-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="mb-4">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  )
} 