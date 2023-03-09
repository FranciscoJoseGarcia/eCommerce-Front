import React from "react";
import useInput from "../hooks/useInput";
import Input from "../commons/Input";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/user/login", {
        email: email.value,
        password: password.value,
      })
      .then(
        (res) => {
          console.log(res.data);
        },
        { withCredentials: true }
      );
  };

  return (
    <div className="loginConteiner">
      <form className="loginForm" onSubmit={onSubmitHandler}>
        <h3 className="registerTitle">Login</h3>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          valueHandler={email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          valueHandler={password}
        />
        <button className="registerButton" type="submit">
          Submit
        </button>
        <div className="registerAlreadyAccount">
          <p>First time in DevGames3?</p>
          <Link className="registerLink" to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
