import { IProduct } from "@interfaces/product/product.interface";

export interface IOrder {
  buyer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  products: any;
  totalCharge: number;
}

export const orderInitialState = {
  buyer: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  products: [],
  totalCharge: 0,
} as IOrder;
