import React from "react";
// import Link from "@material-ui/core/Link";
import resume from "../../assets/DenisseRivera.pdf";

function Resume() {
  return (
    <div>
      <h2 className="App">Resume</h2>
      <h4>Proficiencies</h4>
      <div className="skills">
        <div>
          <ul>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>Bulma</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>Web APIs</li>
            <li>Express.js</li>
            <li>MondogDB</li>
            <li>Github</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Bilingual (Spanish/English)</li>
            <li>Teamwork</li>
            <li>Benchmarking</li>
            <li>Engineering</li>
            <li>Quality Assurance</li>
            <li>Quality Control</li>
            <li>Critical Thinking</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
      <div>
        <a href={resume} download="DRivera_Resume">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
