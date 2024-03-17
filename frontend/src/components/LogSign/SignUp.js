import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { Backdrop , CircularProgress , Button,Alert  } from '@mui/material';
import { useNavigate } from "react-router-dom";



export default function SignUp() {
    const navigate = useNavigate();
    const [AlertContent, SetAlertContent] = useState({
      type : "success",
      message : "Signup Sucessfull"
    })
    const [ShowAlert , SetShowAlert] = useState(false);
    const GoToLogin = ()=>{
        navigate('/');
    }
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };


    const SignUp = ()=>{
      handleOpen();
     const URL = "http://localhost:5000/user/signup";
     const username = document.getElementById('username').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;

     const data = {
       name : username,
       email : email,
       password : password
     };
     const header ={ Headers: {"content-type": "application/json"} };
     axios.post(URL,data,header)
     .then(response=>{
      localStorage.setItem("userData",JSON.stringify(response.data));
      handleClose();
        navigate('/app')
     }).catch(error=>{
        if(error.response.status== 408){
          SetAlertContent({
            type: "error",
            message : "This Username is Already taken"
          })
          handleClose();
          SetShowAlert(true);
          setTimeout(() => {
           SetShowAlert(false);
          }, 2000);
        }
      else  if(error.response.status== 409){
          SetAlertContent({
            type: "error",
            message : "Email is Already Registered"
          })
          handleClose();
          SetShowAlert(true);
          setTimeout(() => {
           SetShowAlert(false);
          }, 2000);
        }
      })
      
      
    }
    return ( <>
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    <div className="Login">
      <div className="secondLayer">
        <div className="left">
          <div className="level2">
            <p className="heading">New here,</p>
            <input type="text" id="username" placeholder="Username" />
            <input type="text" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <button type="button" className="btn btn-outline-secondary" onClick={SignUp}>
              Sign up
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-disable"
              onClick={GoToLogin}
            >
              Login 
            </button>
            {
              ShowAlert && (
                <Alert  severity={AlertContent.type}>{AlertContent.message}</Alert>
              )
            }

          </div>
        </div>
        <div className="right">
          <div className="level2">
            <p className="heading">New here,</p>

            <button type="button" className="btn btn-outline-secondary" onClick={GoToLogin}>
              Log In 
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
