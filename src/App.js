import React from "react";
import SignUpForm from "./Components/SignUpForm";
import LogIn from "./Components/LogIn";
import { Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<SignUpForm/>}  />
        <Route path = "/login" element = {<LogIn/>} />
        <Route path="/HomePage" element = {<HomePage/>}/>
      </Routes>
    </div>
  );
}
