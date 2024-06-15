import React, { createContext, useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import axios from '../hook/axios';
import { useCookies } from 'react-cookie';

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
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

  useEffect(() => {
    const clearUserData = () => {
      // Remove all cookies
      const allCookies = document.cookie.split(';');
      allCookies.forEach((cookie) => {
        const cookieName = cookie.split('=')[0].trim();
        removeCookie(cookieName);
      });

      // Clear local storage
      window.localStorage.removeItem('userid');
      window.localStorage.removeItem('accessToken');
    };

    window.addEventListener('beforeunload', clearUserData);

    return () => {
      window.removeEventListener('beforeunload', clearUserData);
    };
  }, [removeCookie]);

  return (
    <AuthContext.Provider value={{ auth, loading, user, setAuth, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
