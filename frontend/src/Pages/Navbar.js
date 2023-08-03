import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="w-full shadow-xl pt-2 flex items-center justify-around">
        <div className="flex items-center">
          <img
            className="w-9"
            src={require("../Images/LinkedIn_logo_initials.png.webp")}
            alt=""
          />
          <div className="ml-3">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-80 h-1 p-4 pl-14 text-sm bg-slate-200 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:pl-2"
                placeholder="Search"
                required
              />
            </div>
          </div>
        </div>

        {/* Navbar Icons */}
        <div className="flex justify-evenly top">
          <div className="flex items-center">
            <div className="flex items-center w-20">
              <button className="flex flex-col items-center">
                <img
                  className="w-6"
                  src={require("../Images/home-svgrepo-com.png")}
                  alt=""
                />
                <p className="text-xs">Home</p>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-20">
              <button className="flex flex-col items-center">
                <img
                  className="w-6"
                  src={require("../Images/home-svgrepo-com.png")}
                  alt=""
                />
                <p className="text-xs">My Network</p>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex justify-center items-center underline decoration-4 w-20">
              <button className="flex flex-col items-center">
                <img
                  className="w-6"
                  src={require("../Images/briefcase-svgrepo-com.png")}
                  alt=""
                />
                <p className="text-xs">Jobs</p>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-20">
              <button className="flex flex-col items-center">
                <img
                  className="w-6"
                  src={require("../Images/home-svgrepo-com.png")}
                  alt=""
                />
                <p className="text-xs">Messaging</p>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-20">
              <button className="flex flex-col items-center">
                <img
                  className="w-6"
                  src={require("../Images/home-svgrepo-com.png")}
                  alt=""
                />
                <p className="text-xs">Notifications</p>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-20">
              <button className="flex flex-col items-center">
                <img
                  className="w-7"
                  src={require("../Images/profile-circle-svgrepo-com.png")}
                  alt=""
                />
                <p className="text-xs">Me</p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-36 bg-red-600"></div>
      </nav>
    </>
  );
};

export default Navbar;
