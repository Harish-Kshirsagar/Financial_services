import React from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { baseUrl } from "../constants";
import axios from "axios";
const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data", formData);
  };

  return (
    <div className={style.loginFormWrapper}>
      <div className={style.heading}>
        <span className={style.bigHeading}>Sign Up</span>
      </div>
      <div className={style.inputFeildWrapper}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            className={style.inputFeild}
            placeholder="Name"
            value={formData.userName}
            onChange={handleChange}
          />
          <hr />
          <input
            type="text"
            className={style.inputFeild}
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <hr />
          <input
            type="password"
            name="password"
            className={style.inputFeild}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <hr />
          <input
            type="password"
            name="confirmPassword"
            className={style.inputFeild}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <hr />

          <select value={""} className={style.inputFeild}>
            <option value="">Select an option</option>
            <option value="Relationship_Manager">Relationship Manager</option>
            <option value="Relationship Manager">Operations Manager</option>
          </select>
          <hr />

          <button className={style.formSubmitButton}>Sign Up</button>
        </form>
        <div className={style.registUserRedirect}>
          <span>Click to Sign in</span>&nbsp;
          <Link to="/">here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
