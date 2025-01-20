'use client'

import React from 'react'
import { useStore } from '@/store/useStore'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { FiCoffee, FiSunrise, FiSun, FiMoon, FiStar, FiCpu, FiHeart, FiFeather } from 'react-icons/fi'

const categories = [
  { name: 'All', icon: FiHeart },
  { name: 'Breakfast', icon: FiSunrise },
  { name: 'Lunch', icon: FiSun },
  { name: 'Dinner', icon: FiMoon },
  { name: 'Dessert', icon: FiStar },
  { name: 'Snacks', icon: FiCoffee },
  { name: 'Vegetarian', icon: FiCpu },
  { name: 'Vegan', icon: FiFeather },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Categories() {
  const { selectedCategory, setSelectedCategory } = useStore()

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
    >
      {categories.map((category) => {
        const isSelected = selectedCategory === category.name.toLowerCase()
        const Icon = category.icon

        return (
          <motion.button
            key={category.name}
            variants={item}
            onClick={() => setSelectedCategory(category.name.toLowerCase())}
            className={cn(
              'relative group flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300',
              'hover:shadow-lg hover:-translate-y-1',
              isSelected
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white hover:bg-primary-50 text-gray-600 hover:text-primary-600 border border-gray-100'
            )}
          >
            <div className={cn(
              'w-12 h-12 rounded-lg flex items-center justify-center mb-2',
              'transition-colors duration-300',
              isSelected
                ? 'bg-white/20'
                : 'bg-primary-50 group-hover:bg-white'
            )}>
              <Icon className={cn(
                'w-6 h-6 transition-transform duration-300',
                'group-hover:scale-110',
                isSelected ? 'text-white' : 'text-primary-500'
              )} />
            </div>
            <span className="text-sm font-medium">{category.name}</span>
            {isSelected && (
              <motion.div
                layoutId="categoryHighlight"
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 -z-10"
              />
            )}
          </motion.button>
        )
      })}
    </motion.div>
  )
} 