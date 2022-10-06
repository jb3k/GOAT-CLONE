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
    const [open, setOpen] = useState(true)
    const [pastDate, setPastDate] = useState(true)
    const [loaded, setLoaded] = useState(false);


    const allUserPurchases = useSelector(state => Object.values(state.purchase))
    // console.log(allUserPurchases)

    useEffect(() => {
        dispatch(getUserPurchasesThunk())
            .then(() => setLoaded(true))
    }, [dispatch]);


    if (!allUserPurchases) return null

    const userPurchases = allUserPurchases.map(item => {
        const { address, city, country, zipcode, state, listingImg, listingSize, apparelName, apparelColorway, id, createdAt, apparelId } = item


        // if (hours > 24) { setPastDate(false) }

        let addressText
        let maxAddLength
        if (address?.length > 15) {
            maxAddLength = address.slice(0, 15) + '..'

            addressText = (
                <>
                    {maxAddLength}
                </>
            )
        } else {
            addressText = (
                <>
                    {address}
                </>
            )
        }


        let cityText
        let maxCityLength
        if (city?.length > 15) {
            maxCityLength = city.slice(0, 15) + '..'

            cityText = (
                <>
                    {maxCityLength}
                </>
            )
        } else {
            cityText = (
                <>
                    {city}
                </>
            )
        }

        const datePosted = new Date(createdAt)
        const now = Date.now()
        console.log(datePosted - now)
        const milliseconds = Math.abs(now - datePosted)
        // const minutes = Math.ceil(milliseconds / (1000 * 60))
        const hours = Math.ceil(milliseconds / (1000 * 60 * 60))
        const days = Math.ceil(milliseconds / (1000 * 60 * 60 * 24))
        let validTime
        if (hours > 24) {
            validTime = (
                <>
                    <button className='purchase-page-edit-button'
                        onClick={() => {
                            alert("Shoe has already been shipped, you can no longer edit!")
                        }}> Edit </button>
                    <div className='purchase-page-delete-button'
                        onClick={() => alert("Shoe has already been shipped, you can no longer edit!")}>
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                </>
            )
        } else {
            validTime = (
                <>
                    <button className='purchase-page-edit-button'
                        onClick={() => {
                            setShowEditTextField(!showEditTextField)
                            setShowEditTextFieldPuchaseId(id)
                            setOpen(!open)
                        }}> Edit </button>
                    <div className='purchase-page-delete-button'
                        onClick={() => {
                            dispatch(deletePurchaseThunk(id))
                            alert('Your Purchase has been cancelled')
                        }}>
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                </>
            )
        }





        let rightContainer = (
            <>
                <div className='user-purchase-container'>
                    <div className='user-purchase-right-container'>
                        <NavLink to={`/shoe/${apparelId}`}>
                            <div className='user-purchase-image-container'>
                                <img src={listingImg} alt='shoe image' className='purchase-shoe-img'></img>
                            </div>
                        </NavLink>
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
                        {<div className='purchase-page-purchase-info'>
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
                                    {addressText}
                                </div>
                                <div>
                                    {cityText}
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
                        </div>}

                        <div className='purchase-page-crud-buttons'>
                            {validTime}
                            {/* <button className='purchase-page-edit-button'
                                onClick={() => {
                                    setShowEditTextField(!showEditTextField)
                                    setShowEditTextFieldPuchaseId(id)
                                    setOpen(!open)
                                }}> Edit </button>
                            <div className='purchase-page-delete-button'
                                onClick={() => dispatch(deletePurchaseThunk(id))}>
                                <i class="fa-regular fa-trash-can"></i>
                            </div> */}
                            {showEditTextField && showEditTextFieldPuchaseId === id && < EditUserPurchase purchaseId={id} userAddy={address} userCity={city} userZip={zipcode} userState={state} userCountry={country} setShowEditTextField={setShowEditTextField} />}

                        </div>
                    </div>
                </div>
            </>
        )




        return (
            <>
                {/* <div>
                    {leftContainer}
                </div> */}
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
                {/* <div className='user-page-purchase-search-bar'>
                    Search name
                </div> */}
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
