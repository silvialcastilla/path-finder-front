import React, {useState} from 'react';
import FirstWindow from './components/structure/firstWindow/FirstWindow'
import SecondWindow from './components/structure/secondWindow/SecondWindow'
import ThirdWindow from './components/structure/thirdWindow/ThirdWindow'
import FourthWindow from './components/structure/fourthWindow/FourthWindow'
import FifthWindow from "./components/structure/fifthWindow/FifthWindow"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HelpWindow from './components/helpWindow/HelpWindow';
import NotFound from "./components/structure/notFound404/NotFound404";
import moment from 'moment';
import Database from "../src/components/database/Database";
import {firebase} from "./firebase";

//import 'bootstrap/dist/css/bootstrap.css';
//import './App.css'



class App extends React.Component {

  async deleteAlert(){
    let oldDate= moment().subtract(2, 'hours').format("X")
    let parseOld=parseInt(oldDate) 
/*     console.log(oldDate) 
    let now=moment().format("X")
    let parseNow=parseInt(now) 
    console.log(now)*/
    const db = firebase.firestore()
    await db.collection("alerts").where("timestamp", "<", parseOld).get()

    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
/*           db.collection("alerts").doc(doc.id).delete(); */
      });
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });

  }

  componentDidMount(){
    this.deleteAlert();
  }
 /* async deleteAlert (id) {
    try{
      const db = firebase.firestore()
      await db.collection("alerts").doc(id).delete()
      const filteredArray = alerts.filter(item=> item.id !==id)
      setAlerts(filteredArray)

    } catch (error){
      console.log(error)
    }
  }
 
 componentDidMount(){
let noldDate= moment().format().subtract(2, 'hours') 

} 
 */
  render(){
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={FirstWindow} />
          <Route path="/presentacion" component={SecondWindow} />
          <Route path="/mapa" component={ThirdWindow} />
          <Route path="/alerta" component={FourthWindow} />
          <Route path="/ayuda" component={HelpWindow} />
          <Route path="/alerta-detalle" component={FifthWindow} />
          <Route path="/database" component={Database} />
          <Route component={NotFound}/>
        </Switch>
      </Router> 
    </div>
  );
  }
}

export default App;
