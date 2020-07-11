import React from "react";

import "./SecondWindow.css";

class SecondWindow extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("pulse");
    this.props.history.push("/map");
  };

  render() {
    return (
      <div className="second-page">
        <img src="img/logo.png" alt="logo" className="logo"></img>
        <p>
          Una web/app que permita al usuario desplazarse a pie del punto A al B,
          evitando y previniendo aglomeraciones
        </p>
        <p>Al dar al botón comenzar estás aceptando que Mappi utilice tu ubicación.</p>
        <button onClick={this.handleClick}>Comenzar</button>
      </div>
    );
  }
}

export default SecondWindow;
