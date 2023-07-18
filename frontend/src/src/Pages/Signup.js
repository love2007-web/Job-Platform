import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const onSubmit = (values) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    console.log(data);
      const uri = "http://localhost:5000/users/register";
      axios.post(uri, data)
        .then((response) => {
          console.log(response);
          alert(response.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
     // Call the register function with the data
  };


  const emailValidate =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const navigate = useNavigate();
  const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      validationSchema: yup.object().shape({
        firstName: yup.string().required("This input field cannot be empty"),
        lastName: yup.string().required("This cannot be empty"),
        email: yup
          .string()
          .matches(emailValidate, "Must be a valid email")
          .required("Email field is required"),
        password: yup
          .string()
          .required("Password field cannot be empty")
          .min(6, "Password cannot be less than 6 characters"),
      }),
      onSubmit
    });

  return (
    <>
      <div className="flex justify-content-center container  my-36">
        <form onSubmit={handleSubmit} className="shadow-lg p-3 w-96 rounded-xl">
          <div className="form-group mt-3">
            <input
              name="firstName"
              className="w-full p-2 border "
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name"
              type="text"
            />
            {touched.firstName && errors.firstName && (
              <small className="text-danger fw-bold">{errors.firstName}</small>
            )}
          </div>
          <div className="form-group mt-3">
            <input
              name="lastName"
              className="w-full p-2 border "
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Last Name"
              type="text"
            />
            {touched.lastName && errors.lastName && (
              <small className="text-danger fw-bold">{errors.lastName}</small>
            )}
          </div>
          <div className="form-group mt-3">
            <input
              name="email"
              className="w-full  p-2 border  "
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              type="text"
            />
            {touched.email && errors.email && (
              <small className="text-danger fw-bold">{errors.email}</small>
            )}
          </div>
          <div className="form-group mt-3">
            <input
              name="password"
              className="w-full  p-2 border  "
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              type="text"
            />
            {touched.password && errors.password && (
              <small className="text-danger fw-bold">{errors.password}</small>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
