// app/checkout/page.tsx

// app/checkout/page.tsx
// "use client";
// import React from 'react';
// import { useCart } from '@/app/context/CartContext';

// const CheckoutPage: React.FC = () => {
//   const { cart } = useCart();
//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h2 className="text-3xl font-bold mb-8">Checkout</h2>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
//         {/* Order Summary */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
//           {cart.map((item) => (
//             <div key={item.id} className="flex items-center justify-between mb-4">
//               <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
//               <span className="flex-1">{item.title}</span>
//               <span className="w-24">${(item.price * item.quantity).toFixed(2)}</span>
//             </div>
//           ))}
//           <div className="flex justify-between font-semibold border-t pt-4 mt-4">
//             <span>Total</span>
//             <span>${total.toFixed(2)}</span>
//           </div>
//         </div>

//         {/* Billing & Shipping Information */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold mb-4">Billing & Shipping Information</h3>
//           {/* Add form fields for name, address, etc. */}
//         </div>
//       </div>

//       {/* Complete Purchase Button */}
//       <button
//         className="mt-8 w-full lg:w-1/2 bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600"
//       >
//         Complete Purchase
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;

// app/checkout/page.tsx

// app/checkout/page.tsx

// app/checkout/page.tsx

// app/checkout/page.tsx

// app/checkout/page.tsx
"use client";
import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [contactInfo, setContactInfo] = useState({
    email: '',
  });

  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    city: '',
    shippingMethod: 'free',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, section: string) => {
    const { name, value } = e.target;
    if (section === 'contact') {
      setContactInfo(prev => ({ ...prev, [name]: value }));
    } else {
      setDeliveryInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    alert('Payment submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8">Checkout</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
              <span className="flex-1">{item.title}</span>
              <span className="w-24">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold border-t pt-4 mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Contact and Delivery Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={contactInfo.email}
                onChange={(e) => handleInputChange(e, 'contact')}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Delivery Information</h3>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={deliveryInfo.firstName}
                  onChange={(e) => handleInputChange(e, 'delivery')}
                  className="w-full p-2 border rounded"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={deliveryInfo.lastName}
                  onChange={(e) => handleInputChange(e, 'delivery')}
                  className="w-full p-2 border rounded"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={deliveryInfo.address}
                onChange={(e) => handleInputChange(e, 'delivery')}
                className="w-full p-2 border rounded"
                placeholder="Enter your address"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={deliveryInfo.phone}
                onChange={(e) => handleInputChange(e, 'delivery')}
                className="w-full p-2 border rounded"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={deliveryInfo.city}
                onChange={(e) => handleInputChange(e, 'delivery')}
                className="w-full p-2 border rounded"
                placeholder="Enter your city"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Shipping Method</label>
              <select
                name="shippingMethod"
                value={deliveryInfo.shippingMethod}
                onChange={(e) => handleInputChange(e, 'delivery')}
                className="w-full p-2 border rounded"
                disabled
              >
                <option value="free">Free Shipping</option>
              </select>
            </div>

            {/* Payment Information */}
            <h3 className="text-xl font-semibold mt-6 mb-4">Payment Information</h3>
            <div className="flex items-center">
              <input
                type="radio"
                id="cash"
                name="payment"
                value="cash"
                className="mr-2"
                defaultChecked
              />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>

            {/* Pay Now Button */}
            <button
              onClick={handleSubmit}
              className="mt-6 w-full bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;










