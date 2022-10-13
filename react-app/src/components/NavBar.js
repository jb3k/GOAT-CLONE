import './navbar.css'
import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react'
import LogoutButton from './auth/LogoutButton';
import SearchBar from './SearchBar';

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return;
    const closeDropDown = () => {
      setOpen(false)
    }
    document.addEventListener('click', closeDropDown);
    return () => document.removeEventListener("click", closeDropDown);
  }, [open])




  const profileMenu = () => {

    let loginButtons
    let dropdownBar = (
      <>
        <div className='dropdown-menu'>
          <div className='dropdown-item-container'>
            <div className='dropdown-item-icon-container'>
              <i style={{ fontSize: "25px" }} class="fa-regular fa-plus"></i>
            </div>
            {/* <Link to='/users' style={{ textDecoration: 'None' }}> */}
            <a href='https://www.linkedin.com/in/justin-b-kam-4105961a5/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <div className='dropdown-item-text-container'>
                <div className='dropdown-item-text-top' style={{ marginTop: '15px' }}>
                  {/* Following */}
                  LinkedIn
                </div>
                <div className='dropdown-item-text-bottom'>
                  {/* Products you're watching */}
                  About Creator
                </div>
              </div>
            </a>
            {/* </Link> */}
          </div>
          {/* <div className='dropdown-item-container'>
            <div className='dropdown-item-icon-container'>
              <i class="fa-solid fa-box"></i>
            </div>
            <div className='dropdown-item-text-container'>
              <Link to='/users/purchases' style={{ textDecoration: 'None' }}>
                <div className='dropdown-item-text-top'>
                  Buying
                </div>
                <div className='dropdown-item-text-bottom'>
                  Completed Orders, Purchase-history
                </div>
              </Link>
            </div>
          </div> */}
          {/* <div className='dropdown-item-container'>
            <div className='dropdown-item-icon-container' style={{ fontSize: "25px" }}>
              $
            </div>
            <Link to='/users/listings' style={{ textDecoration: 'None', marginTop: '15px' }}>
              <div className='dropdown-item-text-container'>
                <div className='dropdown-item-text-top'>
                  Selling
                </div>
                <div className='dropdown-item-text-bottom'>
                  Completed Orders, Purchase-history
                </div>
              </div>
            </Link>
          </div> */}
          <div className='dropdown-item-container'>
            <div className='dropdown-item-icon-container'>
              <i style={{ fontSize: "25px" }} class="fa-regular fa-plus"></i>
            </div>
            {/* <Link to='/users' style={{ textDecoration: 'None' }}> */}
            <a href='https://github.com/jb3k/StockX-CLONE' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <div className='dropdown-item-text-container'>
                <div className='dropdown-item-text-top' style={{ marginTop: '15px' }}>
                  {/* Following */}
                  GitHub
                </div>
                <div className='dropdown-item-text-bottom'>
                  {/* Products you're watching */}
                  About Creator
                </div>
              </div>
            </a>
            {/* </Link> */}
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
      </>
    )


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
          {/* <NavLink to='/users' exact={true} activeClassName='active'> */}
          <div className='navbar-profile-icon' onClick={() => setOpen(!open)}>
            <i style={{}} class="fa-regular fa-circle-user"></i>
          </div>
          {/* </NavLink> */}
          {open && dropdownBar}

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
    <nav style={{ borderBottom: "1px solid lightgray" }}>
      <div className='whole-navbar'>
        <div className='navbar-logo'>
          <NavLink to='/' exact={true} activeClassName='active'
            style={{ textDecoration: "none", color: "black", fontWeight: "bolder", fontSize: '28px' }}>
            StockY
          </NavLink>
        </div>
        <div className='navbar-searchbar-container'>
          <div className='navbar-searchbar'>
            <i class="fa-solid fa-magnifying-glass" style={{ marginLeft: '8px' }}></i>
            {<SearchBar />}
          </div>
        </div>
        <div className='navbar-right-container'>
          <div className='navbar-right-items'>
            <NavLink to='/' rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
              Browse
            </NavLink>
          </div>
          <div className='navbar-right-items'>
            {/* <a href='https://www.linkedin.com/in/justin-b-kam-4105961a5/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}> */}
            <Link to='/users/purchases' style={{ textDecoration: 'None' }}>
              Purchases
            </Link>
            {/* </a> */}
          </div>
          <div className='navbar-right-items'>
            {/* <NavLink to='/sell' style={{ textDecoration: 'none', color: 'black' }}> */}
            <Link to='/users/listings' style={{ textDecoration: 'None', marginTop: '15px' }}>
              Listings
            </Link>
            {/* </NavLink> */}
          </div>
          <div className='navbar-right-items'>
            <NavLink to='/add' style={{ textDecoration: 'none', color: 'black' }}>
              Add Shoe
            </NavLink>
          </div>
          {profileMenu()}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
