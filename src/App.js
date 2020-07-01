import React from 'react';
import FirstWindow from './components/structure/firstWindow/FirstWindow'
import SecondWindow from './components/structure/secondWindow/SecondWindow'
import ThirdWindow from './components/structure/thirdWindow/ThirdWindow'
import FourthWindow from './components/structure/fourthWindow/FourthWindow'

//import 'bootstrap/dist/css/bootstrap.css';
//import './App.css'

function App() {
  return (
    <div>
      <FirstWindow />
      <SecondWindow />
      <ThirdWindow />
      <FourthWindow />
    </div>
  );
}

export default App;
