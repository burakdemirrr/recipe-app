'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Recipe } from '@/store/useStore'
import { FiClock, FiUsers, FiHeart } from 'react-icons/fi'
import { motion } from 'framer-motion'

type RecipeCardProps = {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/recipe/${recipe.id}`}
        className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
          >
            <FiHeart className="w-5 h-5" />
          </motion.button>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
              {recipe.title}
            </h3>
            <div className="flex items-center space-x-4 text-white/90 text-sm">
              <div className="flex items-center space-x-1">
                <FiClock className="w-4 h-4" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FiUsers className="w-4 h-4" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-sm line-clamp-2">
            {recipe.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {recipe.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 