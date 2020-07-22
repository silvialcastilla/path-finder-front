import React from "react";
import "./FifthWindow.css";
import {firebase} from "../../../firebase";
import moment from 'moment';

class FifthWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            ubicacion: null,
            amountOfPeople:"",
        };
    }

    handleClickFewSelected = (e) => {
        e.preventDefault();
        this.state.amountOfPeople="Poca";
        localStorage.setItem("amountOfPeople",this.state.amountOfPeople) 
    };

    handleClickLotSelected = (e) => {
        e.preventDefault();
        this.state.amountOfPeople="Mucha";
        localStorage.setItem("amountOfPeople",this.state.amountOfPeople) 
    };

    handleClickCrowdSelected = (e) => {
        e.preventDefault();
        this.state.amountOfPeople="Aglomeracion";
        localStorage.setItem("amountOfPeople",this.state.amountOfPeople) 
    };

    addData = async (e) => {
        e.preventDefault()

        try {
          const db = firebase.firestore()

          const newAlert = {
              latitude: localStorage.getItem("latitude"), /* /^(-?[1-8]?d(?:.d{1,18})?|90(?:.0{1,18})?)$/ */
              longitude: localStorage.getItem("longitude"), /* /^(-?(?:1[0-7]|[1-9])?d(?:.d{1,18})?|180(?:.0{1,18})?)$/ */
              typeOfAlert: localStorage.getItem("typeOfAlert"), 
              amountOfPeople: localStorage.getItem("amountOfPeople"),
              timestamp:moment().format()
          }

          const dbLength= localStorage.getItem("dbLength");
          const id= localStorage.getItem("dbLength");
          console.log(id);
          const data = await db.collection("alerts").doc(id).set(newAlert)
          const dbLengthClean = localStorage.removeItem("dbLength");
          const longitudeClean = localStorage.removeItem("longitude");
          const latitudeClean = localStorage.removeItem("latitude");
          const typeOfAlertClean = localStorage.removeItem("typeOfAlert");
          const amountOfPeopleClean = localStorage.removeItem("amountOfPeople");

        } catch (error){
            console.log(error)
        }
        this.props.history.push("/mapa")
      }

      
/*     handleClickCreate = (e) => {
        e.preventDefault();
        console.log("pulse");
        const amountOfPeople= localStorage.getItem("amountOfPeople");
        if(amountOfPeople==="Poca"||amountOfPeople==="Mucha"||amountOfPeople==="Aglomeracion"){this.props.history.push("/mapa")}
        else{alert("Debes seleccionar una cantidad")}

    };
     */
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
                        <div className="upper-block">
                            <div className="delete">
                                <div className="first-block-delete-circle">
                                    <img
                                        src="img/FifthWindow/Delete/Delete.svg"
                                        src="../../img/FifthWindow/Delete/Delete.png"
                                        alt="logo"
                                        srcSet="img/FifthWindow/Delete/Delete@2x.png 2x, img/FifthWindow/Delete/Delete@3x.png 3x"
                                        className="first-block-delete-img"
                                    ></img>
                                </div>
                                <p className="first-block-delete-p"> Cantidad de gente </p>
                            </div>        
                        </div>
                        <div className="last-block">
                            <div className="AttentionConteiner">
                                <div className="Atenttion">
                                    <img src="img/FifthWindow/Poca/Poca.png"
                                    alt="Poca gente"
                                    srcSet="img/FifthWindow/Poca/Poca@2x.png 2x, img/FifthWindow/Poca/Poca@3x.png 3x"
                                    onClick={this.handleClickFewSelected}></img>
                                </div>
                                <div className="AtenttionText">Poca</div></div>
                            <div className="AttentionConteiner">
                                <div className="Atenttion">
                                    <img src="img/FifthWindow/Mucha/Mucha.png"
                                    alt="Mucha gente"
                                    srcSet="img/FifthWindow/Mucha/Mucha@2x.png 2x, img/FifthWindow/Mucha/Mucha@3x.png 3x"
                                    onClick={this.handleClickLotSelected}></img>
                                </div>
                                <div className="AtenttionText">Mucha</div></div>
                            <div className="AttentionConteiner">
                                <div className="Atenttion">
                                    <img src="img/FifthWindow/Aglomeracion/Aglomeracion.png"                                    
                                    alt="Aglomeración"
                                    srcSet="img/FifthWindow/Aglomeracion/Aglomeracion@2x.png 2x, img/FifthWindow/Aglomeracion/Aglomeracion@3x.png 3x"
                                    onClick={this.handleClickCrowdSelected}></img>
                                </div>
                            <div className="AtenttionText">Aglomeración</div></div>
                        </div>
                    </div>
                    <div className="add-alert">

                    <form onSubmit={this.addData}>
                    <button className="add-alert-btn" type="submit">
                    <p className="add-alert-p">Crear alerta</p>
                    </button>
                    </form>

                    </div>
                </div>
            </div >
        );
    }
}

export default FifthWindow;
