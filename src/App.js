import React,{Fragment,useState,useEffect} from "react";
import HomePage from "./components/homePage";
import DarAdopccion from "./components/formuEnAdopcion"
import EnAdopcion from "./components/enAdopcion"
import Perdidos from "./components/perdidos";
import Info from "./components/infoAnimales";
import ForumularioPerdidos from "./components/formuPerdidos";
import Venta from "./components/formuEnVenta";
import EnVenta from "./components/enVenta";
import Menu from "./components/navBar"
import "./Style/App.css"
import axios from "axios";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [paraAdoptar,setParaAdoptar] = useState([])
  const [paraPerdidos,setParaPerdidos]= useState([])
  const crearAdopcion = adpopcion => {
      setParaAdoptar([
        ...paraAdoptar,
        adpopcion
      ])
  }
// console.log(paraAdoptar)
  const crearPerdido = perdido =>{
    setParaPerdidos([
      ...paraPerdidos,
      perdido
    ])
  }
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Menu/>}>
          <Route index element={<HomePage/>}/>
          <Route path="homePage" element={<HomePage/>}/>
          <Route path="formuEnAdopcion" element={<DarAdopccion
          crearAdopcion={crearAdopcion}
          />}/>
          <Route path="enAdopcion" element={<EnAdopcion
          paraAdoptar={paraAdoptar}
          />}/>
          <Route path="perdidos" element={<Perdidos
          paraPerdidos={paraPerdidos}
          />}/>
          <Route path="infoAnimales" element={<Info
          />}/>
          <Route path="formuPerdidos" element={<ForumularioPerdidos
          crearPerdido={crearPerdido}
          />}/>
          <Route path="formuEnVenta" element={<Venta />}/>
          <Route path="enVenta" element={<EnVenta />}/>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
