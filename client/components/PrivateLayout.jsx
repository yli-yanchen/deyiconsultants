import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../hook/axios';
import PrivateNav from './PrivateNav';

const PrivateLayout = ({ children }) => {
  const navigate = useNavigate();
  const [currUser, setCurrUser] = useState('');

  useEffect(() => {
    const userid = localStorage.getItem('userid');
    const fetchUserData = async () => {
      try {
        const getuserdata = await axios.get('/api/profile/getuser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userid}`,
          },
        });
        setCurrUser(getuserdata.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <>
      <PrivateNav user={currUser} />
      <div>{children}</div>
      <footer className=' align-bottom  bottom-2 right-2 text-end mr-6 mb-2 mt-6 text-xs'>
        Copyright ©2024 DEYI Consultants, Inc. All RIGHTS RESERVED.{' '}
      </footer>
    </>
  );
};

export default PrivateLayout;
