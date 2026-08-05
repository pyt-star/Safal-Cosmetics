import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Process from "./components/Process/Process";
import Stats from "./components/Stats/Stats";
import QuoteModal from "./components/QuoteModal/QuoteModal";

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />
      <Hero />
      <Products />
      <About />
      <WhyChoose />
      <Process />
      <Stats />
      
      {isQuoteOpen && <QuoteModal onClose={() => setIsQuoteOpen(false)} />}
    </div>
  );
}

export default App;