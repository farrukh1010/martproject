"use client"
import React from 'react';
import { FaTrash } from 'react-icons/fa'; // For delete icon
import { MdClose } from 'react-icons/md'; // Close icon for the cancel button
import { useRouter } from 'next/router'
// import Checkout from './Checkout';
interface CartProps {
  items: { id: number; title: string; price: number; image: string; quantity: number }[];
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  closeCart: () => void;  // Function to close the cart
}

const Cart: React.FC<CartProps> = ({ items, increaseQuantity, decreaseQuantity, removeItem, closeCart }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const router = useRouter();
//   const handleCheckout = () => {
//     router.push('/checkout');  // Navigate to the checkout page
//   };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto relative">
        {/* Close button in the top-right corner */}
        <button onClick={closeCart} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <MdClose size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Your Cart</h2>
        {items.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
            <>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Product</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Quantity</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Total</th>
                <th className="px-4 py-2"></th> {/* Empty header for delete icon */}
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2 flex items-center">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-2" />
                    <span>{item.title}</span>
                  </td>
                  <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded">
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="px-4 py-2 text-right font-bold">Total:</td>
                <td className="px-4 py-2 font-bold">${total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
           {/* Checkout button */}
           <button
        //    onClick={handleCheckout}

           className="w-full bg-blue-600 text-white py-2 mt-4 rounded hover:bg-blue-700" 
            // onClick={()=>{router.push("/checkout")}}
            >
           Checkout
         </button>
         </>
        )}
      </div>
    </div>
  );
};

export default Cart;
