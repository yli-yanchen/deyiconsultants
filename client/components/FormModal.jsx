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
    IncomingAmount: '',
    Engineer: {
      Name: '',
      OutcomingAmount: '',
      Deadline: '',
    },
  });

  const handleChange = (e) => {
    setProDetail({
      ...proDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleEngineerChange = (e) => {
    const { name, value } = e.target;
    setProDetail({
      ...proDetail,
      Engineer: {
        ...proDetail.Engineer,
        [name]: value,
      },
    });
  };

  const handleCancelForm = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProject = await axios.post('/api/profile/newproject', {
        proDetail,
        user: {
          id: user._id,
          role: user.role,
        },
      });
      console.log('>>> newProject: ', newProject);

      if (newProject.data && newProject.data.err) {
        setErrorLabel(newProject.data.err.message);
        console.log('>>> error: ', newProject.data.err.message);
        return;
      }

      setModal(false);
      console.log('>>> new project: ', newProject.data.project);
    } catch (err) {
      const errorMessage = err.response?.data?.err || err.message;
      console.log('>>> Error in axios.post(/project/new): ', errorMessage);
      setErrorLabel(errorMessage);
    }
  };

  const inputStyle =
    'h-4/6 w-2/3 p-2 m-2 border border-priwhite align-middle items-center rounded text-priblue';

  return (
    <div className='h-4/6 flex flex-col items-center justify-center rounded-lg'>
      <form
        onSubmit={handleSubmit}
        className='h-4/6 w-1/2 flex flex-col align-middle items-center bg-priblue text-priwhite font-normal text-sm space-y-4 overflow-y-auto rounded-3xl'
      >
        <h2 className='text-lg font-bold mt-8 mb-2'> Create New Project </h2>
        <h3 className='text-md font-bold mt-2'>Project Details</h3>
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
        <h3 className='text-md font-bold mt-4'>Payment Details</h3>
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
          name='IncomingAmount'
          placeholder='Client Paid Amount'
          value={proDetail.IncomingAmount}
          onChange={handleChange}
          className={inputStyle}
        />
        <h3 className='text-md font-bold mt-4'>Engineer Details</h3>
        {/* should be in the select list */}
        <input
          type='text'
          name='Name'
          placeholder='Engineer Name'
          value={proDetail.Engineer.Name}
          onChange={handleEngineerChange}
          className={inputStyle}
        />
        <input
          type='number'
          name='OutcomingAmount'
          placeholder='Outgoing Amount'
          value={proDetail.Engineer.OutcomingAmount}
          onChange={handleEngineerChange}
          className={inputStyle}
        />
        <input
          type='date'
          name='Deadline'
          placeholder='Deadline'
          value={proDetail.Engineer.Deadline}
          onChange={handleEngineerChange}
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FromModal;
