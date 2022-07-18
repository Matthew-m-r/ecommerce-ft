import { ICart } from "@interfaces/cart/cart.interface";
import { IProduct } from "@interfaces/product/product.interface";
import React, { Context, createContext, useContext, useState } from "react";

const CART_DATA = {
  product: {
    id: 0,
    title: "",
    description: "",
    price: 0,
    pictureUrl: "",
    categoryId: 0,
    available: 0,
    stock: 0,
  },
  quantity: 0,
};

const CartContext: Context<ICartContext> = createContext({
  cartData: [CART_DATA],
  setCartData: () => {},
  addItem: (product: ICart) => {},
} as ICartContext);

const useCart = () => {
  return useContext(CartContext);
};

export interface ICartContext {
  cartData: ICart[];
  setCartData: any;
  addItem: any;
  clear: any;
  removeItem: any;
  isInCart: any;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<CartProviderProps> = ({ children }) => {
  const [cartData, setCartData] = useState<ICart[]>([]);

  const addItem = (newProduct: ICart) => {
    const oldProduct = isInCart(newProduct.product.id);

    if (oldProduct !== -1) {
      cartData[oldProduct].quantity = newProduct.quantity;
      setCartData([...cartData]);
    } else {
      cartData.push(newProduct);
      setCartData([...cartData]);
    }
  };

  const removeItem = (productId: number) => {
    const productIndex = isInCart(productId);
    cartData.splice(productIndex, 1);
    setCartData([...cartData]);
  };

  const clear = () => {
    setCartData([]);
  };

  const isInCart = (id: number) => {
    const product = cartData.findIndex((prod) => prod.product.id === id);
    return product;
  };

  return (
    <CartContext.Provider
      value={{ cartData, setCartData, addItem, clear, removeItem, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, AppProviders, useCart };
