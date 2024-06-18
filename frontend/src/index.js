import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/styles.css';
import 'styles/customStyles.css';

// components import
//import Home from 'components/Home';
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
import LandingPage from 'pages/LandingPage';
//import RequireAuth from 'components/RequireAuth';
import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Authentication */}
      <Route exact path="/login" element={<SignIn />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>

      {/* User */}
      <Route exact path="/" element={/*<RequireAuth>*/<LandingPage />/*</RequireAuth>*/}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
