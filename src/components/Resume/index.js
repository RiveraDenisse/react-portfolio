import React from "react";

function Resume() {
  return (
    <div>
      <h3>Proficiencies</h3>
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
        <a href="/DenisseRivera.pdf" target="_blank" download>
          {" "}
          Click here to download my resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
