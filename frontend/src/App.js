import './App.css';
import Navigation from './components/Navigation'
//import Show from './components/ShowEstudiantes'
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
     <Navigation/>
     <Routes>
       <Route path="/topArea" element={<div>AQUI DEBE IR EL TOP AREA</div>} />
       <Route path="/topClientes" element={<div>AQUI DEBE IR EL GRAFICO ESTADISTICO</div>} />
       <Route path="/topVentas" element={<div>AQUI DEBE IR EL TOP DE VENTAS</div>} />

      </Routes>
    </Router>
  );
}


export default App;
