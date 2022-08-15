import './App.css';
import Navigation from './components/Navigation'
//import Show from './components/ShowEstudiantes'
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowTopArea from './components/ShowTop';
//import ShowTopMasClientes from './components/ShowTopMasClientes';
//import ShowTopVentas from './components/ShowTopVentas';

function App() {
  return (
    <Router>
     <Navigation/>
     <Routes>
       <Route path="/topArea" element={<ShowTopArea/>} />
       <Route path="/topClientes" element={<div>Lista de Profesores</div>} />
       <Route path="/topVentas" element={<div>Lista de Profesores</div>} /> 

      </Routes>
    </Router>
  );
}

export const backend = {
  host: "http://localhost",
  port: 8080
}



export default App;
