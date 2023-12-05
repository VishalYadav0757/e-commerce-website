/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import urls from "./urls";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const productURL = urls.products;

  useEffect(() => {
    axios
      .get(productURL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("product-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const productId = product?.id;
    const updatedCart = [...cart];
    const indexToRemove = updatedCart.findIndex(
      (item) => item.id === productId
    );

    if (indexToRemove !== -1) {
      updatedCart.splice(indexToRemove, 1);
      setCart(updatedCart);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        addToCart,
        removeFromCart,
        cartItemCount: cart.length,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
