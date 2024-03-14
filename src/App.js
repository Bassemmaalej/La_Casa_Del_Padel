import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTopRender from "./Components/Shared/ScrollToTop_render";

import './assets/css/plugins.css';
import './assets/css/style.css';
import './assets/css/skin-1.css';
import './assets/css/templete.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Reservation from './Components/Pages/Reservation/Reservation';
import Tournois from './Components/Pages/Tournois/Tournois';
import About from './Components/Pages/About/About';
import ErrorNotFound from './Components/Pages/Error/Error';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';


function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTopRender />
        <Routes >

          <Route exact path="/" element={<Home />} />


          <Route path="reservation" element={<Reservation />} />

          <Route path="tournois" element={<Tournois />} />

          <Route path="contact" element={<About />} />

          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />



          <Route path="*" element={<ErrorNotFound />} />

        </Routes >

      </Router>

    </div>
  );
}

export default App;
