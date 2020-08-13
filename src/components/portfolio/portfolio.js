import React from "react";
import "./styles.css"

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className='wrapper'>
      <div className='row'>
        <div className='column'>
          <div className='left-column'>
              <p style={textStyle}>Hello.</p>
            <div className='line'></div>
              <p style={textStyle}>I'm Nick</p>

          </div>
        </div>
        <div className='column'>
          <div className='right-column'>
            <p style={textStyle}>I'm Nick</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Portfolio;
