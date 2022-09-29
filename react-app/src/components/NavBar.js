import './navbar.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react'
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user)

  const profileMenu = () => {

    let loginButtons
    
    if (!sessionUser) {
      loginButtons = (
        <>
          <div>
            <NavLink to='/login' exact={true} activeClassName='active'>
              <button className='navbar-login'> Login </button>
            </NavLink>
          </div>
          <div style={{ marginLeft: '2px' }}>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              <button className='navbar-signup'>Sign Up </button>
            </NavLink>
          </div>
        </>
      )
    } else {

      loginButtons = (

        <div className='dropdown-container'>
          <NavLink to='/user' exact={true} activeClassName='active'>
            <i class="fa-regular fa-circle-user"></i>
          </NavLink>
          <div className='dropdown-menu'>
            <div className='dropdown-item-container'>
              <div className='dropdown-item-icon-container'>
                <i class="fa-solid fa-box"></i>
              </div>
              <div className='dropdown-item-text-container'>
                <div className='dropdown-item-text-top'>
                  Buying
                </div>
                <div className='dropdown-item-text-bottom'>
                  Completed Orders, Purchase-history
                </div>
              </div>
            </div>
            <div className='dropdown-item-container'>
              <div className='dropdown-item-icon-container' style={{ fontSize: "25px" }}>
                $
              </div>
              <div className='dropdown-item-text-container'>
                <div className='dropdown-item-text-top'>
                  Selling
                </div>
                <div className='dropdown-item-text-bottom'>
                  Completed Orders, Purchase-history
                </div>
              </div>
            </div>
            <div className='dropdown-item-container'>
              <div className='dropdown-item-icon-container'>
                <i style={{ fontSize: "25px" }} class="fa-regular fa-plus"></i>
              </div>
              <div className='dropdown-item-text-container'>
                <div className='dropdown-item-text-top'>
                  Following
                </div>
                <div className='dropdown-item-text-bottom'>
                  Products you're watching
                </div>
              </div>
            </div>
            <div className='dropdown-item-container'>
              <div className='dropdown-item-icon-container'>
                <i style={{ fontSize: "20px" }} class="fa-solid fa-power-off"></i>
              </div>
              <div className='dropdown-item-text-container'>
                <LogoutButton />
              </div>
            </div>
          </div>
        </div >
      )
    }

    return (
      <div className='navbar-buttons'>
        {loginButtons}
      </div>
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
            <div className='navbar-right-items'>
              <NavLink to='/' rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                Browse
              </NavLink>
            </div>
            <div className='navbar-right-items'>
              <a href='https://stockx.com/news/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                News
              </a>
            </div>
            <div className='navbar-right-items'>
              <a href='https://stockx.com/help/home' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                Help
              </a>
            </div>
            <div className='navbar-right-items'>
              <a href='https://www.linkedin.com/in/justin-b-kam-4105961a5/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                About
              </a>
            </div>
            <div className='navbar-right-items'>
              <NavLink to='/sell' style={{ textDecoration: 'none', color: 'black' }}>
                Sell
              </NavLink>
            </div>
            {/* {profileMenu()} */}
          </div>
        </div>
      </nav>
  );
}

export default NavBar;
