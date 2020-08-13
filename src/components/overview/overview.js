import React from "react";
import me_cropped from "../../assets/me_cropped.png"
import me from "../../assets/me_cropped.png"
import "./styles.css"

const textStyle = {
  textAlign: 'left',
  fontSize: '8vw',
  padding: "10px",
  fontFamily: "Montserrat-Light",
  color: "#6e5a46",
  animation: 'focus-in-contract',
  animationDuration: '2s',
  animationDelay: '0s',
  animationIterationCount: '1',
};

export default function Overview({ id }) {
  const column = false;

  return (
    <div id={id}>
    { column ? (
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
            <img src={me} className='picture_column'/>
          </div>
        </div>
      </div>
      </div>
    ) : (
      <div className='image_wrapper'>
        <img src={me_cropped} className='picture'/>
        <div className='top-left'>
          <p style={textStyle}>Hello,</p>
          <p style={textStyle}>I'm Nick</p>

        </div>
      </div>
    )}
    </div>
  );
}
