import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import UserSetup from './Pages/UserSetup';
import UserDashboard from './Pages/UserDashboard';
import CompanySignup from './Pages/CompanySignup';
import CompanyLogin from './Pages/CompanyLogin';
import CompanyDashboard from './Pages/CompanyDashboard';
import PostJob from './Pages/PostJob';
import PostedJobs from './Pages/PostedJobs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/usersetup' element={<UserSetup/>}/>
          <Route path='/userdashboard' element={<UserDashboard/>}/>
          <Route path='/companysignup' element={<CompanySignup/>}/>
          <Route path='/companylogin' element={<CompanyLogin/>}/>
          <Route path='/companydashboard' element={<CompanyDashboard/>}/>
          <Route path='/createjob' element={<PostJob/>}/>
          <Route path='postedjobs' element={<PostedJobs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
