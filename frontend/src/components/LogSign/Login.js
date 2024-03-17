import React,{useState} from "react";
import axios from "axios";
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { Backdrop , CircularProgress , Button,  } from '@mui/material';
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [AlertContent, SetAlertContent] = useState({
    type : "success",
    message : "Signup Sucessfull"
  })
  const [ShowAlert , SetShowAlert] = useState(false);
    const GoToSignUp = ()=>{
        navigate('/signup');
    }

    const [open, setOpen] = useState(false);
     const handleClose = () => {
       setOpen(false);
     };
     const handleOpen = () => {
       setOpen(true);
     };
   

    const DoLogin = ()=>{
      handleOpen();
      const URL = "http://localhost:5000/user/login";
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
 
      const data = {
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
         if(error.response.status== 399){
           SetAlertContent({
             type: "error",
             message : "Fill the required fields"
           })
           handleClose();
           SetShowAlert(true);
           setTimeout(() => {
            SetShowAlert(false);
           }, 2000);
         }
       else  if(error.response.status== 400){
           SetAlertContent({
             type: "error",
             message : "No user exist with this email"
           })
           handleClose();
           SetShowAlert(true);
           setTimeout(() => {
            SetShowAlert(false);
           }, 2000);
         }
       else  if(error.response.status== 410){
           SetAlertContent({
             type: "error",
             message : "Incorrect Password"
           })
           handleClose();
           SetShowAlert(true);
           setTimeout(() => {
            SetShowAlert(false);
           }, 2000);
         }
       })
       
       
     }

     
  return (
    <div className="Login">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="secondLayer">
        <div className="left">
          <div className="level2">
            <p className="heading">welcome here,</p>
            <input type="text" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <button type="button" className="btn btn-outline-secondary" onClick={DoLogin}>
              Login In
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-disable"
              onClick={GoToSignUp}
            >
              Sign up
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

            <button type="button" className="btn btn-outline-secondary" onClick={GoToSignUp}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
