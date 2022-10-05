import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPurchaseThunk, getUserPurchasesThunk } from "../../store/purchase";



const EditUserPurchase = ({ purchaseId, userAddy, userCity, userZip, userState, userCountry, setShowEditTextField }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState(userAddy);
    const [city, setCity] = useState(userCity);
    const [state, setState] = useState(userState);
    const [country, setCountry] = useState(userCountry);
    const [zipcode, setZipcode] = useState(userZip);
    // const [loaded, setLoaded] = useState(false);

    const user = useSelector(state => state.session.user);

    const onSubmit = async (e) => {
        e.preventDefault();
        const payload = { address, city, country, state, zipcode }
        dispatch(editPurchaseThunk(purchaseId, payload))
            .then(() => dispatch(getUserPurchasesThunk()))
        setShowEditTextField(false)

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

export default EditUserPurchase;
