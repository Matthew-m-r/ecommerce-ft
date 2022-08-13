import { ICart } from "@interfaces/cart/cart.interface";
import React, { Context, createContext, useContext, useState } from "react";
import { orderInitialState } from "@interfaces/order/order.interface";

import { IOrder } from "@interfaces/order/order.interface";
import { getTotalCharge } from "@utils/services/cart";

const CART_DATA = {
  product: {
    id: "",
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
  clearCart: any;
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

  const removeItem = (productId: string) => {
    const productIndex = isInCart(productId);
    cartData.splice(productIndex, 1);
    setCartData([...cartData]);
  };

  const clearCart = () => {
    setCartData([]);
  };

  const isInCart = (id: string) => {
    const product = cartData.findIndex((prod) => prod.product.id === id);
    return product;
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        setCartData,
        addItem,
        clearCart,
        removeItem,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, AppProviders, useCart };
