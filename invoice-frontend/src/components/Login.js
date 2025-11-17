import React from "react";
import { Button, Container } from "reactstrap";
import "../css/style.css";
import unlockImg from "../images/3d-unlocked.png";
import { toast, ToastContainer } from "react-toastify";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

// LOTTIE IMPORTS
import Lottie from "lottie-react";
import welcomeAnim from "../animation/welcome.json";

const Login = () => {
  const navigate = useNavigate();
  const validateSignUp = () => {
    const username = $("#username").val();
    const password = $("#password").val();

    $.ajax({
      url: `http://localhost:90/authentication/signup/${username}/${password}`,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ username, password }),
      success: function (response) {
        toast.success(response);
      },
      error: function (response) {
        toast.error(response);
      },
    });
  };

  const validateLogin = () => {
    const username = $("#username").val();
    const password = $("#password").val();

    $.ajax({
      url: `http://localhost:90/authentication/login/${username}/${password}`,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ username, password }),
      success: function (response) {
        toast.success(response);
         setTimeout(() => {
          navigate("/dashboard/home");
        }, 1000);
      },
      error: function (response) {
        toast.error(response);
      },
    });
  };

  return (
    <div className="main-login">
      <ToastContainer />

      {/* LEFT SIDE WITH LOTTIE ANIMATION */}
      <Container id="left-login">
        <Lottie id="welcome-animation" animationData={welcomeAnim} />
      </Container>

      {/* RIGHT SIDE LOGIN BOX */}
      <Container id="right-login">
        <div id="contentsec">
          <img src={unlockImg} alt="unlock" />
          <h3>Login</h3>
          <h2>Sign into your account</h2>

          <input
            type="text"
            placeholder="Input your UserName"
            name="username"
            id="username"
          />

          <input
            type="password"
            placeholder="Input your Password"
            name="password"
            id="password"
          />

          <select name="lang" id="lang">
            <option value={0}>English</option>
            <option value={1}>Hindi</option>
          </select>

          <div className="btn-container">
            <Button className="primary" outline onClick={validateLogin}>
              Login
            </Button>
            <Button className="info" outline onClick={validateSignUp}>
              Sign up
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
