import React from "react";
import {Route , Routes} from  'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs.jsx";




function Allroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
         <Route path="/contactUs" element={<ContactUs/>}/>
         <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}


export default Allroutes;