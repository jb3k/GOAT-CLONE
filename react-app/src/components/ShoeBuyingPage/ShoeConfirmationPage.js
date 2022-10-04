import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllListingsThunk } from '../../store/listings';

function ShoeConfirmationPage({ }) {
    const dispatch = useDispatch();
    const { shoeId, space, sizeId } = useParams();
    const [shoePrice, setShoePrice] = useState('');
    const [isLoaded, setIsLoaded] = useState(false)


    const listingInfo = useSelector(state => Object.values(state.listings))
    // const info = useSelector(state => state.listings)


    useEffect(() => {
        dispatch(getAllListingsThunk())
            .then(() => setIsLoaded(true))

    }, [dispatch])




    let listingFilter = listingInfo.map(ele => {
        // console.log(ele)
        const { id, size, price, apparelId } = ele
        let filtered
        if (parseInt(shoeId) === apparelId && parseInt(sizeId) === size) {
            console.log(id, price)
            filtered = (
                <>
                    <option value={price}> ${price}</option>
                </>
            )
        }
        return (
            <>
                {filtered}
            </>
        )

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
                        <select className='price-input-container'
                            onChange={(e) => {
                                if (e.target.value === 0) {
                                    setShoePrice(0)
                                }
                                setShoePrice(e.target.value)
                            }}
                        >
                            <option value={0}> Select Listing</option>
                            {listingFilter}
                        </select>
                    </div>
                    <div className='sell-form-transaction-fee'>
                        <div style={{ marginBottom: '7px' }}>
                            Sales Tax(10%)
                        </div>
                        <div>
                            ${shoePrice * 0.1}
                        </div>
                    </div>
                    <div className='sell-form-transaction-fee'>
                        <div style={{ marginBottom: '7px' }}>
                            Processing Fee (5%)
                        </div>
                        <div>
                            ${(shoePrice * 0.05)}
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
                            ${(Number(shoePrice) + 10 + (Number(shoePrice * 0.15)))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                address stuff
            </div>
        </>
    );
}

export default ShoeConfirmationPage;
