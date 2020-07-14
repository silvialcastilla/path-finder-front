import React from 'react';
import FirstWindow from './components/structure/firstWindow/FirstWindow'
import SecondWindow from './components/structure/secondWindow/SecondWindow'
import ThirdWindow from './components/structure/thirdWindow/ThirdWindow'
import FourthWindow from './components/structure/fourthWindow/FourthWindow'
import HelpWindow from './components/helpWindow/HelpWindow'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//import 'bootstrap/dist/css/bootstrap.css';
//import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={FirstWindow} />
          <Route path="/presentation" component={SecondWindow} />
          <Route path="/map" component={ThirdWindow} />
          <Route path="/help" component={HelpWindow} />
          <Route path="/alerta" component={FourthWindow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
