'use client'

import { useStore } from '@/store/useStore'
import { FiSearch } from 'react-icons/fi'
import { useCallback, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

export function SearchBar() {
  const { setSearchQuery } = useStore()
  const [inputValue, setInputValue] = useState('')

  const debouncedSetSearch = useDebounce((value: string) => {
    if (value !== inputValue) {
      setSearchQuery(value.toLowerCase().trim())
    }
  }, 300)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    debouncedSetSearch(value)
  }, [debouncedSetSearch])

  return (
    <div className="relative">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search recipes..."
        value={inputValue}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />
    </div>
  )
} 