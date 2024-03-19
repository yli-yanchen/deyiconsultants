import React, { Component, useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import ".././client/index.css";

import Navigation from "./components/Navigation.jsx";
import Login from "./subpage/Login.js";
import Home from "./subpage/Home.js";
import About from "./subpage/About.js";
import Expertice from "./subpage/Expertice.js";
import Project from "./subpage/Project.js";
import Contact from "./subpage/Contact.js";
import Signup from "./subpage/Signup.js";
import Profile from "./subpage/Profile.js";
import Unauthorized from "./subpage/Unauthorized.js";
import RequiredAuth from "./components/RequiredAuth.jsx";
import ProjectList from "./subpage/ProjectList.js";
import PrivateNav from "./components/PrivateNav.jsx";

const RoutesWithNavigation = () => {
  return (
    <div>
      <Navigation />
      <Outlet /> {/* Render child routes here */}
    </div>
  );
};

const App = () => {
  const ROLE = {
    ADMIN: "admin",
    BASIC: "basic",
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<RoutesWithNavigation />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/expertice" element={<Expertice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* considuer to have a page of unauthorized */}
        </Route>

        <Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Route>

        <Route path="/profile" element={<RequiredAuth />}>
          <Route element={<PrivateNav />} >
            <Route index element={<Profile />} />
            <Route path="/projectlist" element={<ProjectList />} />
          </Route>
        </Route>

        {/* <Route path="/profile/project" element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
        } /> */}
        {/* <Route path="/profile/admin/:id" element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
        } /> */}
      </Routes>
    </main>
  );
};

export default App;
