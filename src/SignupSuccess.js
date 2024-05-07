import React from 'react';
import logo from "../src/image1.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';


export default function SignupSuccess() {
    const navigate = useNavigate();
  return (
    <div className="heropage flex flex-col justify-center items-center">
      <div className="text-center">
        <img src={logo} alt="Header Image" className="mx-auto mt-10" style={{ width: '300px', height: 'auto' }}/>
        <h1 className="text-5xl mt-6 font-bold">
          Signup Success Page! Complete the verification
        </h1>
        <h2 className="text-2xl mt-10 font-semibold text-gray-600">Verification mail sent to the email "xyz@olakrutrim.com" !</h2>
        
      </div>
    </div>
  );
}
