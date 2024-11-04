// components/Navbar.tsx
import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

interface NavbarProps {
  itemCount: number; // Define itemCount as a number
  toggleCart: () => void; // Define toggleCart as a function with no arguments
}

const Navbar: React.FC<NavbarProps> = ({ itemCount, toggleCart }) => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">MyStore</a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1 hover:text-gray-600">
            <FaUser size={20} />
            <span className="hidden sm:inline">Login</span>
          </button>

          <button onClick={toggleCart} className="relative flex items-center space-x-1 hover:text-gray-600">
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


