import React, { createContext, useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import axios from '../hook/axios';

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userid = localStorage.getItem('userid');
    if (!userid) {
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const getuserdata = await axios.get('/api/profile/getuser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userid}`,
          },
        });
        setAuth(true);
        setUser(getuserdata.data);
        console.log('AuthProvider state:', { auth, loading, user });
      } catch (error) {
        setAuth(false);
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
