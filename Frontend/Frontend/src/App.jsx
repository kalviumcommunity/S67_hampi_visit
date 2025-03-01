import './App.css';
import AboutUs from '../src/page/aboutus';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entity from './components/dummy2';

export const App = () => {
  return (
    <Router>
      <>
      <Routes>
        <Route path='/' element={<AboutUs />}/>
        <Route path="/entity" element={<Entity />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
