import React from 'react';
import logo from "../src/image1.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';


export default function LoginSuccess() {
    const navigate = useNavigate();
  return (
    <div className="heropage flex flex-col justify-center items-center">
      <div className="text-center">
        <img src={logo} alt="Header Image" className="mx-auto mt-10" style={{ width: '200px', height: 'auto' }}/>
        <h1 className="text-5xl mt-6 font-bold">
        Welcome to Krutrim Cloud Console!
        </h1>
        <h2 className="text-2xl mt-10 font-semibold text-gray-600">You are logged in !</h2>
       
      </div>
    </div>
  );
}
