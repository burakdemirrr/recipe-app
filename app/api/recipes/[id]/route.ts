import { NextResponse } from 'next/server'
import type { Recipe } from '@/store/useStore'

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Margherita Pizza',
    description: 'A traditional Italian pizza with fresh mozzarella, tomatoes, and basil.',
    ingredients: [
      '1 pizza dough',
      'Fresh mozzarella',
      'San Marzano tomatoes',
      'Fresh basil leaves',
      'Extra virgin olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 500°F (260°C) with a pizza stone inside.',
      'Roll out the pizza dough on a floured surface.',
      'Spread crushed tomatoes over the dough.',
      'Add torn pieces of fresh mozzarella.',
      'Bake for 12-15 minutes until crust is golden.',
      'Top with fresh basil leaves and drizzle with olive oil.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '2',
    title: 'Avocado Toast',
    description: 'Creamy avocado spread on toasted bread with various toppings.',
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      'Cherry tomatoes',
      'Red pepper flakes',
      'Salt and pepper',
      'Extra virgin olive oil'
    ],
    instructions: [
      'Toast the bread until golden brown.',
      'Mash the avocado in a bowl.',
      'Spread mashed avocado on toast.',
      'Top with halved cherry tomatoes.',
      'Season with salt, pepper, and red pepper flakes.',
      'Drizzle with olive oil.'
    ],
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 2
  },
  {
    id: '3',
    title: 'Chocolate Chip Cookies',
    description: 'Classic homemade cookies with gooey chocolate chips.',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 cup butter, softened',
      '3/4 cup sugar',
      '3/4 cup brown sugar',
      '2 eggs',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Cream together butter and sugars.',
      'Beat in eggs one at a time.',
      'Mix in flour and chocolate chips.',
      'Drop spoonfuls onto baking sheets.',
      'Bake for 10-12 minutes until golden.'
    ],
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 24
  }
]

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const recipe = recipes.find((r) => r.id === params.id)
  
  if (!recipe) {
    return new NextResponse('Recipe not found', { status: 404 })
  }

  return NextResponse.json(recipe)
} 