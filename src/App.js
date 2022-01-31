import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css';
import { ClassComponent } from './components/class-component/classComponent';
import FuntionalComponent from './components/function-component/funtionalComponent';
import Navbar from "./components/navbar/firstReactNavbar";
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ComponentChildren from './components/component-Children/ComponentChildren';

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
      <ComponentChildren otherProp='El Titulo'>
        <h1>componente hijo</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda quod unde! Quo laboriosam eos quidem corporis, voluptatem provident delectus tempora placeat ipsa ullam, perspiciatis aperiam reiciendis? Cumque, incidunt vero.</p>
      </ComponentChildren>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default App;
