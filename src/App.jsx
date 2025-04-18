import React from "react";
import "./App.css";
import AboutSection from "./pages/about/About";
import NavbarWithMegaMenu from "./components/nav/Navbar";
import FooterSection from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import CoffeeSection from "./components/coffee/CoffeePart";
import ProductList from "./components/product/ProductList";

function App() {
  return (
    <>
      <div className="w-full">
        <BrowserRouter>
          <NavbarWithMegaMenu />
          <Routes>
            {" "}
            <Route element={<Home />} path="/" />
            <Route element={<ProductList />} path="/Product/234-345/list" />
            <Route element={<AboutSection />} path="/About-73297-839/us" />
            <Route element={<Menu />} path="/Menu-7937-83/list" />
            <Route element={<CoffeeSection />} path="/Coffee-279237-803/Menu" />
          </Routes>
          <FooterSection />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
