import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
      </main>
    </>
  );
}

export default App;