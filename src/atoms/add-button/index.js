import React, { useEffect, useState, useContext } from "react";
import "./index.css";
import { ProductContext } from "../../context/product-context";

const AddButton = (props) => {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);
  const { addToCart, removeFromCart } = useContext(ProductContext);

  useEffect(() => {
    setData(props.data);
  }, [props]);

  const increase = () => {
    let c = count;

    if (c < data?.stock) {
      c = c + 1;
      setCount(c);
      addToCart(data);
    }
  };

  const decrease = () => {
    let c = count;

    if (c > 0) {
      c = c - 1;
      setCount(c);
      removeFromCart(data);
    }
  };

  const ui = () => {
    if (count > 0) {
      return (
        <div className="product-btn-count">
          <span className="incCount" onClick={() => decrease()}>
            -
          </span>
          <span className="counter">{count}</span>
          <span className="incCount" onClick={() => increase()}>
            +
          </span>
        </div>
      );
    }

    return (
      <button className="product-btn" onClick={() => increase()}>
        Add to Cart
      </button>
    );
  };

  return ui();
};

export { AddButton };
