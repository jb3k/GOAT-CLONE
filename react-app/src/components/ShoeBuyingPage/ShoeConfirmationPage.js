import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { getUserPurchasesThunk, createPurchaseThunk } from '../../store/purchase';
import './ShoeConfirmationPage.css'

function ShoeConfirmationPage({ }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const { shoeId, space, sizeId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false)
    const [errorValidation, setErrorValidation] = useState([])
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('USA');
    const [zipcode, setZipcode] = useState('');

    // const sessionUser = useSelector(state => state.session.user)
    const shoeInfo = useSelector(state => Object.values(state.apparel))
    // const allUserPurchases = useSelector(state => Object.values(state.purchase))
    // let userInfoObj = allUserPurchases[0]
    // const info = useSelector(state => state.listings)


    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(getUserPurchasesThunk())
            .then(() => setIsLoaded(true))

    }, [dispatch, shoeId])


    useEffect(() => {
        const errors = []
        const nums = '1234567890'
        const specialChar = '[`!@#$%^&*()_+={};:"|,.<>?~'
        // const letters = 'abcdefghijklmnopqrstuvwxyz'
        if (address.length < 2) errors.push('Invalid Address')
        if ((!nums.includes(address))) errors.push('Address needs Numbers')
        if (nums.includes(city) || specialChar.includes(city) || city.length <= 1) errors.push('Invalid City')
        if (nums.includes(state) || specialChar.includes(state) || state.length <= 1) errors.push('Invalid State')
        if (country !== 'USA') errors.push('Shipping is only USA')
        if (zipcode.length !== 5) errors.push('Invalid Zipcode')

        // if ((validationCharNums(city)) || city.length <= 1) errors.push('Invalid City')
        // if ((validationCharNums(state)) || state.length <= 1) errors.push('Invalid State')
        // if (country !== 'USA') errors.push('Shipping is only USA')
        // if ((validationCharNums(zipcode))|| zipcode.length !== 5) errors.push('Invalid Zipcode')

        setErrorValidation(errors)
    }, [address, city, state, country, zipcode])



    let numId
    const listingFilter = shoeInfo.map((item) => {
        const { listings } = item

        let arr = []
        const filterListing = listings.forEach((item) => {
            const { size, apparelId } = item
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


    /* <select className='price-input-container'
                            onChange={(e) => {
                                if (e.target.value === 0) {
                                    setShoePrice(0)
                                }
                                setShoePrice(e.target.value)
                            }}
                        >
                            <option value={0}> Select Listing</option>
                            {listingFilter}
                        </select> */

    const onSubmit = async (e) => {
        // e.preventDefault();
        if (errorValidation.length >= 1) {
            errorValidation.map(err => {
                return alert(err)
            })
            return
        }
        const payload = { address, city, country, state, zipcode }
        dispatch(createPurchaseThunk(numId, payload))
        alert('Your Purchase is Successful! Edits and Cancellations can only be made within 24 hours. ')
        history.push('/users/purchases')

    };



    return isLoaded && (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    {/* {errorValidation.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))} */}
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
                                    Sales Tax(1%)
                                </div>
                                <div>
                                    ${listingFilter * 0.01}
                                </div>
                            </div>
                            <div className='sell-form-transaction-fee'>
                                <div style={{ marginBottom: '7px' }}>
                                    Processing Fee (10%)
                                </div>
                                <div>
                                    ${(listingFilter * 0.1)}
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
                                    ${(Number(listingFilter) + 10 + (Number(listingFilter * 0.11)))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='buying-form-address-container'>
                        <div className='buying-form-address-body'>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <strong> Shipping information: </strong>
                            </div>
                            <div style={{ marginTop: '10px' }}>

                            </div>
                            <div >
                                <input
                                    className='purchase-form-information'
                                    type='text'
                                    name='address'
                                    onChange={e => setAddress(e.target.value)}
                                    value={address}
                                    required={true}
                                    placeholder={'Address *'}
                                ></input>
                            </div>
                            <div >
                                <input
                                    className='purchase-form-information'
                                    type='text'
                                    name='city'
                                    onChange={e => setCity(e.target.value)}
                                    value={city}
                                    required={true}
                                    placeholder={'City *'}
                                ></input>
                            </div>
                            <div>
                                <input
                                    className='purchase-form-information'
                                    type='text'
                                    name='state'
                                    onChange={e => setState(e.target.value)}
                                    value={state}
                                    required={true}
                                    placeholder={'State *'}
                                ></input>
                            </div>
                            <div>
                                <input
                                    className='purchase-form-information'
                                    type='text'
                                    name='country'
                                    onChange={e => setCountry(e.target.value)}
                                    value={country}
                                    required={true}
                                    placeholder={'Country *'}
                                ></input>
                            </div>
                            <div >
                                <input
                                    className='purchase-form-information'
                                    type='text'
                                    name='zipcode'
                                    onChange={e => setZipcode(e.target.value)}
                                    value={zipcode}
                                    required={true}
                                    maxLength={5}
                                    placeholder={'Zipcode *'}
                                ></input>
                            </div>
                            <div style={{ display: 'flex', fontSize: '9px', flexDirection: 'row-reverse', marginRight: '20px' }}>
                                * required fields
                            </div>
                            {/* <button type='submit'>Confirm Shipping</button> */}
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}



export default ShoeConfirmationPage;
