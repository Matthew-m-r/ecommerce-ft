export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
  categoryId: number;
  available: number;
  stock: number;
}

export const productInitialState = {
  id: "",
  title: "",
  description: "",
  price: 0,
  pictureUrl: "",
  categoryId: 0,
  available: 0, 
  stock: 0,
} as IProduct;