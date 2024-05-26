import { useEffect } from 'react';
import React, { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Loading from '../subpage/Loading';

const RequiredAuth = () => {
  const location = useLocation();
  const { auth, loading, user } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  useEffect(() => {
    console.log(
      '>>> auth, loading, user in requiredAuth: ',
      auth,
      loading,
      user
    );
  });

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  );
};

export default RequiredAuth;
