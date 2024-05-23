import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box } from '@mui/material';

import PrivateLayout from '../components/PrivateLayout';
import axios from '../hook/axios';

const Dashboard = () => {
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
    <div>
      <PrivateLayout>
        <div className='mt-8 mx-16 mb-4 flex flex-row justify-between items-center'>
          <h2 className='font-bold text-priblue items-start text-2xl'>
            Overview
          </h2>
          <select className='h-8 items-center place-content-end text-priblue w-40 rounded-full border border-gray-200 indent-2 bg-opacity-25 bg-thdwhite text-base'>
            <option value='last-week'>Last Week</option>
            <option value='last-30-days'>Last 30 days</option>
            <option value='last-180-days'>Last 180 days</option>
            <option value='last-year'>Last Year</option>
          </select>
        </div>

        <div className='mx-16 mt-8 h-64 flex flex-row grid-cols-3 justify-between items-stretch'>
          <Box className='flex flex-col justify-start items-center bg-priblue w-1/3 bg-opacity-0 rounded-lg shadow-xl p-4 mr-6'>
            <p className=' text-priblue w-48 bg-priwhite rounded p-2 text-center h-10 font-bold'>
              Incoming Appoitment
            </p>
          </Box>
          <Box className='flex flex-col justify-start items-center bg-priblue w-1/3 bg-opacity-0 rounded-lg shadow-xl p-4 mx-6'>
            <p className='text-priblue w-28 bg-priwhite rounded p-2 text-center font-bold h-10'>
              Notification
            </p>
            <p className='pt-4 overflow-y-auto'>
              Project ID: 24-124 ADU Permit Package is already submitted. Please
              check the new status for the project.
            </p>
          </Box>
          <Box className='flex flex-col justify-start items-center  bg-priblue bg-opacity-0 w-1/3 rounded-lg shadow-xl p-4 ml-6'>
            <p className='text-priblue w-36 bg-priwhite rounded p-2 text-center font-bold h-10'>
              Current Balance
            </p>
            <p className='pt-12 text-4xl font-extrabold text-priblue'>$3,000</p>
            <div className='mt-auto flex w-full justify-between'>
              <button className='w-32 text-priblue bg-white rounded border border-priblue px-4 py-2'>
                Details
              </button>
              <button className='w-32 bg-priblue font-bold rounded text-priwhite px-4 py-2'>
                Pay Now
              </button>
            </div>
          </Box>
        </div>

        <div className='mt-8 mx-16 mb-4 flex flex-row justify-between items-center'>
          <h2 className='font-bold text-priblue items-start text-2xl'>
            Project List
          </h2>
          <table className='w-2/3'></table>
        </div>
      </PrivateLayout>
    </div>
  );
};

export default Dashboard;
