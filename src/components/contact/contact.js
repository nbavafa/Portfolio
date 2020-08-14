import React from "react";

import "./styles.css"
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
import email from "../../assets/mail.svg"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='contact-page' id='contact'>
        <div className='wrapper-contact'>
          <p className="header-contact">contact me</p>
          <div className="icon-container">
            <div className="contact-container-1">
              <img src={linkedin} alt="" className='contact-icon'/>
              <div className="contact-middle">
                <div className="contact-text">
                  <a href="https://www.linkedin.com/in/nbavafa/" className='contact-button'  rel="noopener noreferrer" target="_blank">Connect</a>
                </div>
              </div>
              <p className="handle">@nbavafa</p>
            </div>
            <div className="contact-container-3">
              <img src={email} alt="" className='contact-icon'/>
              <div className="contact-middle">
                <div className="contact-text">
                <a href="mailto:nbavafa@gmail.com" className='contact-button'  rel="noopener noreferrer" target="_blank">Mail</a>
                </div>
              </div>
            </div>
            <div className="contact-container-2">
              <img src={github} alt="" className='contact-icon'/>
              <div className="contact-middle">
                <div className="contact-text">
                  <a href="https://github.com/nbavafa" className='contact-button'  rel="noopener noreferrer" target="_blank">View</a>
                </div>
              </div>
              <p className="handle">@nbavafa</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
