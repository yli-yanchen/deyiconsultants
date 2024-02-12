import React, { Component, useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

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
import Unauthorized from "./subpage/Unauthorized.js";
import RequiredAuth from "./components/RequiredAuth.js";

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

        <Route element={<RequiredAuth allowedRole={[ROLE.BASIC]} />}>
          <Route path="/basic/:id" element={<Profile />} />
        </Route>

        <Route element={<RequiredAuth allowedRole={[ROLE.ADMIN]} />}>
          <Route path="/admin/:id" element={<Profile />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
