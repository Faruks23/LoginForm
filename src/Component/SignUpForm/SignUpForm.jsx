import React from 'react';
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
 } from "../Style";

const SignUpForm = () => {
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
        <input type="checkbox" /> Remember me
      </CheckboxLabel>
      <CheckboxLabel>
        <input type="checkbox" /> Agree to terms and conditions
      </CheckboxLabel>
      <LoginButton onClick={handleLogin}>Login</LoginButton>
    </FormContainer>
  );
};

export default SignUpForm;