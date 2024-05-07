import React from 'react';
import logo from "../src/image1.png";
import mainlanding from "../src/main-landing.jpeg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
  return (
    <div className="heropage h-screen flex flex-col" style={{backgroundImage: `url(${mainlanding})`, backgroundSize: 'cover'}}>
      <div className="text-center">
        <img src={logo} alt="Header Image" className="mx-auto mt-10" style={{ width: '300px', height: 'auto' }}/>
        <h1 className="text-5xl mt-6 font-bold">
          Revolutionising Workloads <span className="block">with</span> Krutrim Cloud
        </h1>
        <h2 className="text-2xl mt-10 font-semibold text-gray-600">Scale computational capabilities and experience the GPU services like never before</h2>
        <div className="mt-28">
          <button onClick={() => navigate('/signup')} className="bg-black hover:bg-gray-700 text-white border border-b-2 font-bold py-3 px-6 mr-4 rounded">
            
            Register 
            &nbsp;<ArrowForwardIcon />
          </button>
          <button onClick={() => navigate('/login')} className="bg-white hover:bg-gray-200 text-black border border-b-2 font-bold py-3 px-6 rounded">
            Login
            &nbsp;
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
