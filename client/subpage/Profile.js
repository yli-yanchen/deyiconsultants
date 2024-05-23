import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../hook/axios';

import PrivateLayout from '../components/PrivateLayout';

const Profile = () => {
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
        console.log(getuserdata.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleSubmit = async (e) => {};

  const handleUserDataChange = (e) => {
    setCurrUser({
      ...currUser,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyles =
    'h-5/6 w-96 p-2 mt-2 mb-4 border border-priwhite align-middle items-center rounded text-priblue bg-secwhite';
  const labelStyles = '';

  return (
    <PrivateLayout>
      <div className='h-full w-1/2 flex flex-col justify-center items-center mx-auto text-priblue border-4 border-priblue shadow-2xl shadow-secwhite rounded-2xl my-10 mt-20 mb-24'>
        <h2 className='text-2xl font-bold mt-8 mb-4'> </h2>
        <form onSubmit={handleSubmit}>
          <div className={labelStyles}>First Name:</div>
          <div>
            <input
              className={inputStyles}
              name='firstName'
              type='text'
              placeholder={currUser.firstName}
              onChange={handleUserDataChange}
            />
          </div>

          <div className={labelStyles}>Last Name:</div>
          <div>
            <input
              className={inputStyles}
              name='lastName'
              type='text'
              placeholder={currUser.lastName}
              onChange={handleUserDataChange}
            />
          </div>

          <div className={labelStyles}>Email:</div>
          <div>
            <input
              className={inputStyles}
              name='email'
              type='email'
              onChange={handleUserDataChange}
            />
          </div>

          <div className={labelStyles}>Password:</div>
          <div>
            <input
              className={inputStyles}
              name='password'
              type='password'
              onChange={handleUserDataChange}
            />
          </div>

          <div className={labelStyles}>Address:</div>
          <div>
            <input
              className={inputStyles}
              name='address'
              type='text'
              onChange={handleUserDataChange}
            />
          </div>

          <div className='flex flex-col justify-center items-center'>
            <button
              className='w-fit align-center justify-center bg-priblue text-priwhite text-white border border-priwhite rounded-lg my-10 mt-8 mb-10 p-2'
              type='submit'
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </PrivateLayout>
  );
};

export default Profile;
