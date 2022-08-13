import { ICart } from "@interfaces/cart/cart.interface";

export const getCartListQuantity = (cartData: ICart[]) => {
  const allProducts =
    cartData.length !== 0
      ? cartData.map((prod) => prod.quantity).reduce((a, b) => a + b)
      : 0;
      
  return allProducts;
};

export const getTotalCharge = (cartData: ICart[]) => {
  const allProducts =
    cartData.length !== 0
      ? cartData.map((prod) => prod.quantity * prod.product.price).reduce((a, b) => a + b)
      : 0;
      
  return allProducts;
};
