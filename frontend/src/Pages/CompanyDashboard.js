import React from 'react';
import "./Navbar.css"
import CompanyDashboardSidebar from './CompanyDashboardSidebar';
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

const CompanyDashboard = () => {
   const CurCompany = localStorage.getItem("CurCompany");
   console.log(CurCompany);
  return (
    <>
      <div className="flex">
        <CompanyDashboardSidebar />

        {/* main body */}
        <div className="p-2 w-100">
          {/* Top part */}
          <div>
            <div className="relative inline-flex">
              {/* Search Icon */}
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BiSearch className="h-5 w-5 text-gray-400" />
              </span>

              {/* Input */}
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search for talents"
              />
            </div>

            {/* dropdown */}
            <div className="dropdown inline-block relative">
              <button className="btn bg-gray-500 text-black px-4 py-2 rounded">
                Find Talents
              </button>
              <ul className="dropdown-menu absolute hidden bg-gray-100 text-gray-700 pt-1">
                <li className="flex">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-1/2"
                    href="#!"
                  >
                    Option 1
                  </a>
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-1/2"
                    href="#!"
                  >
                    Option 2
                  </a>
                </li>
                <li className="flex">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-1/2"
                    href="#!"
                  >
                    Option 3
                  </a>
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-1/2"
                    href="#!"
                  >
                    Option 4
                  </a>
                </li>
              </ul>
            </div>

            {/* Shopping cart and mail */}
            <div>
              <FiShoppingCart/>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyDashboard