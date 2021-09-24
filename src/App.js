import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
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
      ></Nav>
      <section>
        <About></About>
        {/* TODO:replace picture */}
        <img
          src={coverImage}
          className="my-2"
          style={{ width: "50%" }}
          alt="portfolio image"
        />
      </section>
    </div>
  );
}

export default App;
