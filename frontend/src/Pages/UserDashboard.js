import React from 'react';
import Navbar from './Navbar';
import axios from "axios";

const UserDashboard = () => {
  const CurrUser = localStorage.getItem("CurrUser");
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="p-4">
        <div>
          <h2>Dashboard</h2>
          <p>
            Welcome to the dashboard,{" "}
            <strong className="capitalize">{CurrUser}</strong>
          </p>
        </div>
        <div>
          <h4>Here are some jobs tailored to your preferences</h4>
        </div>
        <div className='bg-red-600 w-full'>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard