import React, { useState } from 'react';
import logo from "../src/image1.png";
import illus from "../src/image2.png";
import mainlanding from "../src/main-landing.jpeg"
import { useNavigate } from 'react-router-dom';

export default function Signup() {
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

  const Footer = () => {
    return (
      <footer className="text-white py-20 text-center">
        <div className="flex justify-center mb-2">
          <a href="#" className="text-black font-semibold hover:text-gray-700 px-4">
            Privacy Policy
          </a>
          <a href="#" className="text-black font-semibold hover:text-gray-700 px-4">
            Terms of Use
          </a>
          <a href="#" className="text-black font-semibold hover:text-gray-700 px-4">
            Cookie Preferences
          </a>
        </div>
        <p className="text-sm text-gray-700 font-medium">
          Krutrim Cloud, Inc. or its affiliates. All rights reserved.
        </p>
      </footer>
    );
  };

  return (
    <>
     <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="Logo" className="mx-auto mt-10" style={{ width: '300px', height: 'auto' }}/>
      <div className="w-full max-w-4xl mt-6 px-6">
        {currentPage === 1 && (
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1 py-6 px-3 border-r border-gray-300">
              <h2 className="text-4xl font-bold mb-4 ">Revolutionising Workloads with Krutrim Cloud</h2>
              <img src={illus} alt="Text and Image" />
            </div>
            <div className="col-span-1 py-6 px-3">
              <form className="bg-white rounded p-5 mb-4">
                <h2 className="text-2xl font-semibold mb-4">Sign up for Our Services (1/2)</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="organization">
                    Company Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="organization" type="text" placeholder="Company Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="Confirm Password" />
                </div>
                <div className="flex justify-between">
                  <button className="bg-black hover:bg-gray-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={nextPage}>
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {currentPage === 2 && (
        <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1 py-6 px-3 border-r border-gray-300">
          <h2 className="text-4xl font-bold mb-4">Revolutionising Workloads with Krutrim Cloud</h2>
          <img src={illus} alt="Text and Image" className="w-1/2" />
        </div>
        <div className="col-span-1 py-6 px-3">
          <form className="bg-white rounded p-5 mb-4">
            <h2 className="text-2xl font-semibold mb-4">Sign up for Our Services (2/2)</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Address
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Address" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="organization">
                Phone Number
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="organization" type="text" placeholder="Phone Number" />
            </div>
            
            <div className="flex justify-between">
                  <button className="bg-black m-2 hover:bg-gray-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={prevPage}>
                    Back
                  </button>
                  <button onClick={() => navigate('/signup_success')} className="bg-black m-2 hover:bg-gray-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit
                  </button>
                </div>
          </form>
        </div>
      </div>
        )}
      </div>
    </div>

    <Footer />

    </>
   
  );
}
