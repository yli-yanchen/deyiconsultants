import React, { useState, useEffect } from 'react';
import PrivateNav from './PrivateNav';
import useAuth from '../hook/useAuth';
import Loading from '../subpage/Loading';
import Unauthorized from '../subpage/Unauthorized';

const PrivateLayout = ({ children }) => {
  const { auth, loading, user } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!auth) {
    return <Unauthorized />;
  }

  // useEffect(() => {
  //   console.log('>>> user in the PrivateLayout', user);
  // }, []);

  return (
    <>
      <PrivateNav user={user} />
      <div>{children}</div>
      <footer className=' align-bottom  bottom-2 right-2 text-end mr-6 mb-2 mt-6 text-xs'>
        Copyright ©2024 DEYI Consultants, Inc. All RIGHTS RESERVED.{' '}
      </footer>
    </>
  );
};

export default PrivateLayout;
