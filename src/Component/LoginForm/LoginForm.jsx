import React, { useState } from "react";
import styled from "styled-components";
import FormImg from '../../assets/undraw_authentication_re_svpt 1.png'

import {
  FormContainer,
  LoginFormTitle,
  LoginFormInput,
  PasswordContainer,
  PasswordVisibilityIcon,
  CheckboxLabel,
  Label,
  LoginButton,
  Terms,
} from "../Style";
import { Link } from "react-router-dom";
import SignUpForm from "../SignUpForm/SignUpForm";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
 const [ToggleForm, setToggleForm] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Implement your login logic here
  };

  const handleToggleForm = () => { 
  setToggleForm(true)

  }

  return (
    <Container>
      <Main>
        {/* From image */}
        <FormImgContainer>
          <FromImage src={FormImg} alt="From image"></FromImage>
        </FormImgContainer>

        {/* Form container */}
        {ToggleForm ? (
          <>
            <SignUpForm></SignUpForm>
          </>
        ) : (
          <>
            <FormContainer>
              <LoginFormTitle>Login</LoginFormTitle>
              <Label>Login ID</Label>
              <LoginFormInput placeholder="Login ID" />
              <Label>Password</Label>
              <PasswordContainer>
                <LoginFormInput
                  type={showPassword ? "password" : "text"}
                  placeholder="Password"
                />
                <PasswordVisibilityIcon onClick={handlePasswordVisibility}>
                  {showPassword ? "👁️" : "👁️"}
                </PasswordVisibilityIcon>
              </PasswordContainer>
              <ChangPass>Change Password</ChangPass>
              <CheckboxLabel>
                <input type="checkbox" /> Remember me
              </CheckboxLabel>
              <CheckboxLabel>
                <input type="checkbox" /> Agree to{" "}
                <Terms> Terms & conditions</Terms>
              </CheckboxLabel>
              <LoginButton onClick={handleLogin}>Login</LoginButton>
              <Register>
                Don’t have an account?{" "}
               
                  <Terms onClick={handleToggleForm}> Register Here</Terms>
              
              </Register>
            </FormContainer>
          </>
        )}
      </Main>
    </Container>
  );
};



const Main = styled.main`

  width: 100%;
  display: flex;
  justify-content: center;
  gap: 147px;
  padding:10px;

  @media (max-width: 768px) {
    /* Switch to a column layout for smaller devices */
    flex-direction: column;
    align-items: center;
    padding:0px
  }
`;



const FormImgContainer = styled.div`
  max-width: 543.219px;
  max-height: 633.601px;
`;
const FromImage = styled.img`
  width: 100%; 
  height: 100%;
  margin: 20px 0; 
  
`;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;

`;

const ChangPass = styled.p`
  color: var(--Secondary---1, #f78719);
  text-align: right;
  /* Body Light - Regular - 18 */
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: 50%; /* 19.8px */
   
`;



const Register = styled.p`
  color: #04072f;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top:25px;

`;

// const FormContainer = styled.div`
//   width: 100%;
//   max-width: 450px;
//   text-align: center;
//   border-radius: 12px ;
//   background: #fff;
//   box-shadow:0px 10px 40px 0px rgba(0, 0, 0, 0.16);
//   padding:20px;
// `;

// const LoginFormTitle = styled.h2`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const LoginFormInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   outline: none;
// `;

// const PasswordContainer = styled.div`
//   position: relative;
// `;

// const PasswordVisibilityIcon = styled.span`
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
//   cursor: pointer;
// `;

// const CheckboxLabel = styled.label`
//   color: var(--Light-Color---1, #737b86);
//   /* Body Light - Regular - 18 */
//   font-family: Poppins;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 110%;
//   display: flex;
//   margin: 10px 0;
//   input {
//     margin-right: 10px;
//   }
// `;
// const Label = styled.h1`
// color:var(--Text-color, #04072F);
//   font-family: Poppins;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 110%;
//   text-align: left;
// `;

// const LoginButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

export default LoginForm;
