import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";
import { ProductCard } from "../../molecules/product-card";
import "./index.css";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <ul className="product-list-wrpr">
      {products?.products?.map((item) => (
        <li key={item?.id} className="product-list">
          <ProductCard data={item} />
        </li>
      ))}
    </ul>
  );
};

export { ProductList };
