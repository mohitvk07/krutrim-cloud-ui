import React, { useState } from 'react';
import logo from "../src/image1.png";
import illus from "../src/image2.png";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted')
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="Logo" className="mx-auto mt-10" style={{ width: '300px', height: 'auto' }}/>
      <div className="w-full max-w-4xl mt-6 px-6">
       
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1 py-6 px-3 border-r border-gray-300">
              <h2 className="text-4xl font-bold mb-4">Revolutionising Workloads with Krutrim Cloud</h2>
              <img src={illus} alt="Text and Image" className="w-1/2" />
            </div>
            <div className="col-span-1 py-6 px-3">
              <form className="bg-white rounded p-5 mb-4">
                <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                    Root User Email Address
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="organization">
                    Organization
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="organization" type="text" placeholder="Company Name" />
                </div>
               
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                </div>
                
                <div className="flex justify-between">
                  <button className="bg-black hover:bg-gray-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => navigate('/login_success')}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        
        
      </div>
    </div>
  );
}
