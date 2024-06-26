import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/styles.css';
import 'styles/customStyles.css';

// components import
import LandingPage from 'pages/LandingPage/LandingPage';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import Applicant from 'pages/Applicant'
//import RequireAuth from 'components/RequireAuth';

import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Landing Page */}
      <Route exact path='/' element={<LandingPage />}></Route>
      {/* Authentication */}
      <Route exact path="/login" element={<SignIn />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
      {/* User */}
      <Route exact path="/home" element={<Home />}></Route>
      {/* Applicant */}
      <Route exact path="/applicant" element={<Applicant />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
