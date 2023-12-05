import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductListPage } from "./pages/listing";
import { CartDetails } from "./pages/cart-details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListPage />} />
        <Route path="/cart-details" element={<CartDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
