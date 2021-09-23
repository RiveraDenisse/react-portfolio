import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";

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
    </div>
  );
}

export default App;
