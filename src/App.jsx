import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import CoffeeSection from "./components/coffee/CoffeePart";
import AboutSection from "./pages/about/About";
import CounterSection from "./pages/count/Counter";
import Testimony from "./pages/testimony/Testimony";
import Gallery from "./pages/gallery/Gallery";
import NavbarWithMegaMenu from "./components/nav/Navbar";
import CoffeeMenu from "./pages/coffeemenu/CoffeeMenu";
import ContactSection from "./pages/contact/ContactUs";
import FooterSection from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="w-full">
        <BrowserRouter>
          <NavbarWithMegaMenu />
          <Routes>
            {" "}
            <Route element={<Home />} path="/" />
            {/* 
            
           
          
          
            
            <ContactSection /> */}
          </Routes>
          <FooterSection />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
