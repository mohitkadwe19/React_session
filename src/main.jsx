import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Product from "./components/Product.jsx";
import { createContext } from "react";

export const MyContext = createContext();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* this is context provider that helps you provide the data to all the component */}
    <MyContext.Provider
      // value have the initial value of the context that you want to provide to all the components
      value={{
        username: "admin",
        email: "admin@gmail.com",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </MyContext.Provider>
  </BrowserRouter>
);
