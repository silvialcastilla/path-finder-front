import React from "react";
import "./FourthWindow.css";
import {firebase} from "../../../firebase";


class FourthWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            ubicacion: null,
            typeOfAlert:"",
        };
        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleClickCreate = this.handleClickCreate.bind(this)
        
        const db = firebase.firestore()
        db.collection('alerts').get().then(
          (snapshot) => localStorage.setItem("dbLength",snapshot.docs.length)
        );
        const id= localStorage.getItem("dbLength");
        console.log(id);
    }

    handleClickBack = (e) => {
        e.preventDefault();
        console.log("pulse");
        this.props.history.push("/mapa");
    };

    handleClickCreate = (e) => {
        e.preventDefault();
        console.log("pulse");
        const typeOfAlert= localStorage.getItem("typeOfAlert");
        if(typeOfAlert==="Manifestacion"||typeOfAlert==="Evento"||typeOfAlert==="Obra"||typeOfAlert==="Otro"){this.props.history.push("/alerta-detalle")}
        else{alert("Debes seleccionar un tipo de alerta")}

    };

    handleClickManifestationSelected = (e) => {
        e.preventDefault();
        this.state.typeOfAlert="Manifestacion";
        localStorage.setItem("typeOfAlert",this.state.typeOfAlert) 
    };

    handleClickEventSelected = (e) => {
        e.preventDefault();
        this.state.typeOfAlert="Evento"
        localStorage.setItem("typeOfAlert",this.state.typeOfAlert) 
    };
  
    handleClickBuildingSelected = (e) => {
        e.preventDefault();
        this.state.typeOfAlert="Obra";
        localStorage.setItem("typeOfAlert",this.state.typeOfAlert) 
    };
  
    handleClickOtherSelected = (e) => {
        e.preventDefault();
        this.state.typeOfAlert="Otro";
        localStorage.setItem("typeOfAlert",this.state.typeOfAlert) 
    };

/*     function guardar_localstorage() {

    } */


    render() {
        return (
            <div className="fourth-page" >
                <div className="back-alert" onClick={this.handleClickBack}>
                    <img
                        src="img/FourthWindow/LeftArrow/Arrow.svg"
                        src="img/FourthWindow/LeftArrow/Arrow.png"
                        alt="logo"
                        srcSet="img/FourthWindow/LeftArrow/Arrow@2x.png 2x, img/FourthWindow/LeftArrow/Arrow@3x.png 3x"
                        className="back-alert-img"
                    ></img>
                    <p className="back-alert-p"> Nueva alerta </p>
                </div>

                <div className="type-alert">
                    <p className="type-alert-p"> Tipo de alerta </p>
                    <div className="alerts-block">
                        <div className="first-block">
                            <div className="manifestacion">
                                <div className="first-block-manifestacion-circle">
                                    <img
                                        src="img/FourthWindow/Manifestacion/Manifestacion.svg"
                                        src="img/FourthWindow/Manifestacion/Manifestacion.png"
                                        alt="logo"
                                        srcSet="img/FourthWindow/Manifestacion/Manifestacion@2x.png 2x, img/FourthWindow/Manifestacion/Manifestacion@3x.png 3x"
                                        className="first-block-manifestacion-img"
                                        onClick={this.handleClickManifestationSelected}></img>
                                </div>
                                <p className="first-block-manifestacion-p"> Manifestación </p>
                            </div>
                            <div className="evento">
                                <div className="first-block-evento-circle">
                                    <img
                                        src="img/FourthWindow/Evento/Evento.svg"
                                        src="img/FourthWindow/Evento/Evento.png"
                                        alt="logo"
                                        srcSet="img/FourthWindow/Evento/Evento@2x.png 2x, img/FourthWindow/Evento/Evento@3x.png 3x"
                                        className="first-block-evento-img"
                                        onClick={this.handleClickEventSelected}></img>
                                </div>
                                <p className="first-block-evento-p"> Evento </p>
                            </div>
                        </div>
                        <div className="second-block">
                            <div className="obra">
                                <div className="second-block-obra-circle">
                                    <img
                                        src="img/FourthWindow/Obras/Obras.svg"
                                        src="img/FourthWindow/Obras/Obras.png"
                                        alt="logo"
                                        srcSet="img/FourthWindow/Obras/Obras@2x.png 2x, img/FourthWindow/Obras/Obras@3x.png 3x"
                                        className="second-block-obra-img"
                                        onClick={this.handleClickBuildingSelected}
                                    ></img>
                                </div>
                                <p className="second-block-obra-p"> Obra </p>
                            </div>
                            <div className="otro">
                                <div className="second-block-otro-circle">
                                    <img
                                        src="img/FourthWindow/Otros/Otros.svg"
                                        src="img/FourthWindow/Otros/Otros.png"
                                        alt="logo"
                                        srcSet="img/FourthWindow/Otros/Otros@2x.png 2x, img/FourthWindow/Otros/Otros@3x.png 3x"
                                        className="second-block-otro-img"
                                        onClick={this.handleClickOtherSelected}
                                    ></img>
                                </div>
                                <p className="second-block-otro-p"> Otro </p>
                            </div>
                        </div>
                    </div>
                    <div className="add-alert">
                    <button className="add-alert-btn" onClick={this.handleClickCreate}>
                        <p className="add-alert-p">Crear alerta</p>
                    </button>
                    </div>
                </div>
            </div >
        );
    }
}

export default FourthWindow;
