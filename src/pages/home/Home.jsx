 
import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../../components/header/Header";
import CoffeeSection from "../../components/coffee/CoffeePart";
import AboutSection from "../about/About";
import CounterSection from "../count/Counter";
import Testimony from "../testimony/Testimony";
import Gallery from "../gallery/Gallery";
import CoffeeMenu from "../coffeemenu/CoffeeMenu";
import ContactSection from "../contact/ContactUs";
import ProductList from "../../components/product/ProductList";

export default function Home() {
  return (
    <>
      <div className="w-full text-black ">
        <Box className="text-white dark:text-white">
          {/* Header */}
          <Box className="w-full text-white ">
            <Container className="w-full text-white dark:text-white">
              <Header />
            </Container>
          </Box>

          {/* Coffee Section */}
          <Box className="w-full text-white ">
            <Container className="w-full text-white dark:text-white">
              <CoffeeSection />
            </Container>
          </Box>

          {/* About Section */}
          <Box className="w-full text-white ">
            <Container className="w-full text-white dark:text-white">
              <AboutSection />
            </Container>
          </Box>

          {/* Counter Section */}
          <Box className="w-full text-white ">
            <Container className="w-full text-white dark:text-white">
              <CounterSection />
            </Container>
          </Box>

          {/* Coffee Section */}
          <Box className="w-full text-white ">
            <Container className="w-full text-white dark:text-white">
              <ProductList />
            </Container>
          </Box>

          {/* Testimony Section */}
          <Box className="w-full text-white ">
            <Container className="w-full text-white dark:text-white">
              <Testimony />
            </Container>
          </Box>

          {/* Gallery Section */}
          <Box className="w-full text-white ">
            <Container className="w-full text-white dark:text-white">
              <Gallery />
            </Container>
          </Box>

          {/* Coffee Menu Section */}
          <Box className="w-full text-white ">
            <Container className="w-full text-white dark:text-white">
              <CoffeeMenu />
            </Container>
          </Box>

          {/* Contact Section */}
          <Box className="w-full text-white ">
            <Container className="w-full text-white dark:text-white">
              <ContactSection />
            </Container>
          </Box>
        </Box>
      </div>
    </>
  );
}
