import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import ".././client/index.css";

import Login from "./subpage/Login";
import Home from "./subpage/Home";
import About from "./subpage/About.js";
import Expertice from "./subpage/Expertice";
import Procedure from "./subpage/Procedure.js";
import Contact from "./subpage/Contact";
import Signup from "./subpage/Signup";
import Profile from "./subpage/Profile";
import ProjectList from "./subpage/ProjectList";
import Unauthorized from "./subpage/Unauthorized";

import RequiredAuth from "./components/RequiredAuth";
import Navigation from "./components/Navigation";

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
          <Route path="/Procedure" element={<Procedure />} />
          <Route path="/expertice" element={<Expertice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Route>

        <Route element={<RequiredAuth />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/projectlist" element={<ProjectList />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
