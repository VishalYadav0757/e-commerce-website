import React, { useContext } from "react";
import { ProductList } from "../../organisms/product-list";
import "./index.css";
import { ProductContext } from "../../context/product-context";

const ProductListPage = () => {
  const { cartItemCount } = useContext(ProductContext);

  return (
    <>
      <div className="heading-wrpr">
        <div className="heading">Products</div>
        <div className="cart-heading">
          Cart <span>{cartItemCount}</span>
        </div>
      </div>
      <ProductList />
    </>
  );
};

export { ProductListPage };
