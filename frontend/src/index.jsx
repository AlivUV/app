// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Style imports
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/styles.css';
import 'styles/customStyles.css';

// Pages imports
import { LandingPage } from 'pages/LandingPage/LandingPage';
import { Dashboard } from 'pages/Dashboard';
import { SignIn } from 'pages/SignIn'
import { SignUp } from 'pages/SignUp'
import { Applicant } from 'pages/Applicant'

// Custom components
import RequireAuth from 'components/RequireAuth';
import RequireStaffAuth from 'components/RequireStaffAuth';

import reportWebVitals from 'reportWebVitals';

document.title = 'DataExtract AI';
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
      <Route exact path="/home" element={<RequireStaffAuth><Dashboard /></RequireStaffAuth>}></Route>
      {/* Applicant */}
      <Route exact path="/applicant" element={<RequireAuth><Applicant /></RequireAuth>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
