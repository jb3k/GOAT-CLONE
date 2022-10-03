import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getUserListingsThunk, editListingsThunk, deleteListingsThunk } from '../store/listings';
import './userListings.css'


function CurrentUserListings() {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch()

    const allUserListings = useSelector(state => Object.values(state.listings))
    console.log(allUserListings)

    useEffect(() => {
        dispatch(getUserListingsThunk())
    }, []);


    const userListings = allUserListings.map(listing => {
        const { price, size, apparelName, apparelImg, apparelColorway, id } = listing



        return (
            <>
                <div className='user-listings-container'>
                    <div className='user-listings-image-container'>
                        img
                    </div>
                    <div className='user-listings-text-container'>
                        <div>
                            {apparelName}
                        </div>
                        <div>
                            {apparelColorway}
                        </div>
                        <div>
                            {size}
                        </div>
                        <div>
                            {price}
                        </div>
                        <button onClick={() => dispatch(editListingsThunk(id))}> Edit </button>
                        {/* <button onClick={() => dispatch(deleteListingsThunk(id))}> Delete </button> */}
                    </div>
                </div>
            </>
        )

    })


    return (
        <>
            <div>
                <h1> current listings</h1>
            </div>
            <div>
                {userListings}
            </div>
        </>
    );
}

export default CurrentUserListings;
