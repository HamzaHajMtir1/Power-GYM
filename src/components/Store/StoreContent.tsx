'use client';

import CategoryFilter from './CategoryFilter';
import ProductGrid from './ProductGrid';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface StoreContentProps {
  categories: string[];
  products: Product[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onAddToCart: () => void;
  cartCount: number;
}

export default function StoreContent({
  categories,
  products,
  selectedCategory,
  onCategoryChange,
  onAddToCart,
  cartCount
}: StoreContentProps) {
  return (
    <div className="container mx-auto py-12 px-4">
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={onCategoryChange}
        cartCount={cartCount}
      />
      
      <ProductGrid 
        products={products} 
        onAddToCart={onAddToCart} 
      />
    </div>
  );
}