import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllListingsThunk } from '../../store/listings';

function ShoeConfirmationPage({ shoePrice }) {
    const dispatch = useDispatch();
    const { shoeId, space, sizeId } = useParams();
    const [price, setPrice] = useState('');
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
            filtered = (
                <>
                    <option value={id}> Size: {size} ${price}</option>
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
                {/* <label>Size: US M</label>
                    <input
                        className='size-input-container'
                        type='text'
                        name='size'
                        onChange={e => setSize(e.target.value)}
                        value={size}
                        required={true}
                    ></input> */}
            </div>
            <div className='sell-form-body-box-container'>
                <div className='sell-form-body-box'>
                    <button className='sell-now-button' type='submit'>Buy Now</button>
                    <div className='sell-form-price-box'>
                        <select className='price-input-container'>
                            <option> Select Listing</option>
                            {listingFilter}
                        </select>



                        {/* <label style={{ fontWeight: 'bolder', marginRight: '5px', marginLeft: '10px' }}>$</label>
                        <input
                            className='price-input-container'
                            type='number'
                            name='price'
                            onChange={e => setPrice(e.target.value)}
                            value={price}
                            required={true}
                            min={1}
                            placeholder="Enter Price"
                        ></input> */}
                    </div>
                    <div className='sell-form-transaction-fee'>
                        <div style={{ marginBottom: '7px' }}>
                            Sales Tax(10%)
                        </div>
                        <div>
                            -${price * 0.1}
                        </div>
                    </div>
                    <div className='sell-form-transaction-fee'>
                        <div style={{ marginBottom: '7px' }}>
                            Processing Fee (3%)
                        </div>
                        <div>
                            ${(price * 0.03)}
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
                            <stong>${price + (price * 0.03) + (price * 0.1)}</stong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoeConfirmationPage;
