import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import '.././client/index.css';

import Login from './subpage/Login';
import Home from './subpage/Home';
import About from './subpage/About.js';
import Expertice from './subpage/Expertice';
import Procedure from './subpage/Procedure.js';
import Contact from './subpage/Contact';
import Signup from './subpage/Signup';
import Dashboard from './subpage/Dashboard';
import Profile from './subpage/Profile';
import ProjectList from './subpage/ProjectList';
import Unauthorized from './subpage/Unauthorized';

import Footer from './components/Footer';
import RequiredAuth from './components/RequiredAuth';
import Navigation from './components/Navigation';
import Appoitment from './components/Appoitment.jsx';

const RoutesWithNavigation = () => {
  return (
    <div>
      <Navigation />
      <Outlet /> {/* Render child routes here */}
      <Footer />
    </div>
  );
};

const App = () => {
  const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic',
  };

  return (
    <main>
      <Routes>
        <Route path='/' element={<RoutesWithNavigation />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/procedure' element={<Procedure />} />
          <Route path='/expertice' element={<Expertice />} />
          <Route path='/appoitment' element={<Appoitment />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>

        <Route>
          <Route path='/unauthorized' element={<Unauthorized />} />
        </Route>

        <Route element={<RequiredAuth />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/projectlist' element={<ProjectList />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
