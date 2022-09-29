import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='signup-navbar'>
        <NavLink to='/' exact={true} activeClassName='active' style={{ color: 'rgb(7, 96, 7)', textDecoration: 'none' }}>
          StockY
        </NavLink>
      </div>
      <div className='signup-whole-page'>
        <div className='login-form-container'>
          <div className='login-form-top-buttons-container'>
            <div className='signup-form-top-lines'>
              <div className='login-form-left-lines'>
                <NavLink to='/sign-up' exact={true} activeClassName='active'>
                  <button className='login-form-top-signup-button'>Sign Up </button>
                </NavLink>
              </div>
              <p> </p>
              <div className='login-form-right-lines'>
                <NavLink to='/login' exact={true} activeClassName='active'>
                  <button className='login-form-top-login-button'> Login </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className='signup-form-body'>
            <form onSubmit={onLogin}>
              <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
              <div className='signup-form-body-container'>
                <input
                  className='signup-form-body-boxes'
                  name='email'
                  type='text'
                  placeholder='   Email *'
                  value={email}
                  onChange={updateEmail}
                  required={true}
                />
              </div>
              <div className='signup-form-body-container'>
                <input
                  className='signup-form-body-boxes'
                  name='password'
                  type='password'
                  placeholder='   Password *'
                  value={password}
                  onChange={updatePassword}
                  required={true}
                />
              </div>
              <div className='signup-form-body-container'>
                <button className='signup-form-signup-button' type='submit'>Login</button>
              </div>
              <div className='signup-form-body-container'>
                <button className='signup-form-signup-button' onClick={(e) => {
                  setEmail('demouser@gmail.com');
                  setPassword('password')
                }}>Log In as Demo User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
