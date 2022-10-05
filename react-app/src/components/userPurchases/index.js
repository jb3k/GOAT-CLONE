import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getUserPurchasesThunk, deletePurchaseThunk } from '../../store/purchase';
import './userPurchases.css'
import EditUserPurchase from '../editUserPurchases';

function CurrentUserPurchases() {
    const dispatch = useDispatch()
    const [showEditTextField, setShowEditTextField] = useState(false);
    const [showEditTextFieldPuchaseId, setShowEditTextFieldPuchaseId] = useState(0);
    const [pastDate, setPastDate] = useState(true)
    const [loaded, setLoaded] = useState(false);


    const allUserPurchases = useSelector(state => Object.values(state.purchase))
    // console.log(allUserPurchases)

    useEffect(() => {
        dispatch(getUserPurchasesThunk())
            .then(() => setLoaded(true))
    }, [dispatch]);

    const userPurchases = allUserPurchases.map(item => {
        const { address, city, country, zipcode, state, listingImg, listingSize, apparelName, apparelColorway, id, createdAt } = item

        const datePosted = new Date(createdAt)
        const now = Date.now()
        console.log(datePosted - now)
        const milliseconds = Math.abs(now - datePosted)
        const minutes = Math.ceil(milliseconds / (1000 * 60))
        const hours = Math.ceil(milliseconds / (1000 * 60 * 60))
        const days = Math.ceil(milliseconds / (1000 * 60 * 60 * 24))

        // if (hours > 24) { setPastDate(false) }


        let leftContainer = (
            <>
            </>
        )

        let rightContainer = (
            <>
                <div className='user-purchase-container'>
                    <div className='user-purchase-right-container'>
                        <div className='user-purchase-image-container'>
                            <img src={listingImg} alt='shoe image' className='purchase-shoe-img'></img>
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
                                Size: {listingSize}
                            </div>
                        </div>
                        <div className='purchase-page-purchase-info'>
                            <div className='purchase-page-purchase-info-left'>
                                <div>
                                    Address:
                                </div>
                                <div>
                                    City:
                                </div>
                                <div>
                                    State:
                                </div>
                                <div>
                                    Country:
                                </div>
                                <div>
                                    Zipcode:
                                </div>
                            </div>
                            <div className='purchase-page-purchase-info-right'>
                                <div>
                                    {address}
                                </div>
                                <div>
                                    {city}
                                </div>
                                <div>
                                    {state}
                                </div>
                                <div>
                                    {country}
                                </div>
                                <div>
                                    {zipcode}
                                </div>
                            </div>
                        </div>
                        <div className='purchase-page-crud-buttons'>
                            <button className='purchase-page-edit-button'
                                onClick={() => {
                                    setShowEditTextField(!showEditTextField)
                                    setShowEditTextFieldPuchaseId(id)
                                }}> Edit </button>
                            <div className='purchase-page-delete-button'
                                onClick={() => dispatch(deletePurchaseThunk(id))}>
                                <i class="fa-regular fa-trash-can"></i>
                            </div>

                            {showEditTextField && showEditTextFieldPuchaseId === id && < EditUserPurchase purchaseId={id} userAddy={address} userCity={city} userZip={zipcode} userState={state} userCountry={country} setShowEditTextField={setShowEditTextField} />}
                        </div>
                    </div>
                </div>
            </>
        )




        return (
            <>
                <div>
                    {leftContainer}
                </div>
                <div>
                    {rightContainer}
                </div>
            </>
        )


    })





    return loaded && (
        <>
            <div className='whole-user-page-container'>
                <div className='user-page-purchase-header'>
                    <h1> Purchase History: </h1>
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
                            purchase info
                        </div>
                    </div>
                    {userPurchases}
                </div>
            </div>
        </>
    );
}

export default CurrentUserPurchases;
