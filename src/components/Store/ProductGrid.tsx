'use client';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart: () => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <div className="bg-power grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              
            </div>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <span className="bg-custom-yellow text-black px-5 py-2 rounded-full text-xd">
                D {product.price}
            </span>
            <button
              onClick={onAddToCart}
              className=" w-full mt-4 bg-black text-white py-2 hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}