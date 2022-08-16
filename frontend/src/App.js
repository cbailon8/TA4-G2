import './App.css';
import Navigation from './components/Navigation'
//import Show from './components/ShowEstudiantes'
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowTopArea from './components/ShowTop';
import ShowTopVentas from './components/ShowTopVentas';
import ShowTopClientes from './components/ShowTopClientes';

function App() {
  return (
    <Router>
     <Navigation/>
     <Routes>
       <Route path="/topArea" element={<ShowTopArea/>} />
       <Route path="/topClientes" element={<ShowTopClientes/>} />
       <Route path="/topVentas" element={<ShowTopVentas/>}  /> 

      </Routes>
    </Router>
  );
}

export const backend = {
  host: "http://localhost",
  port: 8080
}



export default App;
