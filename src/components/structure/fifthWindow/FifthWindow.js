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
        this.handleClickHelp = this.handleClickHelp.bind(this);
    }

    handleClickHelp = (e) => {
        e.preventDefault();
        this.props.history.push("/alerta");
      };

    handleClickFewSelected = (e) => {
        e.preventDefault();
        this.state.amountOfPeople="Poca";
        localStorage.setItem("amountOfPeople",this.state.amountOfPeople);
        document.getElementById("few").style.backgroundColor = "#fff9f9";
        document.getElementById("few").style.boxShadow = "inset -4px -4px 4px 0 rgba(145, 150, 159, 0.1), inset 4px 4px 4px 0 rgba(255, 151, 149, 0.3)";
        document.getElementById("lot").style.backgroundColor = "#ffeaea";
        document.getElementById("lot").style.boxShadow = "2px 2px 4px 0 rgba(32, 35, 39, 0.25);";
        document.getElementById("crowd").style.backgroundColor = "#ffeaea";
        document.getElementById("crowd").style.boxShadow = "2px 2px 4px 0 rgba(32, 35, 39, 0.25);";
    };

    handleClickLotSelected = (e) => {
        e.preventDefault();
        this.state.amountOfPeople="Mucha";
        localStorage.setItem("amountOfPeople",this.state.amountOfPeople);
        document.getElementById("lot").style.backgroundColor = "#fff9f9";
        document.getElementById("lot").style.boxShadow = "inset -4px -4px 4px 0 rgba(145, 150, 159, 0.1), inset 4px 4px 4px 0 rgba(255, 151, 149, 0.3)";
        document.getElementById("few").style.backgroundColor = "#ffeaea";
        document.getElementById("few").style.boxShadow = "2px 2px 4px 0 rgba(32, 35, 39, 0.25);";
        document.getElementById("crowd").style.backgroundColor = "#ffeaea";
        document.getElementById("crowd").style.boxShadow = "2px 2px 4px 0 rgba(32, 35, 39, 0.25);";
    };

    handleClickCrowdSelected = (e) => {
        e.preventDefault();
        this.state.amountOfPeople="Aglomeracion";
        localStorage.setItem("amountOfPeople",this.state.amountOfPeople);
        document.getElementById("crowd").style.backgroundColor = "#fff9f9";
        document.getElementById("crowd").style.boxShadow = "inset -4px -4px 4px 0 rgba(145, 150, 159, 0.1), inset 4px 4px 4px 0 rgba(255, 151, 149, 0.3)";
        document.getElementById("lot").style.backgroundColor = "#ffeaea";
        document.getElementById("lot").style.boxShadow = "2px 2px 4px 0 rgba(32, 35, 39, 0.25);";
        document.getElementById("few").style.backgroundColor = "#ffeaea";
        document.getElementById("few").style.boxShadow = "2px 2px 4px 0 rgba(32, 35, 39, 0.25);"; 
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
              timestamp:parseInt(moment().format('X')),
              date:moment().format('lll')
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
                    onClick={this.handleClickHelp}
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
                                <div className="first-block-delete-circle">
                                    <img
                                        src="img/FifthWindow/Delete/Delete.svg"
                                        src="../../img/FifthWindow/Delete/Delete.png"
                                        alt="logo"
                                        srcSet="img/FifthWindow/Delete/Delete@2x.png 2x, img/FifthWindow/Delete/Delete@3x.png 3x"
                                        className="first-block-delete-img"
                                    ></img>
                                <p className="first-block-delete-p"> Cantidad de gente </p>
                            </div>        
                        </div>
                        <div className="last-block">
                            <div className="AttentionConteiner">
                                <div className="Atenttion" id="few">
                                    <img src="img/FifthWindow/Poca/Poca.png"
                                    alt="Poca gente"
                                    srcSet="img/FifthWindow/Poca/Poca@2x.png 2x, img/FifthWindow/Poca/Poca@3x.png 3x"
                                    onClick={this.handleClickFewSelected}></img>
                                </div>
                                <div className="AtenttionText">Poca</div></div>
                            <div className="AttentionConteiner">
                                <div className="Atenttion" id="lot">
                                    <img src="img/FifthWindow/Mucha/Mucha.png"
                                    alt="Mucha gente"
                                    srcSet="img/FifthWindow/Mucha/Mucha@2x.png 2x, img/FifthWindow/Mucha/Mucha@3x.png 3x"
                                    onClick={this.handleClickLotSelected}></img>
                                </div>
                                <div className="AtenttionText">Mucha</div></div>
                            <div className="AttentionConteiner">
                                <div className="Atenttion" id="crowd">
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
