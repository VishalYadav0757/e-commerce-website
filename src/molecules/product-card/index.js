import React, { useState, useEffect } from "react";
import "./index.css";
import { AddButton } from "../../atoms/add-button";

const ProductCard = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props?.data);
  }, [props]);

  return (
    <div className="product-card-wrpr">
      <div className="product-img">
        <img src={data?.thumbnail} alt="product-img" />
      </div>
      <div className="product-title">{data?.title}</div>
      <div className="product-desc">{data?.description}</div>
      <div className="product-price">
        <span>${data?.price}</span>
        <span>{data?.rating}/5</span>
      </div>
      <AddButton data={data} />
    </div>
  );
};

export { ProductCard };
