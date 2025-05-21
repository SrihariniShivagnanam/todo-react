import React from 'react';
//import {BrowserRouter as Router, Router, Router} 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import Login from './components/Login';
import Todo from './components/Todo';
import Add from './components/Add';
import './App.css';
//import './Login.css';

 

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/main' element={<Todo />} />
        <Route path='/add' element={<Add />} />
      </Routes>  
    </Router>
    </>
  );
}

export default App;

