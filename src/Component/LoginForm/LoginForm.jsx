import React, { useContext, useRef, useState } from "react";
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
  Register,
} from "../Style";
import { Link, useNavigate } from "react-router-dom";
import SignUpForm from "../SignUpForm/SignUpForm";
import { AuthContext } from "../AutProvider/AutProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const LoginForm = () => {
  const { SignInWithEmailPassword } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
 const [ToggleForm, setToggleForm] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const Navigate=useNavigate()

  
  const EmailRef = useRef();
  const PasswordRef = useRef();
  // login with password and email
  const handleLogin = (e) => {
    e.preventDefault();
    const Email = EmailRef.current.value;
   const Password = PasswordRef.current.value;
  SignInWithEmailPassword(Email, Password)
    .then((result) => {
      alert("Login Success");
      Navigate("/Home");
      console.log();
    })
    .catch((err) => {
    alert(err.message);
    });

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
            <SignUpForm
              handlePasswordVisibility={handlePasswordVisibility}
              showPassword={showPassword}
              setToggleForm={setToggleForm}
            ></SignUpForm>
          </>
        ) : (
          <>
            <FormContainer onSubmit={handleLogin}>
              <LoginFormTitle>Login</LoginFormTitle>
              <Label>Login ID</Label>
              <LoginFormInput placeholder="Login ID" required ref={EmailRef} />
              <Label>Password</Label>

              <PasswordContainer>
                <LoginFormInput
                  type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    ref={PasswordRef}
                    required
                />
                <PasswordVisibilityIcon onClick={handlePasswordVisibility}>
                  {!showPassword ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.185 19.368L13.764 16.9455C12.8278 17.2802 11.8157 17.3422 10.8456 17.1243C9.87554 16.9063 8.98729 16.4173 8.28423 15.7143C7.58117 15.0112 7.09221 14.123 6.87424 13.1529C6.65628 12.1828 6.71827 11.1707 7.053 10.2345L3.963 7.1445C1.407 9.417 0 12 0 12C0 12 4.5 20.25 12 20.25C13.4406 20.245 14.8649 19.9448 16.185 19.368ZM7.815 4.632C9.13508 4.05514 10.5594 3.75496 12 3.75C19.5 3.75 24 12 24 12C24 12 22.5915 14.5815 20.0385 16.857L16.9455 13.764C17.2802 12.8278 17.3422 11.8157 17.1243 10.8456C16.9063 9.87554 16.4173 8.98729 15.7143 8.28423C15.0112 7.58117 14.123 7.09221 13.1529 6.87424C12.1828 6.65628 11.1707 6.71827 10.2345 7.053L7.815 4.6335V4.632Z"
                          fill="#737B86"
                        />
                        <path
                          d="M8.28774 11.469C8.20523 12.0455 8.25811 12.6332 8.44218 13.1857C8.62626 13.7382 8.93648 14.2402 9.34826 14.652C9.76003 15.0638 10.2621 15.374 10.8145 15.5581C11.367 15.7421 11.9548 15.795 12.5312 15.7125L8.28624 11.469H8.28774ZM15.7127 12.531L11.4692 8.286C12.0457 8.20349 12.6335 8.25637 13.1859 8.44044C13.7384 8.62452 14.2404 8.93474 14.6522 9.34652C15.064 9.75829 15.3742 10.2603 15.5583 10.8128C15.7424 11.3653 15.7952 11.953 15.7127 12.5295V12.531ZM20.4692 21.531L2.46924 3.531L3.53124 2.469L21.5312 20.469L20.4692 21.531Z"
                          fill="#737B86"
                        />
                      </svg>
                    </>
                  ) : (
                    "👁️"
                  )}
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
                <LoginButton type="submit">Login</LoginButton>
                <SocialLogin></SocialLogin>
              <Register>
                Don’t have an account?{" "}
                <Terms  onClick={handleToggleForm}> Register Here</Terms>
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
