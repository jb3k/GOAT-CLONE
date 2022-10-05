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
                <div className='user-purchase-container'>
                    <div className='user-purchase-right-container'>
                        <div className='user-purchase-image-container'>
                            <img src={apparelImg} alt='shoe image' className='purchase-shoe-img'></img>
                        </div>
                    </div>
                    <div className='user-purchase-text-container'>
                        <div className='user-purchase-right-container-text'>
                            <div className='user-purchase-right-container-text-name'>
                                {apparelName}
                            </div>
                            <div className='user-purchase-right-container-text-colorway'>
                                {apparelColorway}
                            </div>
                            <div className='user-purchase-right-container-text-size'>
                                Size: {size}
                            </div>
                        </div>
                        <div className='purchase-page-purchase-info'>
                            <div className='purchase-page-purchase-info-left'>
                                Price:
                            </div>
                            <div className='purchase-page-purchase-info-right'>
                                ${price}
                            </div>
                        </div>
                        <div className='purchase-page-crud-buttons'>
                            <button className='purchase-page-edit-button'
                                onClick={() => {
                                    setShowEditTextField(!showEditTextField)
                                    setShowEditTextFieldListingId(id)
                                }}> Edit </button>
                            <div className='purchase-page-delete-button'
                                onClick={() => dispatch(deleteListingsThunk(id))}>
                                <i class="fa-regular fa-trash-can"></i>
                            </div>
                            {showEditTextField && showEditTextFieldListingId === id && <EditUserListing listingId={id} listingPrice={price} listingSize={size} setShowEditTextField={setShowEditTextField} />}
                        </div>
                    </div>
                </div>
                {/* <div className='user-listings-container'>
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
                </div> */}
            </>
        )

    })


    return (
        <>
            <div className='whole-user-page-container'>
                <div className='user-page-purchase-header'>
                    <h1> Listing History: </h1>
                </div>
                <div className='user-page-purchase-search-bar'>
                    Search name
                </div>
                <div className='right-user-purchase-container'>
                    <div className='right-user-purchase-header-tags'>
                        <div>
                            item
                        </div>
                        <div>
                            listing info
                        </div>
                    </div>
                    {userListings}
                </div>
            </div>
        </>


        // <>
        //     <div>
        //         <h1> current listings</h1>
        //     </div>
        //     <div>
        //         {userListings}
        //     </div>
        // </>
    );
}

export default CurrentUserListings;
