import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  const [sections] = useState(["About me", "Contact", "Portfolio", "Resume"]);
  const [currentCategory, setCurrentCategory] = useState(sections[0]);

  return (
    <div>
      <Header>
        <Nav
          sections={sections}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      </Header>
      <main>
        {currentCategory === "About Me" ? (
          <About />
        ) : currentCategory === "Portfolio" ? (
          <Portfolio />
        ) : currentCategory === "Contact" ? (
          <ContactForm />
        ) : currentCategory === "Resume" ? (
          <Resume />
        ) : (
          <About />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
