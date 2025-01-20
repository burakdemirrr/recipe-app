'use client'

import { useStore } from '@/store/useStore'
import { FiSearch } from 'react-icons/fi'

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useStore()

  return (
    <div className="relative">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />
    </div>
  )
} 