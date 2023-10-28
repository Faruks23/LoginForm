import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  max-width: 550px;
  text-align: center;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  padding: 50px;
`;

export const LoginFormTitle = styled.h2`
 color: var(--Text-color, #04072F);

text-align: center;
/* Heading 1 - Bold - 48 */
font-family: Poppins;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 110%; /
`;

export const LoginFormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const PasswordVisibilityIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  color: var(--Light-Color---1, #737b86);
  font-size: 18px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  display: flex;
  margin: 10px 0;
  input {
    margin-right: 10px;
  }
`;

export const Label = styled.h1`
  color: var(--Text-color, #04072f);
  font-size: 18px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  text-align: left;
`;

export const LoginButton = styled.button`
  width: 100%;
  max-width: 538px;
  height: 56px;
  padding: 10px;
  border-radius: 8px;
  background: var(--Primary---1, #1575a7);

  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top:40px;

`;
export const Terms = styled.span`
  color: var(--Secondary---1, #f78719);
  text-decoration-line: underline;
  margin-left: 2px;
`;
