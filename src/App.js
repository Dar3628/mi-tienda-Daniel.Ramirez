import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css';
import { ClassComponent } from './components/class-component/classComponent';
import FuntionalComponent from './components/function-component/funtionalComponent';
import Navbar from "./components/navbar/firstReactNavbar";
import ItemListContainer from './components/itemListContainer/ItemListContainer'

const age = 32;


function App() {
  return (
    <div className = "App">
      <Navbar />
      <h1> Primer intento con React </h1>
      <hr />
      <ClassComponent  age={age} name= "Daniel" />
      <hr />
      <FuntionalComponent age={age} name="Santiago" />
      <hr />
      <ItemListContainer />

      </div>
  )
}

export default App;
