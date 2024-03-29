import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductProvider } from "./context/product-context"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
