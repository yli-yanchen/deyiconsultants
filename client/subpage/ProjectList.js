import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PrivateLayout from '../components/PrivateLayout';
import FromModal from '../components/FormModal';
import axios from '../hook/axios';

const ProjectList = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };
  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleCreateProject = async () => {
    openForm();
  };

  return (
    <PrivateLayout>
      <div className='mt-8 mx-16 mb-4 flex flex-row justify-end items-center'>
        <button
          onClick={handleCreateProject}
          className='h-10 w-32 flex justify-center items-center rounded-full border indent bg-priblue text-base font-bold text-priwhite'
        >
          New Project
        </button>
      </div>
      <div className='h-full'></div>
      {isFormOpen && <FromModal setModal={setIsFormOpen} />}
    </PrivateLayout>
  );
};

export default ProjectList;
