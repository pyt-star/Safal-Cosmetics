import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Brands from "./components/brands/brand";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Brands />

      <Products />

      <Contact />

      <Footer />
    </>
  );
}

export default App;