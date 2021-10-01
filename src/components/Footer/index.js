import React from "react";
import Github from "../../assets/img/Github.svg";
import linkedin from "../../assets/img/linkedin.svg";
import twitter from "../../assets/img/twitter.svg";

function Footer() {
  return (
    <footer>
      <h4>Created by Denisse Rivera</h4>

      <a href="https://github.com/RiveraDenisse">
        <img src={Github} alt="Linkedin" />
      </a>
      <a href="http://linkedin.com/in/riveradenisse">
        <img src={linkedin} alt="Linkedin" />
      </a>
      <a href="https://twitter.com/dnysale">
        <img src={twitter} alt="Twitter" />
      </a>
    </footer>
  );
}

export default Footer;
