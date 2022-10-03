import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getUserListingsThunk, deleteListingsThunk } from '../../store/listings';
import './userListings.css'
import EditUserListing from '../editUserListings';


function CurrentUserListings() {
    const dispatch = useDispatch()
    const [showEditTextField, setShowEditTextField] = useState(false);
    const [showEditTextFieldListingId, setShowEditTextFieldListingId] = useState(0);

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
                        <img src={apparelImg} alt='shoe image' className='listing-shoe-img'></img>
                    </div>
                    <div className='user-listings-text-container'>
                        <div>
                            Name: {apparelName}
                        </div>
                        <div>
                            Colorway: {apparelColorway}
                        </div>
                        <div>
                            Shoe Size: {size}
                        </div>
                        <div>
                            Listing Price: ${price}
                        </div>
                        <button onClick={() => {
                            setShowEditTextField(!showEditTextField)
                            setShowEditTextFieldListingId(id)
                        }
                        }> Edit </button>
                        <button onClick={() => dispatch(deleteListingsThunk(id))}> Delete </button>
                        {showEditTextField && showEditTextFieldListingId === id && <EditUserListing listingId={id} listingPrice={price} listingSize={size} setShowEditTextField={setShowEditTextField} />}
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
