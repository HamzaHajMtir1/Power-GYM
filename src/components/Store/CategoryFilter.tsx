'use client';

import { Filter, ShoppingCart } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  cartCount: number;
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  cartCount
}: CategoryFilterProps) {
  return (
    <><h1 className="text-custom-yellow text-center text-4xl font-bold mb-10">Netrution Product</h1><div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4 ">
        <Filter className="h-5 w-5 text-white" />
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full ${selectedCategory === category
                  ? 'bg-custom-yellow text-black'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cart indicator */}
      <div className="relative cursor-pointer">
        <ShoppingCart className="h-6 w-6 text-white hover-bg-custom-yellow transition-colors" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-custom-yellow text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {cartCount}
          </span>
        )}
      </div>
    </div></>
  );
}