import Item from "@components/item/item.component";
import Loader from "@components/loader/loader.component";
import { IProduct } from "@interfaces/product/product.interface";
import { useEffect, useState } from "react";
import { getProducts } from "../../utils/services/product";
import "./itemListContainer.styles.scss";

interface ItemListContainerProps {
  categoryId?: string;
}

const ItemListContainer = ({ categoryId }: ItemListContainerProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const response: IProduct[] = await getProducts;
      if (categoryId) {
        setProducts(
          response.filter(
            (cat: IProduct) => cat.categoryId === parseInt(categoryId)
          )
        );
      } else {
        setProducts(response);
      }
    })();
  }, [categoryId]);

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
