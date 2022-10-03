import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getUserPurchasesThunk, deletePurchaseThunk } from '../../store/purchase';
import './userPurchases.css'
import EditUserPurchase from '../editUserPurchases';

function CurrentUserPurchases() {
    const dispatch = useDispatch()
    const [showEditTextField, setShowEditTextField] = useState(false);

    const allUserPurchases = useSelector(state => Object.values(state.purchase))
    console.log(allUserPurchases)

    useEffect(() => {
        dispatch(getUserPurchasesThunk())
    }, []);

    const userPurchases = allUserPurchases.map(item => {
        const { address, city, country, zipcode, state, listingImg, listingSize, apparelName, apparelColorway, id, createdAt } = item


        const datePosted = new Date(createdAt)
        const now = Date.now()
        const milliseconds = Math.abs(now - datePosted)
        const minutes = Math.ceil(milliseconds / (1000 * 60))
        const hours = Math.ceil(milliseconds / (1000 * 60 * 60))
        const days = Math.ceil(milliseconds / (1000 * 60 * 60 * 24))

        let notShipped = (<></>)



        return (
            <>
                <div className='user-purchase-container'>
                    <div className='user-purchase-image-container'>
                        <div>
                            <div>
                                {apparelName}
                            </div>
                            <div>
                                Size: {listingSize}
                            </div>

                        </div>
                        <div>
                            <img src={listingImg} alt='shoe image' className='purchase-shoe-img'></img>
                        </div>
                    </div>
                    <div className='user-purchase-text-container'>
                        <div>
                            Address: {address}
                        </div>
                        <div>
                            City: {city}
                        </div>
                        <div>
                            State: {state}
                        </div>
                        <div>
                            Country: {country}
                        </div>
                        <div>
                            Zipcode: {zipcode}
                        </div>
                        <button onClick={() => setShowEditTextField(!showEditTextField)}> Edit </button>
                        <button onClick={() => dispatch(deletePurchaseThunk(id))}> Delete </button>
                        {showEditTextField && <EditUserPurchase purchaseId={id} userAddy={address} userCity={city} userZip={zipcode} userState={state} userCountry={country} setShowEditTextField={setShowEditTextField} />}
                    </div>
                </div>
            </>
        )


    })





    return (
        <>
            <div>
                <h1> current purchases</h1>
            </div>
            <div>
                {userPurchases}
            </div>
        </>
    );
}

export default CurrentUserPurchases;
