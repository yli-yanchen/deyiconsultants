import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./stylesheets/styles.css";

import Navigation from "./components/Navigation.js";
import Signup from "./subpage/Signup.js";
import Home from "./subpage/Home.js";
import About from "./subpage/About.js";
import Expertice from "./subpage/Expertice.js";
import Project from "./subpage/Project.js";
import Contact from "./subpage/Contact.js";


const App = () => {
    return (
      <div className="router">
        <React.StrictMode>
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/expertice" element={<Expertice />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Router>
        </React.StrictMode>
      </div>
    );
}

// const App = () => {
//   let component;
//   switch (window.location.pathname) {
//     case "/" || "/home":
//       component = <Home />;
//       break;

//     case "/about":
//       component = <About />;
//       break;

//     case "/expertice":
//       component = <Expertice />;
//       break;

//     case "/project":
//       component = <Project />;
//       break;

//     case "/contact":
//       component = <Contact />;
//       break;

//     case "/signup":
//       component = <Signup />;
//       break;
//   }

//   return (
//     <div>
//       <Navigation />
//       {component}
//     </div>
//   );
// };

export default App;
