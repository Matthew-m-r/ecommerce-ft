import { IProduct } from "@interfaces/product/product.interface";

export interface ICart {
  product: IProduct;
  quantity: number;
}
