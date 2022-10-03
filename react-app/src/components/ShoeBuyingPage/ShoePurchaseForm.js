import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import { createPurchaseThunk } from '../../store/purchase'


function ShoePurchaseForm() {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [zipcode, setZipcode] = useState();


    const onSubmit = async (e) => {
        e.preventDefault();
        const payload = { address, city, country, state, zipcode }
        dispatch(createPurchaseThunk(payload))

    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div>
                <label>Address</label>
                <input
                    type='text'
                    name='address'
                    onChange={e => setAddress(e.target.value)}
                    value={address}
                ></input>
            </div>
            <div>
                <label>City</label>
                <input
                    type='text'
                    name='city'
                    onChange={e => setCity(e.target.value)}
                    value={city}
                ></input>
            </div>
            <div>
                <label>State</label>
                <input
                    type='text'
                    name='state'
                    onChange={e => setState(e.target.value)}
                    value={state}
                ></input>
            </div>
            <div>
                <label>Country</label>
                <input
                    type='text'
                    name='country'
                    onChange={e => setCountry(e.target.value)}
                    value={country}
                ></input>
            </div>
            <div>
                <label>Zipcode</label>
                <input
                    type='text'
                    name='zipcode'
                    onChange={e => setZipcode(e.target.value)}
                    value={zipcode}
                ></input>
            </div>
            <button type='submit'>Update</button>
        </form>
    );
}

export default ShoePurchaseForm;
