import React from 'react';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import CompanyDashboardSidebar from './CompanyDashboardSidebar';
import CompanyNavbar from './CompanyNavbar';

const CompanyDashboard = () => {
  const navigate = useNavigate()
   const CurCompany = localStorage.getItem("CurCompany");
   console.log(CurCompany);
  return (
    <>
      <div className="flex">
        <CompanyDashboardSidebar />

        {/* main body */}
        <div className="w-100">
          {/* Top part */}
          <CompanyNavbar/>
        </div>
      </div>
    </>
  );
}

export default CompanyDashboard