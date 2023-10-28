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
 } from "../Style";
import { AuthContext } from '../AutProvider/AutProvider';
import { useNavigate } from 'react-router-dom';



const SignUpForm = () => {

  const { CreateUser } = useContext(AuthContext);
   const [showPassword, setShowPassword] = useState(false);
  const [ToggleForm, setToggleForm] = useState(false);
   
  const EmailRef=useRef()
  const PasswordRef=useRef()
  const ConfirmPasswordRef = useRef()
  
  const Navigation=useNavigate()
 


   const handlePasswordVisibility = () => {
     setShowPassword(!showPassword);
   };




  const handleSignUp = (e) => { 
    e.preventDefault();
    // console.log(EmailRef.current.value);
  
    const Email = EmailRef.current.value;

   const Password = PasswordRef.current.value;
   const confirmPassword = ConfirmPasswordRef.current.value;
    
//     // reexpression
//  if (password !== ConfirmPassword) {
//    toast.error("Please enter right password");
//    return;
//  } else if (password.length < 6) {
//    toast.error("password must be Greater than 6 characters");
//    return;
//  } else if (!/[A-Z]/.test(password)) {
//    toast.error("Error: password must  have a capital letter.");
//    return;
//  } else if (!/[!@#$%^&*()-=_+|;':",.<>/?]/.test(password)) {
//    toast.error("Error: password must  have a special character.");
//    return;
//  }

    // create new user with new password and email
    if (Email && Password) {
      CreateUser(Email, Password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          Navigation('/')
          alert("Registration successful");
        })
        .catch((err) => {
          console.log(err);
        alert(err.message);
        });
      
    }
 

  }



  return (
    <FormContainer onSubmit={handleSignUp}>
      <LoginFormTitle>SignUp</LoginFormTitle>
      <Label>Email</Label>
      <LoginFormInput
        placeholder="Enter Your Email"
        type="email"
        name="email"
       ref={EmailRef}
      />
      <Label>Password</Label>

      <PasswordContainer>
        <LoginFormInput
          type={showPassword ? "password" : "text"}
          placeholder="Password"
          name="password"
          ref={PasswordRef}
        />
        <PasswordVisibilityIcon onClick={handlePasswordVisibility}>
          {showPassword ? "👁️" : "👁️"}
        </PasswordVisibilityIcon>
      </PasswordContainer>
      <PasswordContainer>
        <LoginFormInput
          type={showPassword ? "password" : "text"}
          placeholder=" Confirm Password"
          name="ConfirmPassword"
          ref={ConfirmPasswordRef}
        />
        <PasswordVisibilityIcon onClick={handlePasswordVisibility}>
          {showPassword ? "👁️" : "👁️"}
        </PasswordVisibilityIcon>
      </PasswordContainer>

      <CheckboxLabel>
        <input type="checkbox" /> Agree to <Terms> Terms & conditions</Terms>
      </CheckboxLabel>
      <LoginButton type="submit" onClick={handleSignUp}>
        Submit
      </LoginButton>
    </FormContainer>
  );
};

export default SignUpForm;