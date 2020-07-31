import React from "react";
import me from "../../assets/me.jpg"
import "./styles.css"

const textStyle = {
  display: 'block',
  textAlign: 'left',
  fontSize: '100px',
  padding: "10px",
  fontFamily: "Montserrat-Light"
};

export default function Section({ id }) {
  return (
    <div class='wrapper'>
      <div class='row'>
        <div class='column'>
          <div class='left-column'>
              <p style={textStyle}> Hello.</p>
            <div class='line'></div>
              <p style={textStyle}>I'm Nick</p>
          </div>
        </div>
        <div class='column'>
          <div class='right-column'>
            <img src={me} class='picture'/>
          </div>
        </div>
      </div>
    </div>
  );
}
