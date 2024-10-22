import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';


const Navbar = ({ itemCount, toggleCart }: { itemCount: number; toggleCart: () => void }) => {
  return (
    
    <nav className="bg-white shadow-md p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <a href="/">MyStore</a>  {/* Replace with your logo */}
      </div>

      {/* Login and Cart Section */}
      <div className="flex items-center space-x-6">
        {/* Login Icon */}
        <button className="flex items-center space-x-1 hover:text-gray-600">
          <FaUser size={20} />
          <span className="hidden sm:inline">Login</span>
        </button>

        {/* Cart Icon */}
        <button
          onClick={toggleCart}
          className="relative flex items-center space-x-1 hover:text-gray-600"
        >
          <FaShoppingCart size={20} />
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
          <span className="hidden sm:inline">Cart</span>
        </button>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;

