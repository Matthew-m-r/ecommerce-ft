import { IProduct } from "@interfaces/product/product.interface";
import { products } from "@mocks/products";

export const getProducts: Promise<IProduct[]> = new Promise(
  (resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(products);
      }, 5000);
    } else {
      reject([]);
    }
  }
);
