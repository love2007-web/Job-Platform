import React from 'react'
import { FiHome } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";


const CompanyDashboardSidebar = () => {
     const CurCompany = localStorage.getItem("CurCompany");
     console.log(CurCompany);
  return (
    <>
      <div className="w-80 border hidden list-none p-2 h-screen lg:block">
        <div className="mb-3 cursor-pointer">
          <li className="flex items-center text-center font-bold text-white bg-slate-800 w-full p-2.5 rounded-xl">
            <FiHome className="ml-3" />
            <span className="ml-3">Home</span>
          </li>
        </div>
        <div className="mb-3 cursor-pointer">
          <li className="flex items-center text-center font-bold text-black w-full p-2.5 rounded-xl">
            <MdWorkOutline className="ml-3" />
            <span className="ml-3">Work</span>
          </li>
        </div>
        <div className="mb-3 cursor-pointer">
          <li className="flex items-center text-center font-bold text-black w-full p-2.5 rounded-xl">
            <AiOutlineHeart className="ml-3" />
            <span className="ml-3">Saved Profiles</span>
          </li>
        </div>
        <div className="mb-3 cursor-pointer">
          <li className="flex items-center text-center font-bold text-black w-full p-2.5 rounded-xl">
            <BiEditAlt className="ml-3" />
            <span className="ml-3">My Job Posts</span>
          </li>
        </div>
        <div className="mb-3 cursor-pointer">
          <li className="flex items-center text-center font-bold text-black w-full p-2.5 rounded-xl">
            <BiWallet className="ml-3" />
            <span className="ml-3">Transactions</span>
          </li>
        </div>
        <div className="mb-3 cursor-pointer">
          <li className="flex items-center text-center font-bold text-black w-full p-2.5 rounded-xl">
            <AiOutlineStar className="ml-3" />
            <span className="ml-3">Reviews</span>
          </li>
        </div>
        <hr />

        {/* profile section */}
        <div className="mt-44 bg-slate-300 h-12">
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <p>{CurCompany}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyDashboardSidebar