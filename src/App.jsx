import React from "react";
import "./App.css";
import { AboutSection } from "./pages/about/About";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
// import Menu from "./pages/menu/Menu";
import { CoffeeSection } from "./components/coffee/CoffeePart";
import { ProductList } from "./components/product/ProductList";
import { Navbar } from "./components/nav/Navbar";

function App() {
  return (
    <>
      <div className="w-full">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {" "}
            <Route element={<Home />} path="/" />
            <Route element={<ProductList />} path="/Product/234-345/list" />
            <Route element={<AboutSection />} path="/About-73297-839/us" />
            {/* <Route element={<Menu />} path="/Menu-7937-83/list" /> */}
            <Route element={<CoffeeSection />} path="/Coffee-279237-803/Menu" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
