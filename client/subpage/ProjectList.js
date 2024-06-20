import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PrivateLayout from '../components/PrivateLayout';
import FromModal from '../components/FormModal';
import axios from '../hook/axios';
import useAuth from '../hook/useAuth';

const ProjectList = () => {
  const navigate = useNavigate();
  // const { auth, loading, user } = useAuth();
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const openForm = () => {
    setIsFormOpen(true);
  };
  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleClickNewProject = async (e) => {
    e.preventDefault();
    openForm();
  };

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get('/api/profile/getproject');
        console.log('*** project from the data: ', response.data);
      } catch (err) {
        console.error('*** cannot get the project list', err);
      }
    };

    fetchProjectData();
  }, []);

  return (
    <PrivateLayout>
      {currUser.role === 'admin' && (
        <>
          <div className='mt-8 mx-16 mb-4 flex flex-row justify-end items-center'>
            <button
              onClick={handleClickNewProject}
              className='h-10 w-32 flex justify-center items-center rounded-full border indent bg-priblue text-base font-bold text-priwhite'
            >
              New Project
            </button>
          </div>
          <div className='h-full'></div>
          {isFormOpen && <FromModal setModal={setIsFormOpen} />}{' '}
        </>
      )}
    </PrivateLayout>
  );
};

export default ProjectList;
