import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ".././client/index.css";

import Navigation from "./components/Navigation.js";
import Login from "./subpage/Login.js";
import Home from "./subpage/Home.js";
import About from "./subpage/About.js";
import Expertice from "./subpage/Expertice.js";
import Project from "./subpage/Project.js";
import Contact from "./subpage/Contact.js";
import Signup from "./subpage/Signup.js";


const App = () => {
    return (
      <div className="h-screen overflow-hidden">
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/expertice" element={<Expertice />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Router>
      </div>
    );
}

export default App;
