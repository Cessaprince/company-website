import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Product from "./pages/Product"; // Make sure this file exists
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/products" element={<Product />} />
            <Route path="/contact-us" element={<Contact />} />

    </Routes>
  );
};

export default App;