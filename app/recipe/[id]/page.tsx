'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { FiClock, FiUsers, FiChevronLeft, FiHeart, FiShare2, FiPrinter, FiBookmark } from 'react-icons/fi'
import type { Recipe } from '@/store/useStore'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

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
        <div className="max-w-5xl mx-auto">
          <div className="h-8 w-32 bg-gray-200 rounded mb-8" />
          <div className="aspect-[21/9] w-full bg-gray-200 rounded-3xl mb-8" />
          <div className="space-y-4">
            <div className="h-8 w-2/3 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-5xl mx-auto">
              <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
                <Link
                  href="/"
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
                >
                  <FiChevronLeft className="w-5 h-5 mr-2" />
                  Back to recipes
                </Link>
              </motion.div>
              <motion.h1 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                {recipe.title}
              </motion.h1>
              <motion.p 
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/80 max-w-3xl"
              >
                {recipe.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative -mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Action Buttons */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.4 }}
              className="flex items-center justify-end space-x-2 mb-12"
            >
              <button className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all text-gray-700 hover:text-primary">
                <FiHeart className="w-5 h-5 mr-2" />
                <span>Save Recipe</span>
              </button>
              <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all text-gray-700 hover:text-primary">
                <FiShare2 className="w-5 h-5" />
              </button>
              <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all text-gray-700 hover:text-primary">
                <FiPrinter className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Recipe Info Cards */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="flex items-center text-gray-600 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                    <FiClock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Prep Time</p>
                    <p className="text-lg font-semibold text-gray-900">{recipe.prepTime}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="flex items-center text-gray-600 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                    <FiClock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Cook Time</p>
                    <p className="text-lg font-semibold text-gray-900">{recipe.cookTime}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="flex items-center text-gray-600 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                    <FiUsers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Servings</p>
                    <p className="text-lg font-semibold text-gray-900">{recipe.servings} servings</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ingredients */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                  Ingredients
                </h2>
                <button className="flex items-center text-gray-500 hover:text-primary transition-colors">
                  <FiBookmark className="w-5 h-5 mr-2" />
                  Save Shopping List
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li 
                      key={index}
                      className="flex items-center text-gray-700 hover:text-primary transition-colors"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-4" />
                      <span className="text-lg">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Instructions */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.7 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent mb-8">
                Instructions
              </h2>
              <div className="space-y-8">
                {recipe.instructions.map((instruction, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow"
                  >
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-6">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 text-lg leading-relaxed">{instruction}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 