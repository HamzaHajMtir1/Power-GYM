"use client"
import React, { useState } from 'react';
import StoreHero from '@/components/Store/StoreHero';
import StoreContent from '@/components/Store/StoreContent';



type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Premium Whey Protein",
    category: "Protein",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=600",
    description: "High-quality whey protein isolate for optimal muscle recovery"
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    category: "Performance",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1594498653385-d5dd92c11c81?auto=format&fit=crop&q=80&w=600",
    description: "Pure creatine monohydrate for strength and power"
  },
  {
    id: 3,
    name: "Mass Gainer",
    category: "Weight Gain",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600",
    description: "High-calorie formula for muscle mass gain"
  },
  {
    id: 4,
    name: "BCAA Complex",
    category: "Recovery",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=600",
    description: "Essential amino acids for muscle preservation"
  }
];

const categories = ["All", "Protein", "Performance", "Weight Gain", "Recovery"];

function Store() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [cartCount, setCartCount] = useState(0);
  
    const filteredProducts = selectedCategory === "All" 
      ? products 
      : products.filter(product => product.category === selectedCategory);
  
    const handleAddToCart = () => {
      setCartCount(prev => prev + 1);
    };
  
    return (
      <div className="min-h-screen bg-power">
        <StoreHero />
  
        <StoreContent 
          categories={categories}
          products={filteredProducts}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onAddToCart={handleAddToCart}
          cartCount={cartCount}
        />
      </div>
    );
  }
  
  export default Store;