import React, {useState, useEffect} from 'react';
import {Routes, Route, Navigate, Link } from 'react-router-dom'
import Home from "./Home";
import Signup from './Signup';
import Login from './Login';
import SignupSuccess from './SignupSuccess';
import LoginSuccess from './LoginSuccess';


export default function Router() {
    return (
        <>
        
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup_success" element={<SignupSuccess />}></Route>
            <Route exact path="/login_success" element={<LoginSuccess />}></Route>
            
        </Routes>
        </>
    )
}