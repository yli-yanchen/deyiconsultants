import React, { Component, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ".././client/index.css";

import Navigation from "./components/Navigation.js";
import Login from "./subpage/Login.js";
import Home from "./subpage/Home.js";
import About from "./subpage/About.js";
import Expertice from "./subpage/Expertice.js";
import Project from "./subpage/Project.js";
import Contact from "./subpage/Contact.js";
import Signup from "./subpage/Signup.js";
import Profile from "./subpage/Profile.js";
import RequiredAuth from "./components/RequiredAuth.js";

const App = () => {
  return (
    <div className="h-screen overflow-hidden">
      {/* <Navigation />
      <Routes>
        // <Route path="/" element={<Home />} />
        // <Route path="/about" element={<About />} />
        // <Route path="/project" element={<Project />} />
        // <Route path="/expertice" element={<Expertice />} />
        // <Route path="/contact" element={<Contact />} />
        // <Route path="/login" element={<Login />} />
        // <Route path="/signup" element={<Signup />} />
      </Routes> */}
      <Navigation />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/expertice" element={<Expertice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* considuer to have a page of unauthorized */}

          {/* Protect these routes */}
          <Route element={<RequiredAuth />}>
            <Route path="/profile">
              <Route path=":id" element={<Profile />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
