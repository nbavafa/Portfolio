import React from "react";
import text from "./abouttext.js"
import './styles.css'

export default function About({ id }) {
  return (
    <div id={id}>
      <div className="about-wrapper">
      <div className="header-about">
        <p> about me</p>
      </div>
      <p className="blurb">{text}</p>
    </div>
    </div>
  );
}
