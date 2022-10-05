import React, { useState } from 'react';
import {  useDispatch } from 'react-redux'
import {  useHistory } from 'react-router-dom';
import { createPurchaseThunk } from '../../store/purchase'


function ShoePurchaseForm({ listingId, userAddy, userCity, userZip, userState, userCountry }) {

    const dispatch = useDispatch();
    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState(userAddy);
    const [city, setCity] = useState(userCity);
    const [state, setState] = useState(userState);
    const [country, setCountry] = useState(userCountry);
    const [zipcode, setZipcode] = useState(userZip);


    const onSubmit = async (e) => {
        e.preventDefault();
        const payload = { address, city, country, state, zipcode }
        dispatch(createPurchaseThunk(listingId, payload))
        alert('Your Purchase is Successful! Edits and Cancellations can only be made within 24 hours. ')
        history.push('/users/purchases')

    };

    // if (size === parseInt(sizeId)) 


    return (
        <div style={{ marginTop: '10px' }}>
            <form onSubmit={onSubmit}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className='purchase-form-information'>
                    <label>Address</label>
                    <input
                        type='text'
                        name='address'
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                    ></input>
                </div>
                <div className='purchase-form-information'>
                    <label>City</label>
                    <input
                        type='text'
                        name='city'
                        onChange={e => setCity(e.target.value)}
                        value={city}
                    ></input>
                </div>
                <div className='purchase-form-information'>
                    <label>State</label>
                    <input
                        type='text'
                        name='state'
                        onChange={e => setState(e.target.value)}
                        value={state}
                    ></input>
                </div>
                <div className='purchase-form-information'>
                    <label>Country</label>
                    <input
                        type='text'
                        name='country'
                        onChange={e => setCountry(e.target.value)}
                        value={country}
                    ></input>
                </div>
                <div className='purchase-form-information'>
                    <label>Zipcode</label>
                    <input
                        type='text'
                        name='zipcode'
                        onChange={e => setZipcode(e.target.value)}
                        value={zipcode}
                    ></input>
                </div>
                {/* <button type='submit'>Confirm Shipping</button> */}
            </form>
        </div>
    );
}

export default ShoePurchaseForm;
