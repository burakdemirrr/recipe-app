import { RecipeGrid } from '@/components/RecipeGrid'
import { SearchBar } from '@/components/SearchBar'
import { Categories } from '@/components/Categories'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Delicious Recipes</h1>
      <div className="max-w-2xl mx-auto mb-8">
        <SearchBar />
      </div>
      <Categories />
      <RecipeGrid />
    </main>
  )
} 