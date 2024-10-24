
   "use client"
   import { useEffect, useState } from 'react';
   import Navbar from '@/app/components/Navbar';
   import Product from '@/app/components/Product';
   import Cart from '@/app/components/Cart';
   
   interface ProductData {
     id: number;
     title: string;
     price: number;
     image: string;
   }
   
   const HomePage = () => {
     const [products, setProducts] = useState<ProductData[]>([]);
     const [cart, setCart] = useState<{ id: number; title: string; price: number; image: string; quantity: number }[]>([]);
     const [cartVisible, setCartVisible] = useState(false);
   
     useEffect(() => {
       const fetchProducts = async () => {
         const response = await fetch('https://fakestoreapi.com/products');
         const data = await response.json();
         setProducts(data);
       };
   
       fetchProducts();
     }, []);
   
     const addToCart = (product: ProductData) => {
       setCart(prevCart => {
         const existingProduct = prevCart.find(item => item.id === product.id);
         if (existingProduct) {
           return prevCart.map(item =>
             item.id === product.id
               ? { ...item, quantity: item.quantity + 1 }
               : item
           );
         } else {
           return [...prevCart, { ...product, quantity: 1 }];
         }
       });
     };
   
     const increaseQuantity = (id: number) => {
       setCart(prevCart =>
         prevCart.map(item =>
           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
         )
       );
     };
   
     const decreaseQuantity = (id: number) => {
       setCart(prevCart =>
         prevCart
           .map(item =>
             item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
           )
           .filter(item => item.quantity > 0)
       );
     };
   
     const removeItem = (id: number) => {
       setCart(prevCart => prevCart.filter(item => item.id !== id));
     };
   
     const toggleCart = () => {
       setCartVisible(!cartVisible);
     };
   
     const closeCart = () => {
       setCartVisible(false);
     };
   
     return (
       <div className="min-h-screen bg-gray-100">
         <Navbar itemCount={cart.length} toggleCart={toggleCart} />
         <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
           {products.map(product => (
             <Product key={product.id} product={product} addToCart={addToCart} />
           ))}
         </main>
         {cartVisible && (
           <Cart
             items={cart}
             increaseQuantity={increaseQuantity}
             decreaseQuantity={decreaseQuantity}
             removeItem={removeItem}
             closeCart={closeCart}  // Pass the closeCart function to the Cart component
           />
         )}
       </div>
     );
   };
   
   export default HomePage;
   

   

