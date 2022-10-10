import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  useEffect(() => {
    const errValidation = []

    if (firstName.length > 25 || firstName.length < 2) errValidation.push('Must be between 2 and 25 characters.')
    if (lastName.length > 25 || lastName.length < 2) errValidation.push('Must be between 2 and 25 characters.')
    if (!email.includes('@') || !email.includes('.')) errValidation.push('Invalid Email')
    if (password.length > 25 || password.length < 6) errValidation.push('Must be between 6 and 30 characters.')
    // if (password !== repeatPassword) errValidation.push('Passwords must Match')

    setErrors(errValidation)

  }, [firstName, lastName, email, password])





  const onSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitted(true)

    if (errors.length > 0) return

    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Passwords must Match'])
    }
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
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
        <div className='signup-form-container'>
          <div className='signup-form-top-buttons-container'>
            <div className='signup-form-top-lines'>
              <div className='signup-form-left-lines'>
                <NavLink to='/sign-up' exact={true} activeClassName='active'>
                  <button className='signup-form-top-signup-button'>Sign Up </button>
                </NavLink>
              </div>
              <p> </p>
              <div className='signup-form-right-lines'>
                <NavLink to='/login' exact={true} activeClassName='active'>
                  <button className='signup-form-top-login-button'> Login </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='signup-form-body'>
            <form onSubmit={onSignUp}>
              <div className='login-form-errors'>
                {isSubmitted && errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
              <div className='signup-form-body-container'>
                <input
                  className='signup-form-body-boxes'
                  type='text'
                  name='firstName'
                  onChange={updateFirstname}
                  value={firstName}
                  placeholder={"   First Name *"}
                  required={true}

                >
                </input>
              </div>
              <div className='signup-form-body-container'>
                <input
                  className='signup-form-body-boxes'
                  type='text'
                  name='lastName'
                  onChange={updateLastname}
                  value={lastName}
                  placeholder={"   Last Name *"}
                  required={true}

                ></input>
              </div>
              <div className='signup-form-body-container'>
                <input
                  className='signup-form-body-boxes'
                  type='text'
                  name='email'
                  onChange={updateEmail}
                  value={email}
                  placeholder={"   Email *"}
                  required={true}
                ></input>
              </div>
              <div className='signup-form-body-container'>
                <input
                  className='signup-form-body-boxes'
                  type='password'
                  name='password'
                  onChange={updatePassword}
                  value={password}
                  placeholder={"  Password *"}
                  required={true}
                ></input>
              </div>
              <div className='signup-form-body-container'>
                <input
                  className='signup-form-body-boxes'
                  type='password'
                  name='repeat_password'
                  onChange={updateRepeatPassword}
                  value={repeatPassword}
                  placeholder={"  Repeat Password *"}
                  required={true}
                ></input>
              </div>
              <div className='signup-form-body-container'>
                <button type='submit' className='signup-form-signup-button'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
