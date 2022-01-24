import logo from './loguito.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import firstReactNavbar from "./components/navbar/firstReactNavbar";

function App() {
  return (
    <div className = "App">
      <firstReactNavbar />
      <h1> Primer intento con React </h1>
      {/* <div style={appStyles} /> */}
    </div>
  )
}

export default App;
