import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // useEffect example for App-level side effects (like logging)
  useEffect(() => {
    console.log("App component mounted");

    // Cleanup function (runs when the component unmounts)
    return () => {
      console.log("App component unmounted");
    };
  }, []); // Empty dependency array ensures this effect runs only once (on mount and unmount)

  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
