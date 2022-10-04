import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { getUserPurchasesThunk } from '../../store/purchase';

import './ShoeConfirmationPage.css'
import ShoePurchaseForm from './ShoePurchaseForm';

function ShoeConfirmationPage({ }) {
    const dispatch = useDispatch();
    const { shoeId, space, sizeId } = useParams();

    const [open, setOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    const sessionUser = useSelector(state => state.session.user)
    const shoeInfo = useSelector(state => Object.values(state.apparel))
    const allUserPurchases = useSelector(state => Object.values(state.purchase))
    let userInfoObj = allUserPurchases[0]
    // const info = useSelector(state => state.listings)


    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(getUserPurchasesThunk())
            .then(() => setIsLoaded(true))

    }, [dispatch])

    let numId
    const listingFilter = shoeInfo.map((item) => {
        const { listings } = item

        let arr = []
        const filterListing = listings.forEach((item) => {
            const { id, size, price, apparelId } = item
            if (parseInt(shoeId) === apparelId && parseInt(sizeId) === size) {
                arr.push(item.price)
            }

        })
        let minPrice = Math.min(...arr)
        const listingId = listings.forEach(shoe => {
            const { id, size, price, apparelId } = shoe
            if (parseInt(shoeId) === apparelId && parseInt(sizeId) === size && price === minPrice) {
                numId = id
            }
        })

        return minPrice
    })

    return (
        <>
            <div className='sell-form-top-size-box'>
                <div style={{ marginRight: "4px", marginLeft: '10px' }}> Size: </div>
                <div> US M {sizeId}</div>
            </div>
            <div className='sell-form-body-box-container'>
                <div className='sell-form-body-box'>
                    <button className='sell-now-button' type='submit'>Buy Now</button>
                    <div className='sell-form-price-box'>
                        Lowest Current Listing: ${listingFilter}
                    </div>
                    <div>
                        {/* {open && listingFilter} */}
                    </div>
                    <div className='sell-form-transaction-fee'>
                        <div style={{ marginBottom: '7px' }}>
                            Sales Tax(5%)
                        </div>
                        <div>
                            ${listingFilter * 0.05}
                        </div>
                    </div>
                    <div className='sell-form-transaction-fee'>
                        <div style={{ marginBottom: '7px' }}>
                            Processing Fee (5%)
                        </div>
                        <div>
                            ${(listingFilter * 0.05)}
                        </div>
                    </div>
                    <div className='sell-form-transaction-fee'>
                        <div style={{ marginBottom: '7px' }}>
                            Shipping
                        </div>
                        <div>
                            $10
                        </div>
                    </div>
                    <div className='sell-form-total'>
                        <div >
                            Total
                        </div>
                        <div>
                            ${(Number(listingFilter) + 10 + (Number(listingFilter * 0.1)))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='buying-form-address-container'>
                <div className='buying-form-address-body'>
                    <div >
                        Name: {sessionUser.firstName} {sessionUser.lastName}
                    </div>
                    <div className='buying-form-address-address-container'>
                        <div>
                            Address: {userInfoObj.address}
                        </div>
                        <div onClick={() => setOpen(!open)}>
                            <i class="fa-sharp fa-solid fa-pen"></i>
                        </div>
                    </div>
                    <div>
                        {open && <ShoePurchaseForm listingId={numId} userId={sessionUser.id} userAddy={userInfoObj.address} userCity={userInfoObj.city} userZip={userInfoObj.zipcode} userState={userInfoObj.state} userCountry={userInfoObj.country} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoeConfirmationPage;









{/* <select className='price-input-container'
                            onChange={(e) => {
                                if (e.target.value === 0) {
                                    setShoePrice(0)
                                }
                                setShoePrice(e.target.value)
                            }}
                        >
                            <option value={0}> Select Listing</option>
                            {listingFilter}
                        </select> */}
