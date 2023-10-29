import React, { useContext } from 'react';
import { AuthContext } from '../AutProvider/AutProvider';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { user, LogOutUser } = useContext(AuthContext);
  console.log(user, "from home");
   const Navigate=useNavigate()


  const handleLotOut = () => { 
     
    LogOutUser()
      .then(() => {
       Navigate('/')
    })


  }



const Title=styled.h1`
  text-align: center;
`;
  
  const LogOutBtn = styled.button`
     background-color:blue;
     border-radius:6px;
      padding:10px;
      cursor:pointer;
      color:white;
      border:none;
      margin-left:50%;

  `

  return (
    <>
      <Title>Welcome to Home :{user.email}</Title>
      <LogOutBtn onClick={handleLotOut}>Logout</LogOutBtn>
    </>
  );
};


export default Home;

