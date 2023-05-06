import { useState } from "react";
import style from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../constants";
const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(loginDetails);
  };

  return (
    <div className={style.loginFormWrapper}>
      <div className={style.heading}>
        <span className={style.bigHeading}>Sign in</span>
      </div>
      <div className={style.inputFeildWrapper}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={style.inputFeild}
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <hr />
          <input
            type="text"
            name="password"
            className={style.inputFeild}
            placeholder="Password"
            onChange={handleChange}
          />
          <hr />
          <button className={style.formSubmitButton}>Sign In</button>
          <button className={style.formSubmitButton}>
            Sign In As Relationship Manager
          </button>
          <button className={style.formSubmitButton}>
            Sign In As Oprational Manager
          </button>
        </form>
        <div className={style.registUserRedirect}>
          <span>Don't have account </span>&nbsp;
          <Link to="/register">Click here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
