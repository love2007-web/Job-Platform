import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const JobForm = () => {
  // useEffect(() => {
  //     const fetchData = async () => {
  //         const options = {
  //           method: "GET",
  //           url: "https://iys-skill-api.p.rapidapi.com/ISOT/children/",
  //           params: { id: "files/198956" },
  //           headers: {
  //             "X-RapidAPI-Key":
  //               "4be1432cf1mshf71e7ac96443240p1a8677jsn16356832a55b",
  //             "X-RapidAPI-Host": "iys-skill-api.p.rapidapi.com",
  //           },
  //         };

  //         try {
  //           const response = await axios.request(options);
  //           console.log(response);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //     };

  //     fetchData();
  // }, []);

  // State for the user's search query and selected skills
  const [query, setQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  // Predefined list of skills (replace this with your actual skill list)
  const skillList = [
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

  // Handler for the skill search input
  const handleSearchInput = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  // Handler for adding a skill to selectedSkills
  const handleSkillSelect = (skill) => {
    // Check if the skill is already selected
    if (selectedSkills.includes(skill)) {
      // Skill is already selected, show an alert or notification to the user
      alert(`${skill} has already been added.`);
    } else {
      // Skill is not selected, add it to the selectedSkills state
      setSelectedSkills([...selectedSkills, skill]);
    }
    setQuery(""); // Reset the search query after selecting a skill
  };

  // Handler for removing a skill from selectedSkills
  const handleSkillRemove = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission, including selectedSkills
    console.log("Submitted:", selectedSkills);
    // Add your code here to submit the data to the backend (API endpoint)
  };

  // Filter the skillList based on the search query
  const matchedSkills = skillList.filter((skill) =>
    skill.toLowerCase().includes(query)
  );

  const submit = () => {
    const email = localStorage.getItem('email')
    const data = { selectedSkills, email };
    const uri = "http://localhost:5000/users/setup";
    console.log(data);
    axios
      .post(uri, data)
      .then((response) => {
        console.log(response);
        alert(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form className="p-2" onSubmit={handleSubmit}>
        {/* Other fields like name, email, etc. can be added here */}
        <label className="fs-4" htmlFor="skillSearch">
          Search and Select Your Skills
        </label>
        <input
          type="text"
          id="skillSearch"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search Your Skills here"
          name="skillSearch"
          value={query}
          onChange={handleSearchInput}
          required
        />
        <div className="flex  flex-wrap">
          {/* Display selected skills as tags */}
          {selectedSkills.map((skill) => (
            <span
              className="bg-blue-400 p-2 rounded-lg mx-2 my-2"
              key={skill}
              onClick={() => handleSkillRemove(skill)}
            >
              {skill}
            </span>
          ))}
        </div>
        <div>
          {/* Display matched skills as options */}
          <ul className="p-0 list-disc">
            {matchedSkills.map((skill) => (
              <li
                className="bg-gray-200 my-2 pl-3 p-4 rounded-xl hover:bg-gray-300"
                key={skill}
                onClick={() => handleSkillSelect(skill)}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={submit} className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default JobForm;
