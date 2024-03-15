// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Products from "./components/Products";

import "./App.css";
import Cart from "./components/ContextAPI/pages/Cart";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import Nav from "./components/pages/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Product from "./components/dynamic-route/Product";
// import DataReducer from "./components/DataReducer";
// import CartContext from "./components/ContextAPI/Context/CartContext";
import Products from "./components/ContextAPI/pages/Products";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Products /> */}
      {/* <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router> */}

      {/* <DataReducer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
