import React from 'react'
import liveChat from '../img/liveChat.png'
import './CSS/welcome.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Welcome() {
  const DarkMode =  useSelector((state)=>state.themekey);
  return (
    <div className={"Welcome" + (DarkMode?"":" darkWelcome")}>
    <img src={liveChat}></img>
    <div className='text'>
      View and text directly to the people present in the chat room.
    </div>
    </div>
  )
}
