import React, { Component, useState, useEffect } from "react";
import Navigation from "./components/Navigation.js";
import "./stylesheets/styles.css";

import Signup from "./subpage/Signup.js";
import Home from "./subpage/Home.js";
import About from "./subpage/About.js";
import Expertice from "./subpage/Expertice.js";
import Project from "./subpage/Project.js";
import Contact from "./subpage/Contact.js";
import { Route, Routes } from "react-router-dom";

// const App = () => {
//   return (
//     <>
//       <h1>this is APP page</h1>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/expertice" element={<Expertice />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </>
//   );
// }

const App = () => {
  let component;
  switch (window.location.pathname) {
    case "/" || "/home":
      component = <Home />;
      break;

    case "/about":
      component = <About />;
      break;

    case "/expertice":
      component = <Expertice />;
      break;

    case "/project":
      component = <Project />;
      break;

    case "/contact":
      component = <Contact />;
      break;

    case "/signup":
      component = <Signup />;
      break;
  }

  return (
    <div>
      <Navigation />
      {component}
    </div>
  );
};

export default App;
