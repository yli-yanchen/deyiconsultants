import React, { useState } from 'react';

const FromModal = ({ setModal }) => {
  const [proDetail, setProDetail] = useState({
    ID: '',
    Name: '',
    Address: '',
    City: '',
    Client: '',
    ProjectType: '',
    StartDate: '',
    Status: '',
    ContractAmount: '',
    PaidAmount: '',
    BalanceAmount: '',
  });

  const handleChange = (e) => {
    const {
      id,
      name,
      address,
      city,
      client,
      projectType,
      startDate,
      status,
      contractAmount,
      paidAmount,
      balanceAmount,
    } = e.target;

    setProDetail({
      ...proDetail,
      ID: id,
      Name: name,
      Address: address,
      City: city,
      Client: client,
      ProjectType: projectType,
      StartDate: startDate,
      Status: status,
      ContractAmount: contractAmount,
      PaidAmount: paidAmount,
      BalanceAmount: balanceAmount,
    });
  };

  const handleCancelForm = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(proDetail);
    setModal(false);
  };

  const inputStyle =
    'h-4/6 w-2/3 p-2 m-2 border border-gray-300 align-middle items-center rounded';

  return (
    <div className='h-4/6 flex flex-col items-center justify-center rounded-lg'>
      <form
        onSubmit={handleSubmit}
        className='h-4/6 w-1/2 flex flex-col align-middle items-center bg-priblue text-priwhite font-normal text-sm space-y-4 overflow-y-auto rounded-3xl'
      >
        <h2 className='text-lg font-base mt-8 mb-4'> Create New Project </h2>
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
          placeholder='Name'
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
          name='Client'
          placeholder='Client'
          value={proDetail.Client}
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
          name='PaidAmount'
          placeholder='Paid Amount'
          value={proDetail.PaidAmount}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          type='number'
          name='BalanceAmount'
          placeholder='Balance Amount'
          value={proDetail.BalanceAmount}
          onChange={handleChange}
          className={inputStyle}
        />
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
