import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Brand from "./components/brands/brand";
import Products from "./components/Products/Products";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/Footer";
import ServicePage from "./components/ServicePage/ServicePage";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Brand />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/services/:serviceId"
          element={<ServicePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;