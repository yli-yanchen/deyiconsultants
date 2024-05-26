import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { GoogleLogin } from '@react-oauth/google';
import axios from '../hook/axios';
import homeImage from '../../docs/assets/images/homepagePicNoText.png';

const Login = () => {
  const navigate = useNavigate();
  const clientID = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const emailRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLabel, setErrorLabel] = useState('');
  const [_, setCookies] = useCookies(['accessToken']);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reload the page
    console.log('>>> current email from user input: ', emailRef.current.value);

    try {
      const loginres = await axios.post('/api/login', {
        email: email,
        password: password,
      });
      console.log('>>> this is from loginres: ', loginres);

      if (loginres.data && loginres.data.err) {
        setErrorLabel(loginres.data.err);
        return;
      } else if (loginres && loginres.data.user) {
        const userid = loginres?.data?.user._id.toString();
        setCookies('accessToken', loginres.data.accessToken);
        window.localStorage.setItem('userid', userid);
        window.localStorage.setItem('accessToken', loginres.data.accessToken);
        navigate('/Dashboard');
        // navigate(from, { replace: true }); // go back from where you come.
      } else {
        setErrorLabel('Unexpected response from the server.');
      }
    } catch (err) {
      console.error('Error in login handleSubmit() components:', err);
      setErrorLabel('An error occurred. Please try again later.');
    }
  };

  const clicktoSignup = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  const forgotPassword = (e) => {
    e.preventDefault();
    console.log('I forgot the password');
  };

  const onSuccess = async (res) => {
    console.log('Login Success! Response: ', res);
  };

  const onFailure = (res) => {
    console.log('Login Fails. res: ', res);
  };

  return (
    <form
      className='h-screen w-50 flex flex-col items-center justify-center'
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col items-center justify-center'>
        <h3 className='-mt-20 mb-2.5 gap-2 text-priblue font-extrabold text-5xl'>
          Welcome Back!
        </h3>
        <div className='w-72 h-2 text-5xl mb-3 mt-3 rounded-lg bg-priwhite'></div>
      </div>

      <input
        type='email'
        id='email'
        placeholder='Email'
        ref={emailRef}
        onChange={(e) => setEmail(e.target.value)}
        className={'inputBox'}
        value={email}
        autoComplete='on'
        required
      />

      <input
        type='password'
        id='password'
        placeholder='Password'
        className={'inputBox'}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      {errorLabel && (
        <label className='m-0 text-sm text-priblue '>
          {JSON.stringify(errorLabel)}
        </label>
      )}

      <div className='flex items-center m-2'>
        <button
          type='button'
          className={'submitBtnBlue'}
          onClick={handleSubmit}
        >
          Log In
        </button>
      </div>

      <div className='mt-2 mb-4 text-priblue text-sm items-center'>
        Forgot Password?
        <span
          className='text-priwhite cursor-pointer indent-2'
          onClick={forgotPassword}
        >
          <a href='/about'>Click Here!</a>
        </span>
      </div>

      <div id='goolgeSignin'>
        <GoogleLogin
          clientID={clientID}
          buttonText='Login'
          onSuccess={onSuccess}
          onFailure={onFailure}
          isSigned={true}
        />
      </div>

      <div className='w-72 h-0.5 text-5xl mb-2 mt-6 rounded-lg bg-priwhite'></div>
      <div className='flex items-center m-2'>
        <button
          type='button'
          className={'submitBtnWhite'}
          onClick={clicktoSignup}
        >
          Create New Account
        </button>
      </div>
    </form>
  );
};

export default Login;
