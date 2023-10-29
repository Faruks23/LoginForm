import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
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
import { AuthContext } from '../AutProvider/AutProvider';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUpForm = ({
  setToggleForm,
  handlePasswordVisibility,
  showPassword,
}) => {
  const handleToggleForm = () => {
    setToggleForm(false);
  };
  const { CreateUser } = useContext(AuthContext);
 

  const EmailRef = useRef();
  const PasswordRef = useRef();
  const ConfirmPasswordRef = useRef();
  // const [email,setEmail]=useState('')
  // const [password,setPassword]=useState('')
  // const [ConfirmPassword, setConfirmPassword] = useState("");
  const Navigation = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // console.log(EmailRef.current.value);

    const Email = EmailRef.current.value;

    const Password = PasswordRef.current.value;
    const confirmPassword = ConfirmPasswordRef.current.value;

        // reexpression
    if (Password !== confirmPassword) {
      alert("Please enter right password");
      return;
    } else if (Password.length < 6) {
     alert("password must be Greater than 6 characters");
      return;
    }
   

    // create new user with new password and email
    if (Email && Password) {
      CreateUser(Email, Password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          Navigation("/Home");
          alert("Registration successful");
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    }
  };

  return (
    <FormContainer onSubmit={handleSignUp}>
      <LoginFormTitle>SignUp</LoginFormTitle>
      <Label>Email</Label>
      <LoginFormInput
        placeholder="Enter Your Email"
        type="email"

        ref={EmailRef}
        required
      />
      <Label>Password</Label>

      <PasswordContainer>
        <LoginFormInput
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          ref={PasswordRef}
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

      <PasswordContainer>
        <LoginFormInput
          type={showPassword ? "text" : "password"}
          placeholder=" Confirm Password"
          name="ConfirmPassword"
          ref={ConfirmPasswordRef}
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

      <CheckboxLabel>
        <input type="checkbox" /> Agree to <Terms> Terms & conditions</Terms>
      </CheckboxLabel>
      <LoginButton type="submit" onClick={handleSignUp}>
        Submit
      </LoginButton>

      <SocialLogin></SocialLogin>
      <Register>
        have an account? <Terms onClick={handleToggleForm}> Login here</Terms>
      </Register>
    </FormContainer>
  );
};

export default SignUpForm;