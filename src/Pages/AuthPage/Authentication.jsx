import React, { useState } from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../Components/SignUp/SignUpForm";
import SignInForm from "../../Components/SignIn/SignInForm";
import "./Authentication.scss";
import imageSignIn from "../../Assets/login-image.png";
import imageSignUp from '../../Assets/sign-up-image.png'
// import Button from "../../Components/button/button.component";

const Authentication = () => {
  const [state, setState] = useState("sign-in");
  return (
    <div className="container auth-card p-5 mt-5">
      <div className="row">
        <div className="col-lg-5 col-md-12 glass">
          <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
            Welcome Adventourer!
          </h6>
          <h1 className="heading">
            Let's Go On A
            <span style={{ color: "#0CC0DF" }}> Journey</span>🚀
          </h1>
          <SignUpForm />
        </div>
        <div className="col-2"></div>
        <div className="col-lg-5 d-none d-md-block d-lg-block banner-img">
          <img src={imageSignUp} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
