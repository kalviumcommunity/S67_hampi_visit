import './App.css';
import AboutUs from '../src/page/aboutus';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entity from './components/dummy2';
import HampiAttractions from "../src/page/hampilist";
import EntityForm from "../src/page/add"

export const App = () => {
  return (
    <Router>
      <>
      <Routes>
        <Route path='/' element={<AboutUs />}/>
        <Route path="/entity" element={<Entity />} />
        <Route path='/list' element={<HampiAttractions/>} />
        <Route path='/add' element={<EntityForm />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
