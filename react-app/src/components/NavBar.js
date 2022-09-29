import './navbar.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react'
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user)
  const [open, setOpen] = useState(false)



  const profileMenu = () => {

    let dropdownMenu = (
      <></>
    )

    let loggedInUser = (
      <></>
    )

    return (
      <></>
    )



  }





  return (
    <nav>
      <div className='whole-navbar'>
        <div className='navbar-logo'>
          <NavLink to='/' exact={true} activeClassName='active'
            style={{ textDecoration: "none", color: "black", fontWeight: "bolder", fontSize: '28px' }}>
            StockY
          </NavLink>
        </div>
        <div className='navbar-searchbar-container'>
          <div className='navbar-searchbar'>
            Seach Bar
          </div>
        </div>
        <div className='navbar-right-container'>
          <div>
            <NavLink to='/' rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
              Browse
            </NavLink>
          </div>
          <div>
            <a href='https://stockx.com/news/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              News
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/justin-b-kam-4105961a5/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              About
            </a>
          </div>
          <div>
            <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
              Sell
            </NavLink>
          </div>
          <div className='navbar-buttons'>
            <div>
              <NavLink to='/login' exact={true} activeClassName='active'>
                <button className='navbar-login'> Login </button>
              </NavLink>
            </div>
            <div>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                <button className='navbar-signup'>Sign Up </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* <LogoutButton /> */}
      </div>
    </nav>
  );
}

export default NavBar;
