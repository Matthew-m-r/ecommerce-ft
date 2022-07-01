import Item from "@components/item/item.component";
import Loader from "@components/loader/loader.component";
import { IProduct } from "@interfaces/product/product.interface";
import { useState, useEffect } from "react";
import { getProducts } from "../../utils/services/product";
import "./itemListContainer.styles.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const response: IProduct[] = await getProducts;
      console.log(typeof response);
      setProducts(response);
    })();
  }, []);

  return (
    <div className="main-item-list-container">
      <div className="row-items-container">
        {products.length === 0 ? (
          <Loader />
        ) : (
          products.map((product: IProduct) => {
            return <Item product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
