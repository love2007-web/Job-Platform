import React from 'react'
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { MdPostAdd } from "react-icons/md";
import { BiCompass } from "react-icons/bi";
import { FaPercent } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

const CompanyNavbar = () => {
  return (
    <>
      <div className="flex justify-between shadow-md bg-white px-2 py-2">
        <div className="relative inline-flex w-96">
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
        <div className="flex">
          <div className="dropdown inline-block relative mr-3">
            <button className="btn hover:bg-gray-500 h-12 text-black px-4 py-2 rounded">
              Find Talents
            </button>
            <ul className="dropdown-menu absolute hidden bg-gray-100 pt-1 drop right-10">
              <li className="flex">
                <a
                  className="rounded-t text-black hover:text-green-600 mx-2 my-2 py-1 px-2 items-center h-16 flex whitespace-no-wrap no-underline w-1/2"
                  href="http://localhost:3000/createjob"
                >
                  <MdPostAdd size={"25px"} />
                  <div className="h-10 ml-1 hover:text-green-600">
                    <span className="text-sm">Post a job</span>
                    <br />
                    <span className="text-sm">Get bids on your jobs</span>
                  </div>
                </a>
                <a
                  className="rounded-t text-black hover:text-green-600 mx-2 my-2 py-1 px-2 items-center h-16 flex whitespace-no-wrap no-underline w-1/2"
                  href="#!"
                >
                  <BiCompass size={"25px"} />
                  <div className="h-10 ml-1 hover:text-green-600">
                    <span className="text-sm">Browse Freelancers</span>
                    <br />
                    <span className="text-sm">Find talent in categories</span>
                  </div>
                </a>
              </li>
              <li className="flex">
                <a
                  className="rounded-t text-black hover:text-green-600 mx-2 my-2 py-1 px-2 items-center h-16 flex whitespace-no-wrap no-underline w-1/2"
                  href="#!"
                >
                  <FaPercent size={"25px"} />
                  <div className="h-10 ml-1 hover:text-green-600">
                    <span className="text-sm">Gigs on Promo</span>
                    <br />
                    <span className="text-sm">Buy services on sale</span>
                  </div>
                </a>
                <a
                  className="rounded-t text-black hover:text-green-600 mx-2 my-2 py-1 px-2 items-center h-16 flex whitespace-no-wrap no-underline w-1/2"
                  href="#!"
                >
                  <BsBuilding size={"25px"} />
                  <div className="h-10 ml-1 hover:text-green-600">
                    <span className="text-sm">Permanent role</span>
                    <br />
                    <span className="text-sm">Hire Full time staffs</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {/* Shopping cart and mail */}
          <div className="flex items-center mr-3">
            <div className="p-1.5 rounded-md mr-3 hover:bg-slate-200">
              <FiShoppingCart size={"25px"} />
            </div>
            <div className="p-1.5 rounded-md mr-3 hover:bg-slate-200">
              <FiMail size={"25px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyNavbar