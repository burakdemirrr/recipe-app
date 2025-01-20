'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { RecipeGrid } from '@/components/RecipeGrid'
import { SearchBar } from '@/components/SearchBar'
import { Categories } from '@/components/Categories'
import { FiCoffee } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 pt-24 pb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary-500/20"
            >
              <FiCoffee className="w-10 h-10 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-primary to-secondary bg-clip-text text-transparent">
                Discover Delicious Recipes
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Find and share the best recipes from around the world. 
                Cook with confidence and explore new flavors.
              </p>
              <div className="max-w-xl mx-auto">
                <SearchBar />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Categories Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="py-12 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-center mb-8 text-gray-900"
          >
            Browse Categories
          </motion.h2>
          <Categories />
        </div>
      </motion.section>

      {/* Recipes Grid Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="py-16 bg-gradient-to-b from-white to-secondary-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-center mb-8 text-gray-900"
          >
            Popular Recipes
          </motion.h2>
          <RecipeGrid />
        </div>
      </motion.section>
    </div>
  )
} 