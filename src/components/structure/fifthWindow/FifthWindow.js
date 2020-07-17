import React from "react";
import "./FifthWindow.css";

class FifthWindow extends React.Component {
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
        this.props.history.push("/mapa");
    };

    render() {
        return (
            <div className="fifth-page">
                <div className="back-alert" onClick={this.handleClick}>
                    <img
                        src="img/FifthWindow/LeftArrow/Arrow.svg"
                        src="img/FifthWindow/LeftArrow/Arrow.png"
                        alt="logo"
                        srcSet="img/FifthWindow/LeftArrow/Arrow@2x.png 2x, img/FifthWindow/LeftArrow/Arrow@3x.png 3x"
                        className="back-alert-img"
                    ></img>
                    <p className="back-alert-p"> Nueva alerta </p>
                </div>

                <div className="type-alert">
                    <p className="type-alert-p"> Tipo de alerta </p>
                    <div className="alerts-block">
                        <div className="first-block">
                            <div className="delete">
                                <div className="first-block-delete-circle">
                                    <img
                                        src="img/FifthWindow/Delete/Delete.svg"
                                        src={"../../img/FifthWindow/Delete/Delete.png"}
                                        alt="logo"
                                        srcSet="img/FifthWindow/Delete/Delete@2x.png 2x, img/FifthWindow/Delete/Delete@3x.png 3x"
                                        className="first-block-delete-img"
                                    ></img>
                                </div>
                                <p className="first-block-delete-p"> Cantidad de gente </p>
                            </div>        
                        </div>
                        <div className="second-block">
                            <div className="AttentionConteiner">
                                <div className="Atenttion">
                                    <img src="img/FifthWindow/Poca/Poca.png"
                                    alt="Poca gente"
                                    srcSet="img/FifthWindow/Poca/Poca@2x.png 2x, img/FifthWindow/Poca/Poca@3x.png 3x"></img>
                                </div>
                                <div className="AtenttionText">Poca</div></div>
                            <div className="AttentionConteiner">
                                <div className="Atenttion">
                                    <img src="img/FifthWindow/Mucha/Mucha.png"
                                    alt="Mucha gente"
                                    srcSet="img/FifthWindow/Mucha/Mucha@2x.png 2x, img/FifthWindow/Mucha/Mucha@3x.png 3x"></img>
                                </div>
                                <div className="AtenttionText">Mucha</div></div>
                            <div className="AttentionConteiner">
                                <div className="Atenttion">
                                    <img src="img/FifthWindow/Aglomeracion/Aglomeracion.png"                                    
                                    alt="Aglomeración"
                                    srcSet="img/FifthWindow/Aglomeracion/Aglomeracion@2x.png 2x, img/FifthWindow/Aglomeracion/Aglomeracion@3x.png 3x"></img>
                                </div>
                            <div className="AtenttionText">Aglomeración</div></div>
                        </div>
                    </div>
                    <div className="add-alert">
                    <button className="add-alert-btn">
                        <p className="add-alert-p">Crear alerta</p>
                    </button>
                    </div>
                </div>
            </div >
        );
    }
}

export default FifthWindow;
