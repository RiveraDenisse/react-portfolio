import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import "./App.css";
import coverImage from "./assets/portfolioimage.png";

function App() {
  const [sections] = useState(["About me", "Contact", "Portfolio", "Resume"]);
  const [currentCategory, setCurrentCategory] = useState(sections[0]);

  return (
    <div>
      <Nav
        sections={sections}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />

      <main>
        {currentCategory === "About Me" ? (
          <About />
        ) : currentCategory === "Portfolio" ? (
          <Portfolio />
        ) : currentCategory === "Contact" ? (
          <ContactForm />
        ) : (
          <About />
        )}
      </main>
    </div>
  );
}

export default App;
