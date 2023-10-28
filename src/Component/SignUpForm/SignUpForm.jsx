import React, { useState } from 'react';
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

const SignUpForm = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [ToggleForm,setToggleForm] = useState(false);
   const handlePasswordVisibility = () => {
     setShowPassword(!showPassword);
   };


  const handleSignUp = () => { 


  }



  return (
    <FormContainer>
      <LoginFormTitle>SignUp</LoginFormTitle>
      <Label>Email</Label>
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
      <PasswordContainer>
        <LoginFormInput
          type={showPassword ? "password" : "text"}
          placeholder=" Confirm Password"
        />
        <PasswordVisibilityIcon onClick={handlePasswordVisibility}>
          {showPassword ? "👁️" : "👁️"}
        </PasswordVisibilityIcon>
      </PasswordContainer>

      <CheckboxLabel>
        <input type="checkbox" /> Agree to <Terms> Terms & conditions</Terms>
      </CheckboxLabel>
      <LoginButton onClick={handleSignUp}>Submit</LoginButton>
    </FormContainer>
  );
};

export default SignUpForm;