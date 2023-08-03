import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import CompanyNavbar from './CompanyNavbar';
import axios from 'axios';

const PostedJobs = () => {
  const navigate = useNavigate()
  const home = ()=>{
    navigate("/companydashboard")
  }
  const [jobs, setjobs] = useState([]);
  const CurCompany = localStorage.getItem("CurCompany");
  // const email = localStorage.getItem("email")
  const fetchJobs = async () => {
    const data = {
      email: localStorage.getItem("email"),
    };
    const uri = "http://localhost:5000/company/fetchjobs";
    axios
      .post(uri, data)
      .then((response) => {
        setjobs(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []); // Empty dependency array ensures it's only called on mount

  useEffect(() => {
    console.log(jobs); // Log the updated jobs array
  }, [jobs]);


  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-80 border hidden list-none p-2 h-screen lg:block">
          <div onClick={home} className="mb-3 cursor-pointer">
            <li className="flex items-center text-center font-bold text-black  w-full p-2.5 rounded-xl">
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
            <li className="flex items-center text-center font-bold text-white bg-slate-800 w-full p-2.5 rounded-xl">
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

        {/* Main body */}
        <div className="w-full">
          <CompanyNavbar />
          <div className="p-4">
            <div>
              <h1>Manage Jobs</h1>
              <p>Detailed list with all your job offers</p>
            </div>
            <div className="bg-gray-100 p-4">
              {jobs ? (
                <ul className="space-y-4">
                  {jobs.map((job) => (
                    <li key={job.id} className="bg-white p-4 rounded-lg shadow">
                      <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
                      <p className="text-gray-600">Category: {job.category}</p>
                      <p className="text-gray-600">
                        Type: {job.employmentType}
                      </p>
                      <p className="text-gray-600">
                        Date Posted: {new Date(job.datePosted).toLocaleString()}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Loading</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostedJobs