import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getUserListingsThunk, deleteListingsThunk } from '../../store/listings';
import './userListings.css'
import EditUserListing from '../editUserListings';


function CurrentUserPurchases() {
    const dispatch = useDispatch()
    const [showEditTextField, setShowEditTextField] = useState(false);

    const allUserListings = useSelector(state => Object.values(state.listings))
    console.log(allUserListings)

    useEffect(() => {
        dispatch(getUserListingsThunk())
    }, []);


    const userListings = allUserListings.map(listing => {




        return (
            <>
            </>
        )

    })


    return (
        <>
            <div>
                <h1> current listings</h1>
            </div>
            <div>
            </div>
        </>
    );
}

export default CurrentUserPurchases;
