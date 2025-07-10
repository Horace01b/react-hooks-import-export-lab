import React from "react";
import { image } from "../data/user"; // 👈 Import image

function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt="User" />
    </div>
  );
}

export default About;
// Use the imported image
