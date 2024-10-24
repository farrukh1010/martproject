"use client";
import React from 'react';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {/* You can pull the cart data from local state or global state */}
        <p>Product details and total price go here.</p>
        <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600 transition">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;

// "use client";
// import React from 'react';
// import { useRouter } from 'next/navigation'; // For navigation
// import { FaArrowLeft } from 'react-icons/fa';

// interface CheckoutProps {
//   items: { id: number; title: string; price: number; image: string; quantity: number }[];
//   total: number;
// }

// const Checkout: React.FC<CheckoutProps> = ({ items, total }) => {
//   const router = useRouter();

//   // Function to navigate back to the cart
//   const handleBackToCart = () => {
//     router.push('/cart');
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <div className="container mx-auto max-w-4xl bg-white p-6 shadow-md rounded-lg">
//         {/* Back to Cart */}
//         <button onClick={handleBackToCart} className="text-blue-500 hover:underline mb-4 flex items-center">
//           <FaArrowLeft className="mr-2" /> Back to Cart
//         </button>

//         <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>

//         {items.length === 0 ? (
//           <p className="text-center">Your cart is empty.</p>
//         ) : (
//           <>
//             {/* Products Table */}
//             <table className="min-w-full divide-y divide-gray-200 mb-6">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Product</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Quantity</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {items.map(item => (
//                   <tr key={item.id} className="border-b">
//                     <td className="px-4 py-2 flex items-center">
//                       <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-2" />
//                       <span>{item.title}</span>
//                     </td>
//                     <td className="px-4 py-2">${item.price.toFixed(2)}</td>
//                     <td className="px-4 py-2">{item.quantity}</td>
//                     <td className="px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td colSpan={3} className="px-4 py-2 text-right font-bold">Total:</td>
//                   <td className="px-4 py-2 font-bold">${total.toFixed(2)}</td>
//                 </tr>
//               </tfoot>
//             </table>

//             {/* Billing Details Section */}
//             <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6">
//               <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
//               <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Shipping Address"
//                   className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </form>
//             </div>

//             {/* Payment and Confirm Section */}
//             <div className="text-center">
//               <button
//                 className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
//               >
//                 Confirm Order
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Checkout;




