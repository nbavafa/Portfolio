import React, { Component } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Navbar from "./components/navbar/navbar.js";
import Section from "./components/section/section.js";
import Footer from "./components/footer/footer.js";
import Overview from "./components/overview/overview.js"

import dummyText from "./assets/dummytext.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <center>

        <Navbar />
        <Overview
          id="overview"
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="about"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="portfolio"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="resume"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="contact"
        />
        <Footer/>
        </center>
      </div>
    );
  }
}

export default App;
