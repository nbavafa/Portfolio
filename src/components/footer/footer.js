import React, { Component } from "react";
import "./styles.css"

const footerNote="<designed & developed by Nicholas Bavafa/>"
class Footer extends Component {
  render() {
    return (
        <div>
          <p className="end-name">{footerNote}</p>
          <p className="end-mail">nbavafa@gmail.com</p>

        </div>
    );
  }
}
export default Footer;
