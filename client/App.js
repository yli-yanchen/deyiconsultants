import React, { Component, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./stylesheets/styles.css";

import Navigation from "./components/Navigation.js";
import Signup from "./subpage/Signup.js";
import Home from "./subpage/Home.js";
import About from "./subpage/About.js";
import Expertice from "./subpage/Expertice.js";
import Project from "./subpage/Project.js";
import Contact from "./subpage/Contact.js";


const App = () => {

    const homeRouter = createBrowserRouter([
      {
        path: "/" || "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/expertice",
        element: <Expertice />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ]);

    return (
      <div className="router">
        <main>
            <Navigation />
            <RouterProvider router={homeRouter} />
        </main>
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
