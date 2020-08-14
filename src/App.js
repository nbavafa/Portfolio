import React, { Component } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Navbar from "./components/navbar/navbar.js";
import Section from "./components/section/section.js";
import Footer from "./components/footer/footer.js";

import Overview from "./components/overview/overview.js"
import About from "./components/about/about.js"
import Resume from "./components/resume/resume.js"
import Portfolio from "./components/portfolio/portfolio.js"
import Contact from "./components/contact/contact.js"

import dummyText from "./assets/dummytext.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
          <center>

          <Overview id="overview"/>
          <About id="about"/>
          <Portfolio id="portfolio"/>
          <Resume id="resume"/>
          <Contact id="contact" />
          <Footer/>

          </center>
      </div>
    );
  }
}

export default App;
