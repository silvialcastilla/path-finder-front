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
          <div className="first-block">
            <div className="manifestacion">
              <div className="first-block-manifestacion-circle">
              <img
                src="img/FourthWindow/Manifestacion/Manifestacion.svg"
                src="img/FourthWindow/Manifestacion/Manifestacion.png"
                alt="logo"
                srcSet="img/FourthWindow/Manifestacion/Manifestacion@2x.png 2x, img/FourthWindow/Manifestacion/Manifestacion@3x.png 3x"
                className="first-block-manifestacion-img"
              ></img>
              </div>
              <p className="first-block-manifestacion-p">Manifestación</p>
            </div>
            <div className="evento">
              <div className="first-block-evento-circle">
              <img
                src="img/FourthWindow/Manifestacion/Manifestacion.svg"
                src="img/FourthWindow/Manifestacion/Manifestacion.png"
                alt="logo"
                srcSet="img/FourthWindow/Manifestacion/Manifestacion@2x.png 2x, img/FourthWindow/Manifestacion/Manifestacion@3x.png 3x"
                className="first-block-evento-img"
              ></img>
              </div>
              <p className="first-block-evento-p">Evento</p>
            </div>
          </div>
          <div className="second-block">
          <div className="obra">
              <div className="second-block-obra-circle">
              <img
                src="img/FourthWindow/Manifestacion/Manifestacion.svg"
                src="img/FourthWindow/Manifestacion/Manifestacion.png"
                alt="logo"
                srcSet="img/FourthWindow/Manifestacion/Manifestacion@2x.png 2x, img/FourthWindow/Manifestacion/Manifestacion@3x.png 3x"
                className="second-block-obra-img"
              ></img>
              </div>
              <p className="second-block-obra-p">Obra</p>
            </div>
            <div className="otro">
              <div className="second-block-otro-circle">
              <img
                src="img/FourthWindow/Manifestacion/Manifestacion.svg"
                src="img/FourthWindow/Manifestacion/Manifestacion.png"
                alt="logo"
                srcSet="img/FourthWindow/Manifestacion/Manifestacion@2x.png 2x, img/FourthWindow/Manifestacion/Manifestacion@3x.png 3x"
                className="second-block-otro-img"
              ></img>
              </div>
              <p className="second-block-otro-p">Otro</p>
            </div>
            
          </div>
        </div>
        <button className="add-alert">
          <p className="add-alert-p">Crear alerta</p>
        </button>
      </div>

    );
  }
}

export default FourthWindow;
