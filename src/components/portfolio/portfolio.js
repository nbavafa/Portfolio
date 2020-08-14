import React from "react";
import "./styles.css"

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {height: 300};

  }

  componentDidMount() {
    const h1 = document.getElementById('square1').clientHeight;
    const h2 = document.getElementById('square2').clientHeight;
    const h3 = document.getElementById('square3').clientHeight;
    const h4 = document.getElementById('square4').clientHeight;

    this.setState({height: Math.max(h1, Math.max(h2, Math.max(h3,h4)))});

  }

  render() {
    return (
      <div className='portfolio-page' id='portfolio'>
        <div className='wrapper-portfolio'>
        <div className="portfolio-text">
          <p className="header">portfolio highlights</p>
        </div>
          <div className='row'>
            <div className='column-port'>
              <div className='left-column'>
                <div className="square-item" id="square1" style={{height: this.state.height}}>
                  <p className='header-style'>Amazon AWS Software Engineer</p>
                  <ul className="square-list">
                    <li className="bullet-port">Part of internal AWS team for ticketing, issue management, and agile process planning tools for all Amazon employees</li>
                    <li className="bullet-port">Designed and developed new data structures, logic and algorithm for issue and ticket severity promotion timers</li>
                    <li className="bullet-port">Full stack software development of workflows to show customers pertinent information regarding each trouble ticket</li>
                    <li className="bullet-port">End to end ownership: From investigation and writing design proposals, to managing code deployment through pipelines</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='column-port'>
              <div className='right-column'>
                <div className="square-item" id="square2" style={{height: this.state.height}}>
                <p className='header-style'>Academic Networking Mobile Application Project</p>

                <ul className="square-list">
                  <li className="bullet-port">Designed, developed, tested, published, and maintained a cross platform social networking mobile app that allows students to connect with their peers at their academic institution to find and create study groups</li>
                  <li className="bullet-port">Real-time Firebase authentication and database integration</li>
                  <li className="bullet-port">Published on iOS App Store and Android Marketplace</li>
                  <li className="bullet-port">Maintained from September 2018 to March 2020</li>
                </ul>

                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='column-port'>
              <div className='left-column'>
                <div className="square-item" id="square3" style={{height: this.state.height}}>
                <p className='header-style'>Bioinformatics Algorithms Research & Publication</p>

                <ul className="square-list">
                  <li className="bullet-port">Part of team that developed genetic sequencing software (Julia) for amplicon denoising</li>
                  <li className="bullet-port">Co-developed statistical samplers on real data-sets using Bayesian, Fourier, and likelihood models</li>
                  <li className="bullet-port">Developed an automated test suite for interoperability</li>
                  <li className="bullet-port">Analyzed and packaged code to satisfy Julia metadata compliance</li>
                  <a href="https://academic.oup.com/nar/article/47/18/e104/5550323" className='paper-button'  rel="noopener noreferrer" target="_blank">View Published Paper</a>
                </ul>

                </div>
              </div>
            </div>
            <div className='column-port'>
              <div className='right-column'>
                <div className="square-item" id="square4" style={{height: this.state.height}}>
                <p className='header-style'>Influencer Search-Engine Startup Full Stack Developer</p>

                <ul className="square-list">
                  <li className="bullet-port">Led the team that designed and developed frontend framework for a social listing web application</li>
                  <li className="bullet-port">Integrated backend AWS Cognito Userpools (user authentication) and Elastic Search (real-time database)</li>
                  <li className="bullet-port">Developed and integrated tier-based user subscription paths and payments using Python Stripe API</li>
                  <li className="bullet-port">Monitered and maintained product through development and public launch</li>
                </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
