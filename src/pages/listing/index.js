import React, { useContext } from "react";
import { ProductList } from "../../organisms/product-list";
import { ProductContext } from "../../context/product-context";
import "./index.css";

const ProductListPage = () => {
  const { cartItemCount } = useContext(ProductContext);

  const handleClick = () => {
    if (cartItemCount > 0) {
      window.location.href = "/cart-details";
    } else {
      alert("Your cart looks empty  :(\nPlease add items in your cart !!");
    }
  };

  return (
    <>
      <div className="heading-wrpr">
        <div className="heading">Products</div>
        <div className="cart-heading" onClick={handleClick}>
          Cart <span>{cartItemCount}</span>
        </div>
      </div>
      <ProductList />
    </>
  );
};

export { ProductListPage };
