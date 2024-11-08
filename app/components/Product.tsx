
import React from 'react';

interface ProductData {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductProps {
  product: ProductData; // Define product as a ProductData type
  addToCart: (product: ProductData) => void; // Define addToCart as a function with ProductData parameter
}

const Product: React.FC<ProductProps> = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

