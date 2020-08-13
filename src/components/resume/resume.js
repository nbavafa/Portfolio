import React from "react";
import resume from "../../assets/resume_png.png"
import "./styles.css"

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div id='resume'>
        <div className='buttons'>
          <button onClick={this.handleClick} className='toggle_button'>
            {this.state.isToggleOn ? 'Hide Resume' : 'Show Resume'}
          </button>

          <a href={require("../../assets/resume.pdf")} download="Nicholas_Bavafa_Resume">
            <div className='download_button'>Download Resume</div>
          </a>
        </div>
          { this.state.isToggleOn ? (
              <div className='resume_wrapper'>
              <img src={resume} className='resume'/>
              </div>

          ) : (
            ''
          )}
        </div>
    );
  }
}
export default Resume;




// var showResume = false
//
//
//
//
// handleClick() {
//     showResume = !showResume
//     console.log(showResume)
// }
//
// export default function Resume({ id }) {
//   return (
//     <div id={id}>
//       <button onClick={this.handleClick}>
//       </button>
//       <img src={resume} className='resume'/>
//
//     </div>
//   );
// }
