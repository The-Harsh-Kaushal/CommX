import React from "react";
import LiveChat from "../../img/liveChat.png";
import './login.css'
export default function Login() {
  return (
    <div className="Login">
    <div className="secondLayer">

        <div className="left">
            <div className="level2">
                <p className="heading">welcome here,</p>
                <input type="text" placeholder="Username"/>
                 <input type="password" placeholder="Password"/>
                 <button type="button" className="btn btn-outline-secondary">Sign In</button>
                 <button type="button" className="btn btn-outline-secondary btn-disable">Sign up</button>
    
            </div>
        </div>
        <div className="right">
            
            <div className="level2">
                <p  className="heading">New here,</p>
               
               <button type="button" className="btn btn-outline-secondary">Sign up</button>
    
            </div>
        </div>
    </div>
</div>
  );
}

