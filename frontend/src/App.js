import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import UserSetup from './Pages/UserSetup';
import UserDashboard from './Pages/UserDashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/usersetup' element={<UserSetup/>}/>
          <Route path='/userdashboard' element={<UserDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
