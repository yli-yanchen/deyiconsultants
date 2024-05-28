import React, { useState } from 'react';
import axios from '../hook/axios';
import useAuth from '../hook/useAuth';

const FromModal = ({ setModal }) => {
  const { user } = useAuth();
  const [errorLabel, setErrorLabel] = useState(<></>);
  const [proDetail, setProDetail] = useState({
    ID: '',
    Name: '',
    Address: '',
    City: '',
    ClientFirstName: '',
    ClientLastName: '',
    ProjectType: '',
    StartDate: '',
    EndDate: '',
    Status: '',
    ContractAmount: '',
    Reimbersement: '',
    PaidAmount: '',
  });

  const handleChange = (e) => {
    setProDetail({
      ...proDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelForm = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('>>> new project information: ', proDetail);
    console.log('>>> user from useAuth in FormModel: ', user);

    try {
      const newProject = await axios.post('/api/profile/newproject', {
        proDetail,
        user: {
          id: user._id,
          role: user.role,
        },
      });

      if (newProject.data && newProject.data.err) {
        setErrorLabel(newProject.data.err);
        console.log('>>> error: ', newProject.data.err);
        return;
      } else if (newProject && newProject.data.project) {
        console.log('>>> new project: ', newProject.data.project);
      }
    } catch (err) {
      console.log(
        '>>> Error in axios.post(/project/new): ',
        err.response?.data || err.message
      );
      setErrorLabel('An error occurred. Please try again later.');
    }

    setModal(false);
  };

  const inputStyle =
    'h-4/6 w-2/3 p-2 m-2 border border-priwhite align-middle items-center rounded text-priblue';

  return (
    <div className='h-4/6 flex flex-col items-center justify-center rounded-lg'>
      <form
        onSubmit={handleSubmit}
        className='h-4/6 w-1/2 flex flex-col align-middle items-center bg-priblue text-priwhite font-normal text-sm space-y-4 overflow-y-auto rounded-3xl'
      >
        <h2 className='text-lg font-bold mt-8 mb-4'> Create New Project </h2>
        <input
          type='text'
          name='ID'
          placeholder='ID'
          value={proDetail.ID}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='text'
          name='Name'
          placeholder='Project Name'
          value={proDetail.Name}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='text'
          name='Address'
          placeholder='Address'
          value={proDetail.Address}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='text'
          name='City'
          placeholder='City'
          value={proDetail.City}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='text'
          name='ClientFirstName'
          placeholder='First Name'
          value={proDetail.ClientFirstName}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='text'
          name='ClientLastName'
          placeholder='Last Name'
          value={proDetail.ClientLastName}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='text'
          name='ProjectType'
          placeholder='Project Type'
          value={proDetail.ProjectType}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='date'
          name='StartDate'
          placeholder='Start Date'
          value={proDetail.StartDate}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='date'
          name='EndDate'
          placeholder='End Date'
          value={proDetail.EndDate}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='text'
          name='Status'
          placeholder='Status'
          value={proDetail.Status}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='number'
          name='ContractAmount'
          placeholder='Contract Amount'
          value={proDetail.ContractAmount}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='number'
          name='Reimbersement'
          placeholder='Reimbersement'
          value={proDetail.Reimbersement}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='number'
          name='PaidAmount'
          placeholder='Paid Amount'
          value={proDetail.PaidAmount}
          onChange={handleChange}
          className={inputStyle}
        />
        <label className='text-red-500'>{errorLabel}</label>
        <div className='flex flex-row justify-between mb-24 text-base font-base p-4 pb-8'>
          <button
            type='button'
            onClick={handleCancelForm}
            className='w-24 bg-priblue text-white p-2 mx-8 border border-priwhite rounded-lg'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='w-24 bg-priwhite text-white p-2 mx-8 border border-priwhite rounded-lg text-priblue'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FromModal;
