import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AutProvider/AutProvider";
import styled from "styled-components";
const SocialLogin = () => {
  const { SignInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    SignInWithGoogle()
      .then((result) => {
        
      alert("Login Success");

        navigate("/Home");
      })

      .catch((err) => {
       alert(err.message);
      });
  };

  return (
    <GoogleBtn>
      <p onClick={handleGoogleLogin} >
        <FcGoogle className="icon"></FcGoogle>
      </p>
    </GoogleBtn>
  );
};

const GoogleBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;



export default SocialLogin;
