import React from 'react'
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import CompanyNavbar from './CompanyNavbar'

// const skillsList = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'];
const PostJob = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [inputValue, setInputValue] = useState("");
   const [selectedSkills, setSelectedSkills] = useState([]);

   const handleInputChange = (e) => {
     setInputValue(e.target.value);
   };

   const handleInputClick = () => {
     setIsOpen(!isOpen);
   };

   const handleSkillSelect = (skill) => {
     setSelectedSkills((prevSkills) => [...prevSkills, skill]);
     setInputValue("");
     setIsOpen(false);
   };

   const handleRemoveSkill = (skill) => {
     setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
   };

   const skillsList = [
     "JavaScript",
     "Python",
     "Java",
     "HTML",
     "CSS",
     "React",
     "Node.js",
     "Angular",
     "PHP",
     "Laravel",
     "Bootstrap",
     "Tailwind CSS",
     "Machine Learning",
     "Automation",
     "Data Analysis",
     "C++",
     "C#",
     ".Net",
     "Junior Frontend Developer",
     "Senior Frontend Developer",
     "Junior Backend Developer",
     "Senior Backend Developer",
     "Web Developer",
   ];
  const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const user = localStorage.getItem("email")
    const onSubmit = (values)=>{
        setIsLoading(true)
        const data = {
            jobTitle: values.jobTitle,
            location: values.location,
            requiredSkills: selectedSkills,
            jobDescription: values.jobDescription,
            experience: values.experience,
            careerLevel: values.careerLevel,
            employmentType: values.employmentType,
            salaryRange: values.salaryRange,
            user: user
        }
        const uri = "http://localhost:5000/company/createjob";
        axios
          .post(uri, data)
          .then((response) => {
            console.log(response);
            alert(response.data.message);
            navigate("/postedjobs")
          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
          })
          .finally(() => {
            setIsLoading(false);
          });
    }
    const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
      useFormik({
        initialValues: {
          jobTitle: "",
          location: "",
          requiredSkills:"",
          jobDescription:"",
          experience:"",
          careerLevel:"",
          employmentType:"",
          salaryRange:"",
          user:"",
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
      {isLoading ? (
        <div className="fixed inset-0 z-10 bg-opacity-75 backdrop-filter backdrop-blur-sm">
          <div className="flex items-center justify-center h-screen">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : null}
      <div>
        <div className="fixed z-10 w-full">
          <CompanyNavbar />
        </div>
        <div className="px-3 ">
          <form onSubmit={handleSubmit} className="pt-20 px-5">
            <h1 className="">New Job Offer</h1>
            <p>Add a new job to your company's job list</p>
            <div>
              <div>
                <small>Job title</small>
                <br />
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Add title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border w-full h-16 p-3 rounded-full"
                />
              </div>
              <div className="flex mt-3">
                <div className="w-1/2 pr-7">
                  <small>Location</small>
                  <br />
                  <input
                    type="text"
                    name="location"
                    placeholder="E.g San Francisco, CA"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border w-full h-16 p-3 rounded-full"
                  />
                </div>
                <div className="w-1/2 pl-7 relative z-0">
                  <small>Required Skills</small>
                  <br />
                  <input
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={handleInputClick}
                    className="border w-full h-16 p-3 rounded-full"
                    autoComplete="off" // Disable browser suggestions
                  />
                  {isOpen && inputValue.length > 0 && (
                    <div className="border rounded absolute w-full bg-white mt-1">
                      <ul>
                        {skillsList
                          .filter((skill) =>
                            skill
                              .toLowerCase()
                              .includes(inputValue.toLowerCase())
                          )
                          .map((skill) => (
                            <li
                              key={skill}
                              className="p-2 cursor-pointer hover:bg-gray-100"
                              onClick={() => handleSkillSelect(skill)}
                            >
                              {skill}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                  <div><br />
                    <div>
                      {selectedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-200 px-2 py-1 m-1 rounded-full"
                        >
                          {skill}{" "}
                          <button onClick={() => handleRemoveSkill(skill)}>
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <small>Job Description</small>
                <br />
                <textarea
                  name="jobDescription"
                  id=""
                  cols="160"
                  placeholder="Type the description here..."
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                    name="experience"
                    placeholder="Minimun 3 years"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border w-full h-16 p-3 rounded-full"
                  />
                </div>
                <div className="w-1/2 pl-7">
                  <small>Career Level</small>
                  <br />
                  <select
                    name="careerLevel"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id=""
                    className="border w-full h-16 p-3 rounded-full"
                  >
                    <option value="">No Experience</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                    <option value="Manager / Executive">
                      Manager / Executive
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex mt-3">
                <div className="w-1/2 pr-7">
                  <small>Employment Type</small>
                  <br />
                  <select
                    name="employmentType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border w-full h-16 p-3 rounded-full"
                  >
                    <option value="">Select Employment Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                    <option value="Contract">Contract</option>
                    <option value="Training">Training</option>
                  </select>
                </div>
                <div className="w-1/2 pl-7">
                  <small>Salary Range</small>
                  <br />
                  <select
                    name="salaryRange"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border w-full h-16 p-3 rounded-full"
                  >
                    <option value="">Select Range</option>
                    <option value="$700 - $1000">$700 - $1000</option>
                    <option value="$1000 - $1200">$1000 - $1200</option>
                    <option value="$1200 - $1400">$1200 - $1400</option>
                    <option value="$1500 - $1800">$1500 - $1800</option>
                    <option value="$2000 - $3000">$2000 - $3000</option>
                    <option value="Unlimited">Unlimited</option>
                  </select>
                </div>
              </div>
              <div className="my-16">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-4 py-2 text-xl rounded-full"
                >
                  Publish Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostJob