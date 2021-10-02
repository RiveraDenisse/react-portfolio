import React from "react";
import portfolioPicture from "../../assets/portfolioimage.png";
function About() {
  return (
    <section className="my-5 ">
      <h2>About Me</h2>
      <img
        src={portfolioPicture}
        className="my-2"
        style={{ width: "20%" }}
        alt="Denisse Rivera"
      />
      <p>
        I am an electrical engineer (with a computer engineering emphasis)
        currently working for an electric utility. After 10 years of working
        with utilities and consultants I decided it was time to go back to
        computers, so I enrolled on a programming bootcamp to learn and get some
        programming experience. Some of my l HTML,CSS, Javascript,Node.js,
        React, MongoDB among others. My spare time consists of playing video
        games, watching series/movies and play with my three dogs.
      </p>
    </section>
  );
}

export default About;
