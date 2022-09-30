import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { getAllListingsThunk } from '../../store/listings';
import UploadPicture from '../ImagesForm'
import './ListingForm.css'

function ListingForm() {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    // console.log(sessionUser)
    const listings = useSelector((state) => state)
    console.log(listings)

    useEffect(() => {
        dispatch(getAllListingsThunk())
    }, [dispatch])


    return (
        <>
            <div>
                <UploadPicture />
            </div>
        </>
    )

}

export default ListingForm;
