import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { getAllListingsThunk } from '../../store/listings';
import './ListingForm.css'

function ListingForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    console.log(sessionUser)
    const listings = useSelector((state) => state)

    useEffect(() => {
        dispatch(getAllListingsThunk())
    }, [dispatch])


    return (
        <>
           
        </>
    )

}

export default ListingForm;
