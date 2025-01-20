'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiHome, FiHeart, FiBookmark, FiSearch } from 'react-icons/fi'

const navItems = [
  { href: '/', label: 'Home', icon: FiHome },
  { href: '/favorites', label: 'Favorites', icon: FiHeart },
  { href: '/saved', label: 'Saved', icon: FiBookmark },
]

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">R</span>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Recipe App
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex md:hidden items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <item.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  )
} 