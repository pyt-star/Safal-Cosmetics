import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import QuoteModal from "./components/QuoteModal/QuoteModal";
import WhyChoose from "./components/WhyChoose/WhyChoose";

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <>
      <Navbar onOpenQuote={handleOpenQuote} />

      <main>
        <Hero onOpenQuote={handleOpenQuote} />
        <Stats />
        <About />
        <WhyChoose />
      </main>

      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </>
  );
}

export default App;