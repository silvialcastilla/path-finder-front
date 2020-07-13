import React from "react";
import "./FourthWindow.css";

class FourthWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      ubicacion: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("pulse");
    this.props.history.push("/map");
  };

  render() {
    return (
      <div className="fourth-page">
        <div className="back-alert">
          <img
            src="img/FourthWindow/LeftArrow/Arrow.svg"
            src="img/FourthWindow/LeftArrow/Arrow.png"
            alt="logo"
            srcSet="img/FourthWindow/LeftArrow/Arrow@2x.png 2x, img/FourthWindow/LeftArrow/Arrow@3x.png 3x"
            className="back-alert-img"
          ></img>
          <p className="back-alert-p">Nueva alerta</p>
        </div>

        <div className="type-alert">
          <p className="type-alert-p">Tipo de alerta</p>
          <button className="add-alert">
            <img
              src="img/FourthWindow/PlusCircleGrey/PlusCircleGrey.svg"
              src="img/FourthWindow/PlusCircleGrey/PlusCircleGrey.png"
              alt="logo"
              srcSet="img/FourthWindow/PlusCircleGrey/PlusCircleGrey@2x.png 2x, img/FourthWindow/PlusCircleGrey/PlusCircleGrey@3x.png 3x"
              className="back-alert-img"
            ></img>
            <p className="add-alert-p">Comenzar</p>
          </button>
        </div>
      </div>
    );
  }
}

export default FourthWindow;
