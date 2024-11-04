// /context/CartContext.tsx
"use client";
import React, { createContext, useContext, useState } from 'react';

interface ProductData {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: ProductData[];
  addToCart: (product: ProductData) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  cartVisible: boolean;
  toggleCartVisibility: () => void;
  closeCart: () => void;  // Add closeCart to the context type
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<ProductData[]>([]);
  const [cartVisible, setCartVisible] = useState(false);

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

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        cartVisible,
        toggleCartVisibility,
        closeCart,  // Pass closeCart in the provider value
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
