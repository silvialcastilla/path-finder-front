import React from "react";
import "./FirstWindow.css";

class FirstWindow extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("pulse");
    this.props.history.push("/presentacion");
  };

  render() {
    return (
      <div className="first-page">
        <img
         srcSet="img/FirstWindow/SubtractLeft/subtract@2x.png 2x, img/FirstWindow/SubtractLeft/Subtract@3x.png 3x"
          src="img/FirstWindow/SubtractLeft/Subtract.svg" 
          src="img/FirstWindow/SubtractLeft/Subtract.png"
          alt="logo"
         
          className="subtract-left"
        ></img>
        <img
          src="img/FirstWindow/SubtractLeftHorizon/Subtract.svg"
          src="img/FirstWindow/SubtractLeftHorizon/Subtract.png"
          alt="logo"
          srcSet="img/FirstWindow/SubtractLeftHorizon/Subtract@2x.png 2x, img/FirstWindow/SubtractLeftHorizon/Subtract@3x.png 3x"
          className="subtract-left-horizon"
        ></img>
        <div className="logo-box">
          <img
            src="img/FirstWindow/Logo/Logo.svg"
            srcr="img/FirstWindow/Logo/Logo.png"
            alt="logo"
            srcSet="img/FirstWindow/Logo/Logo@2x.png 2x,
                    img/FirstWindow/Logo/Logo@3x.png 3x"
            className="Logo"
            onClick={this.handleClick}
          ></img>
        </div>
        <img
          src="img/FirstWindow/SubtractRight/Subtract.png"
          src="img/FirstWindow/SubtractRight/Subtract.svg"
          srcSet="img/FirstWindow/SubtractRight/Subtract@2x.png 2x,
             img/FirstWindow/SubtractRight/Subtract@3x.png 3x"
          alt="logo"
          className="subtract-right"
        ></img>
        <img
          src="img/FirstWindow/SubtractRightHorizon/Subtract.png"
          src="img/FirstWindow/SubtractRightHorizon/Subtract.svg"
          srcSet="img/FirstWindow/SubtractRightHorizon/Subtract@2x.png 2x,
             img/FirstWindow/SubtractRightHorizon/Subtract@3x.png 3x"
          alt="logo"
          className="subtract-right-horizon"
        ></img>
      </div>
    );
  }
}

export default FirstWindow;
