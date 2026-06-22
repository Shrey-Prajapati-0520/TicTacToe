import { useState , useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Game from './Game';
import Login from './Login';
import Register from './Register';


function App() {  

  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
    </>
  );
}



export default App
