import "./index.css";
import AboutUs from '../src/page/aboutus';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entity from './components/dummy2';
import HampiAttractions from "../src/page/hampilist";
import EntityForm from "../src/page/add"
import ManageAttractions from "./page/manageattraction";
import UpdateAttraction from "./page/updateattraction"
import LoginPage from './page/login';
import SignupPage from './page/signup';


export const App = () => {
  return (
    <Router>
      <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path='/home' element={<AboutUs />}/>
        <Route path="/entity" element={<Entity />} />
        <Route path='/list' element={<HampiAttractions/>} />
        <Route path='/add' element={<EntityForm />} />
        <Route path="/delete/:id" element={<ManageAttractions />} />
        <Route path="/update/:id" element={<UpdateAttraction />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
