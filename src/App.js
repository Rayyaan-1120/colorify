import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Globalstyle from "./globalstyles";
import Navbar from "./components/navbar";
import Maindiv from "./components/maindiv";
import {Switch,Route} from 'react-router-dom'
import Palettecomponent from "./components/palettecomponents";
import MyPalletes from "./components/MyPalletes";

function App() {



  return (
    <div className="App">
      <Globalstyle />
      <Navbar  />
      <Switch>
      <Route path="/" exact>
      <Maindiv />
      </Route>
      <Route path="/your-pallete" exact component={MyPalletes}/>
      <Route path="/your-pallete/:id">
      <Palettecomponent />
      </Route>
    </Switch>
    </div>
  );
}


export default App;
