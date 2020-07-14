import React from "react";
import "./HelpWindow.css";

class HelpWindow extends React.Component {
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
        <div className="back-alert" onClick={this.handleClick}>
          <img
            src="img/FourthWindow/LeftArrow/Arrow.svg"
            src="img/FourthWindow/LeftArrow/Arrow.png"
            alt="logo"
            srcSet="img/FourthWindow/LeftArrow/Arrow@2x.png 2x, img/FourthWindow/LeftArrow/Arrow@3x.png 3x"
            className="back-alert-img"
          ></img>
          <p className="back-alert-p"> Ayuda </p>
        </div>
        <div className="type-alert">
          <p className="type-alert-p"> Preguntas frecuentes </p>
          <article>
            <section>
              <p>¿Qué es una manifestación?</p>
              {/*<img></img>*/}
            </section>
            <section>
              <div>
                <h2>¿Hay aliens en el planeta tierra?</h2>
                {/*<img></img>*/}
              </div>
              <p>
                Los extraterrestres ya nos han visitado y van a volver, según un
                estudio. El universo es inmenso, ¿qué nos hace pensar que
                estamos solos? Una investigación ofrece nuevas perspectivas y
                asegura que otras civilizaciones ya han estado en la Tierra.
              </p>
            </section>
            <section>
              <p>¿Dónde estamos?</p>
              {/*<img></img>*/}
            </section>
            <section>
              <p>¿Por qué?</p>
              {/*<img></img>*/}
            </section>
            <section>
              <p>Politica de privacidad</p>
              <p>Términos y condiciones</p>
            </section>
          </article>
        </div>
      </div>
    );
  }
}

export default HelpWindow;
