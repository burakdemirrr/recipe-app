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
    title: 'Avocado Toast with Poached Egg',
    description: 'Creamy avocado spread on toasted sourdough with perfectly poached eggs and microgreens.',
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      '2 fresh eggs',
      'Microgreens',
      'Red pepper flakes',
      'Salt and pepper',
      'Extra virgin olive oil'
    ],
    instructions: [
      'Toast the bread until golden brown.',
      'Mash the avocado with salt and pepper.',
      'Poach eggs in simmering water for 3 minutes.',
      'Spread mashed avocado on toast.',
      'Top with poached eggs and microgreens.',
      'Season and drizzle with olive oil.'
    ],
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins',
    cookTime: '5 mins',
    servings: 2
  },
  {
    id: '3',
    title: 'Double Chocolate Chip Cookies',
    description: 'Rich, gooey chocolate cookies with dark and milk chocolate chips.',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 cup butter, softened',
      '3/4 cup sugar',
      '3/4 cup brown sugar',
      '2 eggs',
      '1 cup dark chocolate chips',
      '1 cup milk chocolate chips',
      '1/2 cup cocoa powder'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Cream together butter and sugars.',
      'Beat in eggs one at a time.',
      'Mix in flour and cocoa powder.',
      'Fold in chocolate chips.',
      'Drop spoonfuls onto baking sheets.',
      'Bake for 10-12 minutes until edges are set.'
    ],
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 24
  },
  {
    id: '4',
    title: 'Thai Green Curry',
    description: 'Aromatic and creamy coconut curry with vegetables and tofu.',
    ingredients: [
      'Green curry paste',
      '2 cans coconut milk',
      'Firm tofu',
      'Mixed vegetables',
      'Thai basil',
      'Lime leaves',
      'Brown sugar',
      'Soy sauce'
    ],
    instructions: [
      'Press and cube tofu.',
      'Sauté curry paste in oil.',
      'Add coconut milk and simmer.',
      'Add vegetables and tofu.',
      'Season with sugar and soy sauce.',
      'Garnish with Thai basil.'
    ],
    category: 'vegetarian',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 4
  },
  {
    id: '5',
    title: 'Quinoa Buddha Bowl',
    description: 'Nutritious bowl with quinoa, roasted vegetables, and tahini dressing.',
    ingredients: [
      'Quinoa',
      'Sweet potato',
      'Chickpeas',
      'Kale',
      'Avocado',
      'Tahini',
      'Lemon juice',
      'Seeds mix'
    ],
    instructions: [
      'Cook quinoa according to package.',
      'Roast sweet potato and chickpeas.',
      'Massage kale with olive oil.',
      'Make tahini dressing.',
      'Assemble bowl with all ingredients.',
      'Top with seeds and dressing.'
    ],
    category: 'vegan',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 2
  },
  {
    id: '6',
    title: 'Spaghetti Carbonara',
    description: 'Classic Roman pasta dish with eggs, pecorino cheese, pancetta, and black pepper.',
    ingredients: [
      'Spaghetti',
      'Guanciale or pancetta',
      'Eggs',
      'Pecorino Romano cheese',
      'Black pepper',
      'Salt'
    ],
    instructions: [
      'Cook pasta in salted water.',
      'Crisp pancetta in a pan.',
      'Mix eggs and cheese.',
      'Combine hot pasta with egg mixture.',
      'Add pancetta and pepper.',
      'Serve immediately.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '7',
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with tomatoes, cucumbers, olives, and feta cheese.',
    ingredients: [
      'Tomatoes',
      'Cucumber',
      'Red onion',
      'Kalamata olives',
      'Feta cheese',
      'Extra virgin olive oil',
      'Dried oregano',
      'Red wine vinegar'
    ],
    instructions: [
      'Chop vegetables into chunks.',
      'Slice onion thinly.',
      'Combine in a bowl.',
      'Add olives and feta.',
      'Dress with oil and vinegar.',
      'Season with oregano.'
    ],
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 4
  },
  {
    id: '8',
    title: 'Chicken Tikka Masala',
    description: 'Creamy and aromatic Indian curry with tender chicken pieces.',
    ingredients: [
      'Chicken thighs',
      'Yogurt',
      'Tikka masala paste',
      'Heavy cream',
      'Tomatoes',
      'Onion',
      'Garlic',
      'Ginger'
    ],
    instructions: [
      'Marinate chicken in yogurt and spices.',
      'Grill or broil chicken.',
      'Make sauce with onions and tomatoes.',
      'Add cream and simmer.',
      'Combine chicken with sauce.',
      'Serve with rice or naan.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins',
    cookTime: '45 mins',
    servings: 6
  },
  {
    id: '9',
    title: 'Berry Smoothie Bowl',
    description: 'Thick smoothie bowl topped with fresh fruits, granola, and seeds.',
    ingredients: [
      'Mixed berries',
      'Banana',
      'Greek yogurt',
      'Almond milk',
      'Honey',
      'Granola',
      'Chia seeds',
      'Fresh fruit for topping'
    ],
    instructions: [
      'Blend berries and banana.',
      'Add yogurt and milk.',
      'Blend until thick.',
      'Pour into bowl.',
      'Top with granola and fruits.',
      'Drizzle with honey.'
    ],
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 1
  },
  {
    id: '10',
    title: 'Beef Stir Fry',
    description: 'Quick and flavorful beef stir fry with colorful vegetables.',
    ingredients: [
      'Beef strips',
      'Bell peppers',
      'Broccoli',
      'Carrots',
      'Soy sauce',
      'Garlic',
      'Ginger',
      'Sesame oil'
    ],
    instructions: [
      'Marinate beef in soy sauce.',
      'Heat wok until very hot.',
      'Stir fry vegetables.',
      'Cook beef separately.',
      'Combine all ingredients.',
      'Season and serve.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '11',
    title: 'Beef Bulgogi',
    description: 'Korean-style marinated and grilled beef with rice and vegetables.',
    ingredients: [
      'Thinly sliced beef',
      'Soy sauce',
      'Asian pear',
      'Garlic',
      'Ginger',
      'Sesame oil',
      'Brown sugar',
      'Green onions'
    ],
    instructions: [
      'Blend marinade ingredients.',
      'Marinate beef for 1-4 hours.',
      'Heat grill or pan until very hot.',
      'Cook beef in batches.',
      'Garnish with sesame seeds.',
      'Serve with rice and kimchi.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1583224874284-0ff4c5b10da9?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '12',
    title: 'Mediterranean Mezze Platter',
    description: 'Assortment of Middle Eastern dips, spreads, and appetizers.',
    ingredients: [
      'Hummus',
      'Baba ganoush',
      'Pita bread',
      'Falafel',
      'Olives',
      'Cherry tomatoes',
      'Cucumber',
      'Feta cheese'
    ],
    instructions: [
      'Prepare or arrange hummus.',
      'Make fresh falafel.',
      'Warm pita bread.',
      'Slice vegetables.',
      'Arrange all items on platter.',
      'Drizzle with olive oil.'
    ],
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins',
    cookTime: '20 mins',
    servings: 6
  },
  {
    id: '13',
    title: 'Mango Sticky Rice',
    description: 'Thai dessert of sweet coconut sticky rice with fresh mango.',
    ingredients: [
      'Glutinous rice',
      'Coconut milk',
      'Palm sugar',
      'Ripe mangoes',
      'Salt',
      'Toasted sesame seeds',
      'Pandanus leaves (optional)'
    ],
    instructions: [
      'Soak rice for 4-6 hours.',
      'Steam rice until tender.',
      'Make coconut sauce.',
      'Mix rice with sauce.',
      'Slice fresh mangoes.',
      'Serve with extra coconut sauce.'
    ],
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 4
  },
  {
    id: '14',
    title: 'Shakshuka',
    description: 'Middle Eastern breakfast of eggs poached in spiced tomato sauce.',
    ingredients: [
      'Eggs',
      'Tomatoes',
      'Bell peppers',
      'Onions',
      'Garlic',
      'Cumin',
      'Paprika',
      'Fresh herbs'
    ],
    instructions: [
      'Sauté vegetables.',
      'Add spices and tomatoes.',
      'Simmer sauce until thick.',
      'Create wells and add eggs.',
      'Cover and cook eggs.',
      'Garnish with herbs.'
    ],
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 4
  },
  {
    id: '15',
    title: 'Poke Bowl',
    description: 'Hawaiian-style raw fish bowl with rice and fresh toppings.',
    ingredients: [
      'Sushi-grade tuna',
      'Soy sauce',
      'Sesame oil',
      'Rice',
      'Avocado',
      'Cucumber',
      'Seaweed',
      'Sriracha mayo'
    ],
    instructions: [
      'Cube fish and marinate.',
      'Cook sushi rice.',
      'Prepare toppings.',
      'Assemble bowls.',
      'Add sauce.',
      'Garnish with sesame seeds.'
    ],
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 2
  },
  {
    id: '11',
    title: 'Mushroom Risotto',
    description: 'Creamy Italian rice dish with wild mushrooms and Parmesan.',
    ingredients: [
      'Arborio rice',
      'Mixed mushrooms',
      'White wine',
      'Vegetable stock',
      'Parmesan cheese',
      'Onion',
      'Garlic',
      'Butter'
    ],
    instructions: [
      'Sauté mushrooms until golden.',
      'Cook onion and rice.',
      'Add wine and let absorb.',
      'Gradually add hot stock.',
      'Stir until creamy.',
      'Finish with Parmesan.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '35 mins',
    servings: 4
  },
  {
    id: '12',
    title: 'Fish Tacos',
    description: 'Baja-style fish tacos with cabbage slaw and lime crema.',
    ingredients: [
      'White fish fillets',
      'Corn tortillas',
      'Cabbage',
      'Lime',
      'Sour cream',
      'Cilantro',
      'Avocado',
      'Hot sauce'
    ],
    instructions: [
      'Season and cook fish.',
      'Make lime crema.',
      'Prepare cabbage slaw.',
      'Warm tortillas.',
      'Assemble tacos.',
      'Serve with lime wedges.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '13',
    title: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey molten center.',
    ingredients: [
      'Dark chocolate',
      'Butter',
      'Eggs',
      'Sugar',
      'Flour',
      'Vanilla extract',
      'Salt',
      'Powdered sugar'
    ],
    instructions: [
      'Melt chocolate and butter.',
      'Whisk eggs and sugar.',
      'Combine all ingredients.',
      'Pour into ramekins.',
      'Bake until edges are set.',
      'Serve immediately.'
    ],
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 4
  },
  {
    id: '14',
    title: 'Vietnamese Pho',
    description: 'Traditional beef noodle soup with herbs and spices.',
    ingredients: [
      'Rice noodles',
      'Beef bones',
      'Beef slices',
      'Bean sprouts',
      'Thai basil',
      'Star anise',
      'Cinnamon',
      'Fish sauce'
    ],
    instructions: [
      'Make bone broth.',
      'Cook rice noodles.',
      'Prepare herbs and sprouts.',
      'Assemble bowls.',
      'Add hot broth.',
      'Serve with condiments.'
    ],
    category: 'soup',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins',
    cookTime: '6 hours',
    servings: 6
  },
  {
    id: '15',
    title: 'Mediterranean Quinoa Salad',
    description: 'Healthy grain salad with vegetables and feta cheese.',
    ingredients: [
      'Quinoa',
      'Cherry tomatoes',
      'Cucumber',
      'Red onion',
      'Kalamata olives',
      'Feta cheese',
      'Fresh herbs',
      'Lemon dressing'
    ],
    instructions: [
      'Cook quinoa and cool.',
      'Chop vegetables.',
      'Make lemon dressing.',
      'Combine ingredients.',
      'Add feta and herbs.',
      'Chill before serving.'
    ],
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 6
  },
  {
    id: '16',
    title: 'Pad Thai',
    description: 'Classic Thai stir-fried rice noodles with shrimp and peanuts.',
    ingredients: [
      'Rice noodles',
      'Shrimp',
      'Tofu',
      'Bean sprouts',
      'Peanuts',
      'Eggs',
      'Tamarind paste',
      'Fish sauce'
    ],
    instructions: [
      'Soak noodles in hot water.',
      'Stir-fry shrimp and tofu.',
      'Add eggs and scramble.',
      'Add noodles and sauce.',
      'Toss with bean sprouts.',
      'Garnish with peanuts.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '17',
    title: 'Caprese Salad',
    description: 'Simple Italian salad with fresh mozzarella, tomatoes, and basil.',
    ingredients: [
      'Fresh mozzarella',
      'Ripe tomatoes',
      'Fresh basil',
      'Extra virgin olive oil',
      'Balsamic glaze',
      'Sea salt',
      'Black pepper'
    ],
    instructions: [
      'Slice mozzarella and tomatoes.',
      'Arrange alternately on plate.',
      'Tuck basil leaves between.',
      'Drizzle with olive oil.',
      'Add balsamic glaze.',
      'Season with salt and pepper.'
    ],
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 4
  },
  {
    id: '18',
    title: 'French Toast',
    description: 'Classic breakfast dish with vanilla and cinnamon.',
    ingredients: [
      'Thick bread slices',
      'Eggs',
      'Milk',
      'Vanilla extract',
      'Cinnamon',
      'Butter',
      'Maple syrup',
      'Fresh berries'
    ],
    instructions: [
      'Whisk eggs, milk, and vanilla.',
      'Dip bread in mixture.',
      'Heat butter in pan.',
      'Cook until golden.',
      'Dust with cinnamon.',
      'Serve with syrup and berries.'
    ],
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '19',
    title: 'Beef Burger',
    description: 'Juicy homemade burger with all the classic toppings.',
    ingredients: [
      'Ground beef',
      'Burger buns',
      'Lettuce',
      'Tomato',
      'Onion',
      'Cheese',
      'Pickles',
      'Condiments'
    ],
    instructions: [
      'Form beef patties.',
      'Season with salt and pepper.',
      'Grill to desired doneness.',
      'Toast the buns.',
      'Add cheese to melt.',
      'Assemble with toppings.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '10 mins',
    servings: 4
  },
  {
    id: '20',
    title: 'Vegetable Curry',
    description: 'Aromatic Indian curry with mixed vegetables.',
    ingredients: [
      'Mixed vegetables',
      'Coconut milk',
      'Curry powder',
      'Onion',
      'Garlic',
      'Ginger',
      'Tomatoes',
      'Cilantro'
    ],
    instructions: [
      'Sauté onion and spices.',
      'Add vegetables.',
      'Pour in coconut milk.',
      'Simmer until tender.',
      'Season to taste.',
      'Garnish with cilantro.'
    ],
    category: 'vegetarian',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 6
  },
  {
    id: '21',
    title: 'Sushi Roll',
    description: 'Fresh California roll with crab, avocado, and cucumber.',
    ingredients: [
      'Sushi rice',
      'Nori sheets',
      'Crab meat',
      'Avocado',
      'Cucumber',
      'Sesame seeds',
      'Soy sauce',
      'Wasabi'
    ],
    instructions: [
      'Prepare sushi rice.',
      'Layer nori with rice.',
      'Add fillings.',
      'Roll tightly.',
      'Cut into pieces.',
      'Serve with soy sauce.'
    ],
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins',
    cookTime: '20 mins',
    servings: 4
  },
  {
    id: '22',
    title: 'Apple Pie',
    description: 'Classic American dessert with flaky crust and spiced apples.',
    ingredients: [
      'Pie crust',
      'Apples',
      'Sugar',
      'Cinnamon',
      'Nutmeg',
      'Butter',
      'Lemon juice',
      'Egg wash'
    ],
    instructions: [
      'Prepare pie crust.',
      'Slice and season apples.',
      'Fill pie crust.',
      'Add top crust.',
      'Brush with egg wash.',
      'Bake until golden.'
    ],
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1621743478914-cc8a86d7e9e5?auto=format&fit=crop&w=800&q=80',
    prepTime: '45 mins',
    cookTime: '50 mins',
    servings: 8
  },
  {
    id: '23',
    title: 'Chicken Fajitas',
    description: 'Sizzling Mexican fajitas with peppers and onions.',
    ingredients: [
      'Chicken breast',
      'Bell peppers',
      'Onions',
      'Tortillas',
      'Lime',
      'Fajita seasoning',
      'Sour cream',
      'Guacamole'
    ],
    instructions: [
      'Slice chicken and vegetables.',
      'Season chicken.',
      'Cook chicken until done.',
      'Sauté vegetables.',
      'Warm tortillas.',
      'Serve with toppings.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '20 mins',
    servings: 4
  },
  {
    id: '24',
    title: 'Greek Moussaka',
    description: 'Layered eggplant casserole with meat sauce and béchamel.',
    ingredients: [
      'Eggplant',
      'Ground lamb',
      'Tomatoes',
      'Onion',
      'Garlic',
      'Cinnamon',
      'Béchamel sauce',
      'Parmesan'
    ],
    instructions: [
      'Slice and salt eggplant.',
      'Make meat sauce.',
      'Prepare béchamel.',
      'Layer ingredients.',
      'Top with béchamel.',
      'Bake until golden.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1544360415-84f9ff87b11c?auto=format&fit=crop&w=800&q=80',
    prepTime: '45 mins',
    cookTime: '45 mins',
    servings: 8
  },
  {
    id: '25',
    title: 'Miso Soup',
    description: 'Traditional Japanese soup with tofu and seaweed.',
    ingredients: [
      'Dashi stock',
      'Miso paste',
      'Tofu',
      'Wakame seaweed',
      'Green onions',
      'Shiitake mushrooms'
    ],
    instructions: [
      'Make dashi stock.',
      'Dissolve miso paste.',
      'Add tofu and seaweed.',
      'Simmer gently.',
      'Add green onions.',
      'Serve hot.'
    ],
    category: 'soup',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '26',
    title: 'Ratatouille',
    description: 'French Provençal stewed vegetable dish.',
    ingredients: [
      'Eggplant',
      'Zucchini',
      'Tomatoes',
      'Bell peppers',
      'Onion',
      'Garlic',
      'Herbs de Provence',
      'Olive oil'
    ],
    instructions: [
      'Slice vegetables thinly.',
      'Layer in baking dish.',
      'Season each layer.',
      'Add herbs and oil.',
      'Bake covered.',
      'Finish uncovered.'
    ],
    category: 'vegetarian',
    image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins',
    cookTime: '1 hour',
    servings: 6
  },
  {
    id: '27',
    title: 'Eggs Benedict',
    description: 'Classic breakfast with poached eggs and hollandaise sauce.',
    ingredients: [
      'English muffins',
      'Eggs',
      'Canadian bacon',
      'Butter',
      'Lemon juice',
      'Egg yolks',
      'Salt',
      'Cayenne pepper'
    ],
    instructions: [
      'Make hollandaise sauce.',
      'Toast English muffins.',
      'Cook Canadian bacon.',
      'Poach eggs.',
      'Assemble layers.',
      'Top with sauce.'
    ],
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '28',
    title: 'Beef Wellington',
    description: 'Elegant dish of beef tenderloin wrapped in pastry.',
    ingredients: [
      'Beef tenderloin',
      'Puff pastry',
      'Mushroom duxelles',
      'Prosciutto',
      'Dijon mustard',
      'Egg wash',
      'Thyme',
      'Salt and pepper'
    ],
    instructions: [
      'Sear the beef.',
      'Make mushroom duxelles.',
      'Wrap in prosciutto.',
      'Wrap in pastry.',
      'Brush with egg wash.',
      'Bake until golden.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
    prepTime: '1 hour',
    cookTime: '45 mins',
    servings: 6
  },
  {
    id: '29',
    title: 'Lobster Roll',
    description: 'New England-style lobster salad on a toasted roll.',
    ingredients: [
      'Lobster meat',
      'Mayonnaise',
      'Celery',
      'Lemon juice',
      'Hot dog buns',
      'Butter',
      'Chives',
      'Old Bay seasoning'
    ],
    instructions: [
      'Mix lobster salad.',
      'Toast and butter buns.',
      'Fill with lobster.',
      'Season to taste.',
      'Garnish with chives.',
      'Serve immediately.'
    ],
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1553025934-296397db4010?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '5 mins',
    servings: 4
  },
  {
    id: '30',
    title: 'Paella',
    description: 'Spanish rice dish with seafood, chicken, and saffron.',
    ingredients: [
      'Bomba rice',
      'Chicken thighs',
      'Shrimp',
      'Mussels',
      'Saffron',
      'Peas',
      'Bell peppers',
      'Paprika'
    ],
    instructions: [
      'Brown chicken.',
      'Sauté vegetables.',
      'Add rice and saffron.',
      'Add stock gradually.',
      'Add seafood.',
      'Create socarrat.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins',
    cookTime: '45 mins',
    servings: 6
  },
  {
    id: '31',
    title: 'Chicken Biryani',
    description: 'Aromatic Indian rice dish with spiced chicken and saffron.',
    ingredients: [
      'Basmati rice',
      'Chicken thighs',
      'Yogurt',
      'Biryani spices',
      'Onions',
      'Saffron',
      'Mint leaves',
      'Ghee'
    ],
    instructions: [
      'Marinate chicken.',
      'Par-cook rice.',
      'Layer chicken and rice.',
      'Add saffron milk.',
      'Steam until done.',
      'Garnish and serve.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    prepTime: '45 mins',
    cookTime: '1 hour',
    servings: 6
  },
  {
    id: '32',
    title: 'Gazpacho',
    description: 'Chilled Spanish tomato soup with fresh vegetables.',
    ingredients: [
      'Ripe tomatoes',
      'Cucumber',
      'Bell pepper',
      'Garlic',
      'Olive oil',
      'Sherry vinegar',
      'Bread',
      'Salt'
    ],
    instructions: [
      'Chop vegetables.',
      'Blend until smooth.',
      'Strain if desired.',
      'Chill thoroughly.',
      'Adjust seasoning.',
      'Garnish to serve.'
    ],
    category: 'soup',
    image: 'https://images.unsplash.com/photo-1590590470233-195e8f23fe6d?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '0 mins',
    servings: 6
  },
  {
    id: '33',
    title: 'Beef Stroganoff',
    description: 'Creamy Russian dish with beef and mushrooms.',
    ingredients: [
      'Beef strips',
      'Mushrooms',
      'Sour cream',
      'Egg noodles',
      'Onion',
      'Beef broth',
      'Dijon mustard',
      'Parsley'
    ],
    instructions: [
      'Cook egg noodles.',
      'Sear beef strips.',
      'Sauté mushrooms.',
      'Make cream sauce.',
      'Combine all ingredients.',
      'Garnish with parsley.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 4
  },
  {
    id: '34',
    title: 'Banana Bread',
    description: 'Moist and sweet quick bread with ripe bananas.',
    ingredients: [
      'Ripe bananas',
      'Flour',
      'Butter',
      'Sugar',
      'Eggs',
      'Vanilla',
      'Baking soda',
      'Walnuts'
    ],
    instructions: [
      'Mash bananas.',
      'Cream butter and sugar.',
      'Add eggs and vanilla.',
      'Mix in dry ingredients.',
      'Pour into loaf pan.',
      'Bake until done.'
    ],
    category: 'baking',
    image: 'https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '1 hour',
    servings: 8
  },
  {
    id: '35',
    title: 'Caesar Salad',
    description: 'Classic salad with romaine lettuce and creamy dressing.',
    ingredients: [
      'Romaine lettuce',
      'Parmesan cheese',
      'Croutons',
      'Garlic',
      'Anchovy paste',
      'Egg yolk',
      'Lemon juice',
      'Olive oil'
    ],
    instructions: [
      'Make dressing.',
      'Wash and dry lettuce.',
      'Toss with dressing.',
      'Add cheese and croutons.',
      'Season to taste.',
      'Serve immediately.'
    ],
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 4
  },
  {
    id: '36',
    title: 'Chicken Marsala',
    description: 'Italian-American dish with chicken and mushroom wine sauce.',
    ingredients: [
      'Chicken cutlets',
      'Mushrooms',
      'Marsala wine',
      'Chicken broth',
      'Butter',
      'Flour',
      'Garlic',
      'Parsley'
    ],
    instructions: [
      'Dredge chicken in flour.',
      'Pan-fry chicken.',
      'Sauté mushrooms.',
      'Make wine sauce.',
      'Combine and simmer.',
      'Garnish with parsley.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 4
  },
  {
    id: '37',
    title: 'Vegetable Lasagna',
    description: 'Layered pasta dish with vegetables and ricotta cheese.',
    ingredients: [
      'Lasagna noodles',
      'Mixed vegetables',
      'Ricotta cheese',
      'Mozzarella',
      'Marinara sauce',
      'Spinach',
      'Garlic',
      'Italian herbs'
    ],
    instructions: [
      'Cook noodles.',
      'Prepare vegetables.',
      'Mix cheese filling.',
      'Layer ingredients.',
      'Bake covered.',
      'Finish uncovered.'
    ],
    category: 'vegetarian',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80',
    prepTime: '45 mins',
    cookTime: '1 hour',
    servings: 8
  },
  {
    id: '38',
    title: 'Shrimp Scampi',
    description: 'Garlicky shrimp pasta in white wine sauce.',
    ingredients: [
      'Large shrimp',
      'Linguine',
      'Garlic',
      'White wine',
      'Butter',
      'Lemon',
      'Red pepper flakes',
      'Parsley'
    ],
    instructions: [
      'Cook pasta.',
      'Sauté garlic.',
      'Cook shrimp.',
      'Make wine sauce.',
      'Toss with pasta.',
      'Garnish and serve.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '39',
    title: 'Chicken Noodle Soup',
    description: 'Comforting soup with chicken, vegetables, and egg noodles.',
    ingredients: [
      'Chicken breast',
      'Egg noodles',
      'Carrots',
      'Celery',
      'Onion',
      'Chicken broth',
      'Bay leaves',
      'Fresh herbs'
    ],
    instructions: [
      'Make chicken broth.',
      'Cook vegetables.',
      'Add chicken pieces.',
      'Cook noodles.',
      'Season to taste.',
      'Add fresh herbs.'
    ],
    category: 'soup',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '45 mins',
    servings: 6
  },
  {
    id: '40',
    title: 'Chocolate Mousse',
    description: 'Light and airy French chocolate dessert.',
    ingredients: [
      'Dark chocolate',
      'Heavy cream',
      'Eggs',
      'Sugar',
      'Vanilla extract',
      'Salt',
      'Cocoa powder',
      'Berries'
    ],
    instructions: [
      'Melt chocolate.',
      'Whip cream.',
      'Beat egg whites.',
      'Fold ingredients.',
      'Chill thoroughly.',
      'Garnish to serve.'
    ],
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1511715112108-9acc6c3ff61f?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins',
    cookTime: '0 mins',
    servings: 6
  },
  {
    id: '41',
    title: 'Pesto Pasta',
    description: 'Fresh basil pesto with pasta and cherry tomatoes.',
    ingredients: [
      'Fresh basil',
      'Pine nuts',
      'Parmesan cheese',
      'Garlic',
      'Olive oil',
      'Pasta',
      'Cherry tomatoes',
      'Salt'
    ],
    instructions: [
      'Make fresh pesto.',
      'Cook pasta.',
      'Halve tomatoes.',
      'Toss together.',
      'Add extra cheese.',
      'Season to taste.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '42',
    title: 'Beef Tacos',
    description: 'Mexican-style tacos with seasoned ground beef.',
    ingredients: [
      'Ground beef',
      'Taco seasoning',
      'Corn tortillas',
      'Lettuce',
      'Tomatoes',
      'Cheese',
      'Sour cream',
      'Hot sauce'
    ],
    instructions: [
      'Brown the beef.',
      'Add seasonings.',
      'Warm tortillas.',
      'Prepare toppings.',
      'Assemble tacos.',
      'Serve immediately.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4
  },
  {
    id: '43',
    title: 'Mushroom Risotto',
    description: 'Creamy Italian rice dish with wild mushrooms.',
    ingredients: [
      'Arborio rice',
      'Mixed mushrooms',
      'White wine',
      'Onion',
      'Garlic',
      'Parmesan',
      'Butter',
      'Stock'
    ],
    instructions: [
      'Sauté mushrooms.',
      'Toast rice.',
      'Add wine.',
      'Add stock gradually.',
      'Stir until creamy.',
      'Finish with cheese.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins',
    cookTime: '30 mins',
    servings: 4
  },
  {
    id: '44',
    title: 'Greek Yogurt Parfait',
    description: 'Healthy breakfast parfait with berries and granola.',
    ingredients: [
      'Greek yogurt',
      'Mixed berries',
      'Granola',
      'Honey',
      'Chia seeds',
      'Mint leaves',
      'Almonds',
      'Cinnamon'
    ],
    instructions: [
      'Layer yogurt.',
      'Add fresh berries.',
      'Sprinkle granola.',
      'Drizzle honey.',
      'Add seeds.',
      'Garnish with mint.'
    ],
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 2
  },
  {
    id: '45',
    title: 'Chicken Satay',
    description: 'Grilled chicken skewers with peanut sauce.',
    ingredients: [
      'Chicken breast',
      'Coconut milk',
      'Curry powder',
      'Peanut butter',
      'Soy sauce',
      'Lime',
      'Garlic',
      'Ginger'
    ],
    instructions: [
      'Marinate chicken.',
      'Thread onto skewers.',
      'Make peanut sauce.',
      'Grill chicken.',
      'Serve with sauce.',
      'Garnish with lime.'
    ],
    category: 'appetizer',
    image: 'https://images.unsplash.com/photo-1532465614-6cc8d45f647f?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins',
    cookTime: '15 mins',
    servings: 6
  },
  {
    id: '46',
    title: 'Seafood Paella',
    description: 'Spanish rice dish with mixed seafood and saffron.',
    ingredients: [
      'Bomba rice',
      'Mixed seafood',
      'Saffron',
      'Bell peppers',
      'Tomatoes',
      'Peas',
      'Garlic',
      'Stock'
    ],
    instructions: [
      'Toast rice.',
      'Add saffron stock.',
      'Layer vegetables.',
      'Add seafood.',
      'Create socarrat.',
      'Rest before serving.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins',
    cookTime: '45 mins',
    servings: 6
  },
  {
    id: '47',
    title: 'Beef Pho',
    description: 'Vietnamese noodle soup with beef and herbs.',
    ingredients: [
      'Rice noodles',
      'Beef slices',
      'Bean sprouts',
      'Thai basil',
      'Lime',
      'Hoisin sauce',
      'Sriracha',
      'Star anise'
    ],
    instructions: [
      'Make broth.',
      'Cook noodles.',
      'Slice beef thin.',
      'Assemble bowls.',
      'Add hot broth.',
      'Serve with herbs.'
    ],
    category: 'soup',
    image: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins',
    cookTime: '3 hours',
    servings: 6
  },
  {
    id: '48',
    title: 'Lemon Bars',
    description: 'Tangy lemon dessert with shortbread crust.',
    ingredients: [
      'Butter',
      'Flour',
      'Sugar',
      'Eggs',
      'Lemons',
      'Powdered sugar',
      'Vanilla',
      'Salt'
    ],
    instructions: [
      'Make crust.',
      'Prepare filling.',
      'Bake crust.',
      'Add filling.',
      'Bake until set.',
      'Dust with sugar.'
    ],
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1528252094361-c040887c3c79?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '45 mins',
    servings: 16
  },
  {
    id: '49',
    title: 'Falafel Wrap',
    description: 'Middle Eastern chickpea patties in flatbread.',
    ingredients: [
      'Chickpeas',
      'Fresh herbs',
      'Garlic',
      'Cumin',
      'Flatbread',
      'Tahini sauce',
      'Lettuce',
      'Tomatoes'
    ],
    instructions: [
      'Make falafel mix.',
      'Form into balls.',
      'Fry until crispy.',
      'Make tahini sauce.',
      'Warm flatbread.',
      'Assemble wraps.'
    ],
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1585238342-78d387f4a707?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4
  },
  {
    id: '50',
    title: 'Chicken Alfredo',
    description: 'Creamy pasta with grilled chicken and parmesan.',
    ingredients: [
      'Fettuccine',
      'Chicken breast',
      'Heavy cream',
      'Parmesan',
      'Garlic',
      'Butter',
      'Parsley',
      'Black pepper'
    ],
    instructions: [
      'Cook pasta.',
      'Grill chicken.',
      'Make sauce.',
      'Combine all.',
      'Add cheese.',
      'Garnish and serve.'
    ],
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4
  }
]

export async function GET() {
  return NextResponse.json(recipes)
} 