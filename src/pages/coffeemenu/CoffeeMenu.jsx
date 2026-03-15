
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LocalCafe,
  BakeryDining,
  Icecream,
  BreakfastDining,
  LunchDining,
  Tapas,
  Star,
  AccessTime,
  LocalFireDepartment,
  Grass,
  WineBar,
  RestaurantMenu,
  MenuBook,
  FreeBreakfast,
  DinnerDining,
  EmojiFoodBeverage,
  Coffee,
  Egg as EggIcon,
  Cookie,
  Cake,
  RamenDining,
  SoupKitchen,
  BrunchDining,
  DinnerDining as SavoryIcon,
  KebabDining,
  SetMeal,
  RiceBowl,
  Fastfood
} from "@mui/icons-material";

// Menu categories with icons and descriptions
const menuCategories = [
  { 
    id: "featured", 
    name: "Chef's Specials", 
    icon: <Star />, 
    description: "Our most celebrated creations, crafted with passion",
    color: "from-yellow-500 to-amber-500"
  },
  { 
    id: "coffee", 
    name: "Specialty Coffee", 
    icon: <LocalCafe />, 
    description: "Handcrafted espresso drinks from around the world",
    color: "from-amber-700 to-amber-500"
  },
  { 
    id: "tea", 
    name: "Artisan Teas", 
    icon: <FreeBreakfast />, 
    description: "Premium loose leaf teas and herbal infusions",
    color: "from-green-600 to-green-400"
  },
  { 
    id: "pastries", 
    name: "Fresh Pastries", 
    icon: <BakeryDining />, 
    description: "Baked fresh daily in our kitchen",
    color: "from-orange-400 to-amber-300"
  },
  { 
    id: "breakfast", 
    name: "Breakfast", 
    icon: <BreakfastDining />, 
    description: "Start your day with our morning favorites",
    color: "from-yellow-400 to-orange-400"
  },
  { 
    id: "lunch", 
    name: "Lunch & Savory", 
    icon: <LunchDining />, 
    description: "Hearty sandwiches, salads, and warm meals",
    color: "from-red-500 to-orange-500"
  },
  { 
    id: "desserts", 
    name: "Desserts", 
    icon: <Icecream />, 
    description: "Sweet endings to your coffee experience",
    color: "from-pink-400 to-purple-400"
  },
  { 
    id: "snacks", 
    name: "Small Bites", 
    icon: <Tapas />, 
    description: "Perfect accompaniments for your drink",
    color: "from-blue-500 to-cyan-400"
  }
];

// Complete Menu Items
export const menuItems = [
  // CHEF'S SPECIALS
  {
    id: 1,
    name: "Signature House Blend",
    description: "Our signature medium-roast coffee with notes of chocolate and caramel. Sourced from high-altitude farms in Ethiopia.",
    price: 4.25,
    category: "featured",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
    calories: 5,
    popular: true,
    chefRecommendation: true,
    origin: "Ethiopia",
    roast: "Medium",
    notes: "Chocolate, Caramel, Citrus"
  },
  {
    id: 2,
    name: "Barista's Choice Latte",
    description: "Espresso with steamed milk and the barista's daily special syrup. Ask your server for today's flavor.",
    price: 5.75,
    category: "featured",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600",
    calories: 210,
    popular: true,
    chefRecommendation: true,
    available: "Daily rotation"
  },
  {
    id: 3,
    name: "Affogato",
    description: "Vanilla bean gelato 'drowned' with a shot of hot espresso. A perfect marriage of bitter and sweet.",
    price: 6.99,
    category: "featured",
    image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600",
    calories: 350,
    popular: true,
    dessert: true
  },

  // COFFEE MENU
  {
    id: 4,
    name: "Espresso Romano",
    description: "Rich espresso shot with a twist of lemon peel - a Roman tradition that brightens the coffee's natural acidity.",
    price: 3.99,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
    calories: 10,
    sizes: ["Single", "Double"],
    origin: "Ethiopia/Guatemala blend",
    roast: "Dark"
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    description: "Freshly steamed milk with vanilla syrup, marked with espresso and finished with house-made caramel drizzle.",
    price: 5.49,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600",
    calories: 250,
    sizes: ["Tall (12oz)", "Grande (16oz)", "Venti (20oz)"],
    available: "Hot or Iced"
  },
  {
    id: 6,
    name: "Hazelnut Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and milk foam, with a touch of Italian hazelnut syrup.",
    price: 5.29,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600",
    calories: 180,
    sizes: ["Tall (12oz)", "Grande (16oz)"],
    available: true
  },
  {
    id: 7,
    name: "Mocha Deluxe",
    description: "Rich chocolate and espresso with whipped cream and chocolate drizzle. Made with single-origin chocolate.",
    price: 5.99,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    calories: 320,
    sizes: ["Tall (12oz)", "Grande (16oz)", "Venti (20oz)"],
    popular: true
  },
  {
    id: 8,
    name: "Cold Brew",
    description: "Smooth, cold-brewed for 18 hours, served over ice. Less acidic than traditional iced coffee.",
    price: 4.49,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600",
    calories: 5,
    sizes: ["Grande (16oz)", "Venti (20oz)"],
    caffeine: "High"
  },
  {
    id: 9,
    name: "French Vanilla Latte",
    description: "Smooth espresso with house-made vanilla syrup and steamed milk, topped with a light foam.",
    price: 5.29,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600",
    calories: 220,
    sizes: ["Tall (12oz)", "Grande (16oz)", "Venti (20oz)"]
  },
  {
    id: 10,
    name: "Nitro Cold Brew",
    description: "Smooth cold brew infused with nitrogen for a creamy, stout-like texture and natural sweetness.",
    price: 5.99,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1591033594798-33227a05780d?w=600",
    calories: 5,
    sizes: ["Grande (16oz)"],
    nitrogenInfused: true
  },
  {
    id: 11,
    name: "Turkish Coffee",
    description: "Finely ground coffee brewed in traditional cezve, served with a piece of Turkish delight.",
    price: 5.49,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1587080266036-3494f4f66a7f?w=600",
    calories: 15,
    origin: "Turkey",
    preparation: "Traditional copper pot"
  },
  {
    id: 12,
    name: "Cortado",
    description: "Equal parts espresso and steamed milk - a Spanish classic with a perfect 1:1 ratio.",
    price: 4.79,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600",
    calories: 90,
    sizes: ["Small (5oz)"],
    origin: "Spain"
  },
  {
    id: 13,
    name: "Flat White",
    description: "Double ristretto with microfoam milk. Smooth and strong with a velvety texture.",
    price: 5.29,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600",
    calories: 160,
    sizes: ["Tall (12oz)", "Grande (16oz)"],
    origin: "Australia/New Zealand"
  },
  {
    id: 14,
    name: "Irish Cream Coffee",
    description: "Premium coffee with Irish cream flavor (non-alcoholic), topped with whipped cream.",
    price: 5.79,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
    calories: 280,
    sizes: ["Grande (16oz)"]
  },

  // TEA MENU
  {
    id: 15,
    name: "Matcha Latte",
    description: "Ceremonial grade matcha from Uji, Japan, whisked with steamed milk. Vibrant green and antioxidant-rich.",
    price: 5.99,
    category: "tea",
    image: "https://images.unsplash.com/photo-1536256263959-770afe4bf1c1?w=600",
    calories: 190,
    sizes: ["Tall (12oz)", "Grande (16oz)"],
    origin: "Uji, Japan",
    grade: "Ceremonial"
  },
  {
    id: 16,
    name: "Chai Tea Latte",
    description: "Spiced black tea with steamed milk and honey. Made with traditional Indian masala chai spices.",
    price: 5.49,
    category: "tea",
    image: "https://images.unsplash.com/photo-1571934811356-5a5ee9b1d1f0?w=600",
    calories: 210,
    sizes: ["Tall (12oz)", "Grande (16oz)", "Venti (20oz)"],
    spices: "Cardamom, Cinnamon, Ginger, Clove"
  },
  {
    id: 17,
    name: "Earl Grey Supreme",
    description: "Premium black tea with bergamot oil and cornflower petals. A classic London afternoon tea.",
    price: 4.29,
    category: "tea",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600",
    calories: 0,
    sizes: ["Pot (serves 2)", "Cup"],
    origin: "Sri Lanka"
  },
  {
    id: 18,
    name: "Moroccan Mint",
    description: "Gunpowder green tea with fresh spearmint. Served in the traditional Moroccan style.",
    price: 4.49,
    category: "tea",
    image: "https://images.unsplash.com/photo-1576092762791-dd2e2c8bf3d2?w=600",
    calories: 0,
    sizes: ["Pot (serves 2)", "Cup"],
    origin: "Morocco"
  },
  {
    id: 19,
    name: "Chamomile Citrus",
    description: "Caffeine-free herbal blend with chamomile, orange peel, and lemon verbena.",
    price: 4.29,
    category: "tea",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600",
    calories: 0,
    sizes: ["Pot (serves 2)", "Cup"],
    herbal: true
  },
  {
    id: 20,
    name: "Jasmine Dragon Pearls",
    description: "Hand-rolled green tea scented with jasmine blossoms. Each pearl unfurls as it steeps.",
    price: 5.49,
    category: "tea",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600",
    calories: 0,
    origin: "Fujian, China",
    grade: "Premium"
  },

  // PASTRIES
  {
    id: 21,
    name: "Butter Croissant",
    description: "Flaky, buttery French croissant with 24 layers, baked fresh every morning.",
    price: 3.49,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600",
    calories: 280,
    bakedFresh: true,
    contains: "Butter, Flour, Yeast"
  },
  {
    id: 22,
    name: "Almond Croissant",
    description: "Buttery croissant filled with almond cream, topped with sliced almonds and powdered sugar.",
    price: 4.49,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=600",
    calories: 390,
    popular: true,
    contains: "Almonds, Butter"
  },
  {
    id: 23,
    name: "Chocolate Danish",
    description: "Flaky pastry filled with rich Valrhona chocolate ganache and topped with pearl sugar.",
    price: 3.99,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600",
    calories: 350,
    chocolate: "Valrhona 64%"
  },
  {
    id: 24,
    name: "Cinnamon Roll",
    description: "Soft, swirled roll with cinnamon sugar and cream cheese frosting. Baked fresh daily.",
    price: 4.29,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600",
    calories: 420,
    popular: true,
    frosting: "Cream cheese"
  },
  {
    id: 25,
    name: "Blueberry Scone",
    description: "Buttery scone loaded with fresh Maine blueberries, finished with a lemon glaze.",
    price: 3.29,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1557958114-3d2440200f0b?w=600",
    calories: 290,
    blueberries: "Fresh Maine"
  },
  {
    id: 26,
    name: "Morning Bun",
    description: "Croissant dough with cinnamon sugar and orange zest, baked until caramelized.",
    price: 3.79,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600",
    calories: 320,
    contains: "Orange, Cinnamon"
  },
  {
    id: 27,
    name: "Pain au Chocolat",
    description: "French chocolate croissant with two sticks of dark chocolate wrapped in flaky pastry.",
    price: 3.99,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=600",
    calories: 310,
    chocolate: "Dark 70%"
  },

  // BREAKFAST
  {
    id: 28,
    name: "Avocado Toast",
    description: "Sourdough toast with smashed avocado, chili flakes, poached egg, and microgreens.",
    price: 8.99,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1603046891744-1f76eb10b0b2?w=600",
    calories: 420,
    popular: true,
    addOns: ["Bacon", "Smoked Salmon", "Feta"],
    bread: "House-made sourdough"
  },
  {
    id: 29,
    name: "Breakfast Sandwich",
    description: "Egg, aged cheddar, and bacon on a fresh croissant with house-made aioli.",
    price: 7.99,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
    calories: 520,
    popular: true,
    egg: "Farm-fresh, cooked to order"
  },
  {
    id: 30,
    name: "Greek Yogurt Parfait",
    description: "Creamy Greek yogurt with house-made honey granola and fresh seasonal berries.",
    price: 5.99,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",
    calories: 280,
    vegetarian: true,
    granola: "House-made with honey"
  },
  {
    id: 31,
    name: "Steel Cut Oatmeal",
    description: "Creamy steel-cut oats with brown sugar, fresh berries, and toasted nuts.",
    price: 4.99,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600",
    calories: 210,
    vegan: true,
    toppings: "Berries, Nuts, Brown Sugar"
  },
  {
    id: 32,
    name: "Quiche Lorraine",
    description: "Savory egg tart with bacon, Gruyère cheese, and caramelized onions in a butter crust.",
    price: 6.49,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1627308595176-39951538c591?w=600",
    calories: 380,
    cheese: "Gruyère"
  },
  {
    id: 33,
    name: "Eggs Benedict",
    description: "Poached eggs on English muffin with Canadian bacon and house-made hollandaise.",
    price: 9.99,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1603046891744-1f76eb10b0b2?w=600",
    calories: 550,
    available: "Weekends only",
    hollandaise: "House-made"
  },

  // LUNCH & SAVORY
  {
    id: 34,
    name: "Turkey & Avocado Sandwich",
    description: "Roasted turkey, avocado, lettuce, tomato, and garlic aioli on toasted ciabatta.",
    price: 9.99,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600",
    calories: 550,
    popular: true,
    bread: "Ciabatta"
  },
  {
    id: 35,
    name: "Caprese Panini",
    description: "Fresh mozzarella, tomato, basil, and balsamic glaze pressed on focaccia.",
    price: 8.49,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600",
    calories: 480,
    vegetarian: true,
    cheese: "Fresh mozzarella"
  },
  {
    id: 36,
    name: "Spinach & Feta Pie",
    description: "Flaky phyllo filled with spinach, feta, and dill. Served with Greek salad.",
    price: 5.99,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1627308595176-39951538c591?w=600",
    calories: 340,
    vegetarian: true,
    origin: "Greek"
  },
  {
    id: 37,
    name: "Soup of the Day",
    description: "Chef's daily creation using fresh, seasonal ingredients. Ask your server for today's selection.",
    price: 5.49,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
    calories: 180,
    daily: true,
    servedWith: "Artisan bread"
  },
  {
    id: 38,
    name: "Hummus & Pita Plate",
    description: "Creamy house-made hummus with warm pita, olives, and fresh vegetables.",
    price: 6.99,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1577805945779-2b938bb0b7a6?w=600",
    calories: 390,
    vegan: true,
    hummus: "House-made"
  },
  {
    id: 39,
    name: "Quinoa Power Bowl",
    description: "Quinoa with roasted vegetables, avocado, chickpeas, and lemon-tahini dressing.",
    price: 8.99,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    calories: 430,
    vegan: true,
    glutenFree: true
  },
  {
    id: 40,
    name: "Grilled Cheese & Tomato Soup",
    description: "Classic combination - artisan bread with three cheeses, served with tomato bisque.",
    price: 7.99,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
    calories: 620,
    popular: true,
    cheeses: "Cheddar, Gruyère, Mozzarella"
  },

  // DESSERTS
  {
    id: 41,
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream.",
    price: 6.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600",
    calories: 450,
    popular: true,
    origin: "Italy"
  },
  {
    id: 42,
    name: "Chocolate Lava Cake",
    description: "Warm Valrhona chocolate cake with molten center, served with vanilla bean ice cream.",
    price: 7.49,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
    calories: 520,
    popular: true,
    chocolate: "Valrhona 70%"
  },
  {
    id: 43,
    name: "New York Cheesecake",
    description: "Creamy, dense cheesecake with graham cracker crust and seasonal berry compote.",
    price: 6.49,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600",
    calories: 480,
    topping: "Berry compote"
  },
  {
    id: 44,
    name: "Baklava",
    description: "Layers of phyllo with walnuts, pistachios, and honey syrup. Served with whipped cream.",
    price: 4.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1602357280108-589a05c4f2c6?w=600",
    calories: 380,
    origin: "Middle East",
    nuts: "Walnuts, Pistachios"
  },
  {
    id: 45,
    name: "Flourless Chocolate Cake",
    description: "Rich, dense chocolate cake made with Valrhona chocolate - naturally gluten-free.",
    price: 5.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
    calories: 410,
    glutenFree: true,
    chocolate: "Valrhona 64%"
  },
  {
    id: 46,
    name: "Crème Brûlée",
    description: "Rich vanilla bean custard with a caramelized sugar crust. Served with fresh berries.",
    price: 5.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600",
    calories: 380,
    vanilla: "Madagascar vanilla bean"
  },

  // SNACKS & BITES
  {
    id: 47,
    name: "Fruit & Cheese Plate",
    description: "Seasonal fruits, artisanal cheeses, honey, and house-made crackers.",
    price: 8.99,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600",
    calories: 350,
    cheeses: "Brie, Aged Cheddar, Goat cheese",
    sharable: true
  },
  {
    id: 48,
    name: "Mediterranean Plate",
    description: "Olives, hummus, tzatziki, pita, and roasted red peppers.",
    price: 7.49,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1577805945779-2b938bb0b7a6?w=600",
    calories: 290,
    vegan: true,
    sharable: true
  },
  {
    id: 49,
    name: "Truffle Fries",
    description: "Crispy fries with truffle oil, parmesan, and fresh parsley. Served with garlic aioli.",
    price: 5.99,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1585109649138-04535e6d9f3e?w=600",
    calories: 380,
    popular: true,
    sauce: "Garlic aioli"
  },
  {
    id: 50,
    name: "Loaded Nachos",
    description: "Tortilla chips with cheese, jalapeños, black beans, salsa, and sour cream.",
    price: 8.49,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4f?w=600",
    calories: 620,
    sharable: true,
    vegetarian: true
  }
];

export const CoffeeMenu = () => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const [selectedItem, setSelectedItem] = useState(null);

  // Get items for active category
  const categoryItems = menuItems.filter(item => item.category === activeCategory);

  // Get category details
  const currentCategory = menuCategories.find(cat => cat.id === activeCategory) || menuCategories[0];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-900 w-full">
      {/* Hero Section - Menu Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}


        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-orange-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${40 + Math.random() * 60}px`,
              rotate: `${Math.random() * 360}deg`
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ☕
          </motion.div>
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <RestaurantMenu />
                Our Menu
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Coffee & Kitchen
              </span>
            </h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Artisanal coffee • Fresh pastries • Breakfast & Lunch • House-made desserts
            </motion.p>

          </motion.div>
        </div>
      </section>

      {/* Menu Categories Navigation */}
      <section id="menu-categories" className="py-8 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Header */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeCategory}
          >
            <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${currentCategory.color} mb-4`}>
              <span className="text-white text-4xl">{currentCategory.icon}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{currentCategory.name}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{currentCategory.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            {categoryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="flex">
                  {/* Image */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          {item.name}
                          {item.popular && (
                            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Star fontSize="small" className="!text-xs" />
                              Popular
                            </span>
                          )}
                          {item.chefRecommendation && (
                            <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                              Chef's Pick
                            </span>
                          )}
                        </h3>
                        {item.origin && (
                          <p className="text-xs text-gray-500 mt-1">{item.origin}</p>
                        )}
                      </div>
                      <span className="text-xl font-bold text-orange-400">
                        ${item.price}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Item details */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.calories && (
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <LocalFireDepartment fontSize="small" className="!text-xs" />
                          {item.calories} cal
                        </span>
                      )}
                      {item.sizes && (
                        <span className="text-xs text-gray-500">
                          {item.sizes.length > 1 ? `${item.sizes.length} sizes` : item.sizes[0]}
                        </span>
                      )}
                      {item.vegetarian && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                          Vegetarian
                        </span>
                      )}
                      {item.vegan && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                          Vegan
                        </span>
                      )}
                      {item.glutenFree && (
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                          GF
                        </span>
                      )}
                    </div>

                    {/* Dietary tags */}
                    {(item.roast || item.notes) && (
                      <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-500">
                        {item.roast && <span>{item.roast} Roast</span>}
                        {item.notes && <span>• {item.notes}</span>}
                      </div>
                    )}

                    {/* Click for more indicator */}
                    <div className="mt-2 text-xs text-orange-400 flex items-center gap-1">
                      <span>Click for details</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {categoryItems.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-400 text-lg">No items in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-gray-800 rounded-xl max-w-2xl w-full overflow-hidden border border-gray-700"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-white">
                        {selectedItem.name}
                      </h2>
                      {selectedItem.popular && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <Star fontSize="small" className="!text-xs" />
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-lg">
                      {selectedItem.description}
                    </p>
                  </div>
                  <span className="text-3xl font-bold text-orange-400">
                    ${selectedItem.price}
                  </span>
                </div>

                {/* Detailed Information */}
                <div className="space-y-4">
                  {/* Origin & Details */}
                  {(selectedItem.origin || selectedItem.roast || selectedItem.notes) && (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h3 className="text-white font-semibold mb-2">Details</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {selectedItem.origin && (
                          <div>
                            <span className="text-gray-400">Origin:</span>
                            <span className="text-white ml-2">{selectedItem.origin}</span>
                          </div>
                        )}
                        {selectedItem.roast && (
                          <div>
                            <span className="text-gray-400">Roast:</span>
                            <span className="text-white ml-2">{selectedItem.roast}</span>
                          </div>
                        )}
                        {selectedItem.notes && (
                          <div className="col-span-2">
                            <span className="text-gray-400">Tasting Notes:</span>
                            <span className="text-white ml-2">{selectedItem.notes}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Sizes */}
                  {selectedItem.sizes && (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h3 className="text-white font-semibold mb-2">Available Sizes</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.sizes.map((size, index) => (
                          <span key={index} className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dietary & Allergens */}
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Dietary Information</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.vegetarian && (
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                          Vegetarian
                        </span>
                      )}
                      {selectedItem.vegan && (
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                          Vegan
                        </span>
                      )}
                      {selectedItem.glutenFree && (
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                          Gluten Free
                        </span>
                      )}
                      {selectedItem.calories && (
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {selectedItem.calories} calories
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contains/Allergens */}
                  {selectedItem.contains && (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h3 className="text-white font-semibold mb-2">Contains</h3>
                      <p className="text-gray-300 text-sm">{selectedItem.contains}</p>
                    </div>
                  )}

                  {/* Add-ons if available */}
                  {selectedItem.addOns && (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h3 className="text-white font-semibold mb-2">Add-ons Available</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.addOns.map((addon, index) => (
                          <span key={index} className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                            + {addon}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  className="w-full mt-6 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

