import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginForm from './Component/LoginForm/LoginForm.jsx'
import SignUpForm from './Component/SignUpForm/SignUpForm.jsx'
import AuthProvider from './Component/AutProvider/AutProvider.jsx'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/signUp",
        element:<SignUpForm></SignUpForm>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
   
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
