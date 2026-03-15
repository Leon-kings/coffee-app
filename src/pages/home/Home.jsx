import React from "react";
import { Hero } from "../../components/header/Header";
import { CoffeeSection } from "../../components/coffee/CoffeePart";
import { AboutSection } from "../about/About";
import { CounterSection } from "../count/Counter";
import { Testimony } from "../testimony/Testimony";
import { Gallery } from "../gallery/Gallery";
import { CoffeeMenu } from "../coffeemenu/CoffeeMenu";
import { ContactSection } from "../contact/ContactUs";
import { ProductList } from "../../components/product/ProductList";

export default function Home() {
  return (
    <>
      <div className="w-full text-black mt-18 rounded-2xl">
        <div className="text-white dark:text-white">
          {/* Header */}
          <div className="w-full text-white ">
            <div className="w-full text-white dark:text-white">
              <Hero />
            </div>
          </div>

          {/* Coffee Section */}
          <div className="w-full text-white">
            <div className="w-full text-white dark:text-white">
              <CoffeeSection />
            </div>
          </div>

          {/* About Section */}
          <div className="w-full text-white">
            <div className="w-full text-white dark:text-white">
              <AboutSection />
            </div>
          </div>

          {/* Counter Section */}
          <div className="w-full text-white">
            <div className="w-full text-white dark:text-white">
              <CounterSection />
            </div>
          </div>

          {/* Coffee Section */}
          <div className="w-full text-white">
            <div className="w-full text-white dark:text-white">
              <ProductList />
            </div>
          </div>

          {/* Testimony Section */}
          <div className="w-full text-white">
            <div className="w-full text-white dark:text-white">
              <Testimony />
            </div>
          </div>

          {/* Gallery Section */}
          <div className="w-full text-white">
            <div className="w-full text-white dark:text-white">
              <Gallery />
            </div>
          </div>

          {/* Coffee Menu Section */}
          <div className="w-full text-white">
            <div className="w-full text-white dark:text-white">
              <CoffeeMenu />
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-full text-white">
            <div className="w-full text-white dark:text-white">
              <ContactSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
