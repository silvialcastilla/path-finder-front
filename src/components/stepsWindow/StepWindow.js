import React from "react";

class StepWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      time: '',
      duration: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("pulse");
    this.props.history.push("/mapa");
  };



  componentDidUpdate() {
    this.createSteps()
  }

  

  render() {
    return (
      <div className="step-page">
        <div className="back-help" onClick={this.handleClick}>
          <img
            src="img/FourthWindow/LeftArrow/Arrow.svg"
            src="img/FourthWindow/LeftArrow/Arrow.png"
            alt="logo"
            srcSet="img/FourthWindow/LeftArrow/Arrow@2x.png 2x, img/FourthWindow/LeftArrow/Arrow@3x.png 3x"
            className="back-help-img"
          ></img>
          <p className="back-help-p">  </p>
        </div>
        <div>
            <p>Indicaciones</p>
            <p></p>
            <p></p>
        </div>
      </div>
    );
  }
}

export default StepWindow;
