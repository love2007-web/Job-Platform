import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import CompanyNavbar from './CompanyNavbar'

const PostJob = () => {
    const onSubmit = (values)=>{

    }
    const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
      useFormik({
        initialValues: {
          jobTitle: "",
          location: "",
          category:"",
          jobDescription:"",
          experience:"",
          careerLevel:"",
          employmentType:"",
          salaryRange:"",
        },
        validationSchema: yup.object().shape({
          jobTitle: yup
            .string()
            .required("Job title field is required"),
          location: yup
            .string()
            .required("Password field cannot be empty")
        }),
        onSubmit,
      });
  return (
    <>
      <div>
        <div className="fixed w-full">
          <CompanyNavbar />
        </div>
        <div className="px-3 ">
          <form className="pt-20 px-5">
            <h1 className="">New Job Offer</h1>
            <p>Add a new job to your company's job list</p>
            <div>
              <div>
                <small>Job title</small>
                <br />
                <input
                  type="text"
                  placeholder="Add title"
                  className="border w-full h-16 p-3 rounded-full"
                />
              </div>
              <div className="flex mt-3">
                <div className="w-1/2 pr-7">
                  <small>Location</small>
                  <br />
                  <input
                    type="text"
                    placeholder="E.g San Francisco, CA"
                    className="border w-full h-16 p-3 rounded-full"
                  />
                </div>
                <div className="w-1/2 pl-7">
                  <small>Category</small>
                  <br />
                  <select
                    name=""
                    id=""
                    className="border w-full h-16 p-3 rounded-full"
                  >
                    <option value="">Select a category</option>
                    <option value="">Marketing & Communication</option>
                    <option value="">Software Engineering</option>
                    <option value="">Project Management</option>
                    <option value="">Finance</option>
                    <option value="">Retail</option>
                    <option value="">Sales</option>
                    <option value="">Manufacturing</option>
                    <option value="">Business Development</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <small>Job Description</small>
                <br />
                <textarea
                  name=""
                  id=""
                  cols="160"
                  placeholder="Type the description here..."
                  rows="5"
                  className="border p-3"
                ></textarea>
              </div>
              <div className="flex mt-3">
                <div className="w-1/2 pr-7">
                  <small>Experience</small>
                  <br />
                  <input
                    type="text"
                    placeholder="Minimun 3 years"
                    className="border w-full h-16 p-3 rounded-full"
                  />
                </div>
                <div className="w-1/2 pl-7">
                  <small>Career Level</small>
                  <br />
                  <select
                    name=""
                    id=""
                    className="border w-full h-16 p-3 rounded-full"
                  >
                    <option value="">No Experience</option>
                    <option value="">Entry Level</option>
                    <option value="">Mid Level</option>
                    <option value="">Senior Level</option>
                    <option value="">Manager / Executive</option>
                  </select>
                </div>
              </div>
              <div className="flex mt-3">
                <div className="w-1/2 pr-7">
                  <small>Employment Type</small>
                  <br />
                  <select
                    name=""
                    id=""
                    className="border w-full h-16 p-3 rounded-full"
                  >
                    <option value="">Full Time</option>
                    <option value="">Part Time</option>
                    <option value="">Remote</option>
                    <option value="">Internship</option>
                    <option value="">Contract</option>
                    <option value="">Training</option>
                  </select>
                </div>
                <div className="w-1/2 pl-7">
                  <small>Salary Range</small>
                  <br />
                  <select
                    name=""
                    id=""
                    className="border w-full h-16 p-3 rounded-full"
                  >
                    <option value="">Select Range</option>
                    <option value="">$700 - $1000</option>
                    <option value="">$1000 - $1200</option>
                    <option value="">$1200 - $1400</option>
                    <option value="">$1500 - $1800</option>
                    <option value="">$2000 - $3000</option>
                    <option value="">Unlimited</option>
                  </select>
                </div>
              </div>
              <div className='my-16'>
                <button className='bg-blue-700 text-white px-4 py-2 text-xl rounded-full'>Publish Job</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostJob