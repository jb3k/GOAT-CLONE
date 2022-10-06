import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editPurchaseThunk, getUserPurchasesThunk } from "../../store/purchase";
import './editUserPurchases.css'



const EditUserPurchase = ({ purchaseId, userAddy, userCity, userZip, userState, userCountry, setShowEditTextField }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState(userAddy);
    const [city, setCity] = useState(userCity);
    const [state, setState] = useState(userState);
    const [country, setCountry] = useState(userCountry);
    const [zipcode, setZipcode] = useState(userZip);
    const [isSubmitted, setIsSubmitted] = useState(false)


    // const [loaded, setLoaded] = useState(false);

    // const user = useSelector(state => state.session.user);


    useEffect(() => {
        const errors = []
        const nums = '1234567890'
        const specialChar = '[`!@#$%^&*()_+={};:"|,.<>?~'
        // const letters = 'abcdefghijklmnopqrstuvwxyz'
        if (address.length < 3 || address.length > 40) errors.push('Invalid Address')
        if (nums.includes(city) || specialChar.includes(city) || city.length <= 1 || city.length > 30) errors.push('Invalid City')
        if (nums.includes(state) || specialChar.includes(state) || state.length !== 2) errors.push('Invalid Abbreviated State name')
        // if (country !== 'USA' || country !== 'usa') errors.push('Shipping is only USA')
        // if (zipcode.length !== 5) errors.push('Invalid Zipcode')

        // if ((validationCharNums(city)) || city.length <= 1) errors.push('Invalid City')
        // if ((validationCharNums(state)) || state.length <= 1) errors.push('Invalid State')
        // if (country !== 'USA') errors.push('Shipping is only USA')
        // if ((validationCharNums(zipcode))|| zipcode.length !== 5) errors.push('Invalid Zipcode')

        setErrors(errors)
    }, [address, city, state, country, zipcode])



    const onSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)

        if (errors.length > 0) return

        const payload = { address, city, country, state, zipcode }
        dispatch(editPurchaseThunk(purchaseId, payload))
            .then(() => dispatch(getUserPurchasesThunk()))
        setShowEditTextField(false)

    };

    return (
        <form onSubmit={onSubmit}>
            <div className='update-validations'>
                {isSubmitted && errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>

            <div className="edit-form-text-container">
                <div >
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
                <div style={{ marginLeft: '10px' }}>
                    <div>

                        <input
                            type='text'
                            name='address'
                            onChange={e => setAddress(e.target.value)}
                            value={address}
                        ></input>
                    </div>
                    <div>

                        <input
                            type='text'
                            name='city'
                            onChange={e => setCity(e.target.value)}
                            value={city}
                        ></input>
                    </div>
                    <div>
                        <input
                            type='text'
                            name='state'
                            onChange={e => setState(e.target.value)}
                            value={state}
                        ></input>
                    </div>
                    <div>
                        <select
                            style={{ width: '153px' }}
                        // type='text'
                        // name='country'
                        // onChange={e => setCountry(e.target.value)}
                        // value={country}
                        // required={true}
                        // placeholder={'Country *'}
                        >
                            <option value={"USA"}> USA </option>

                        </select>
                    </div>
                    <div >
                        <input
                            type='number'
                            name='zipcode'
                            onChange={e => setZipcode(e.target.value)}
                            value={zipcode}
                            required={true}
                            placeholder={'Zipcode *'}
                            minLength={5}
                            maxLength={5}
                        ></input>
                    </div>
                    {/* <div>

                        <input
                            type='text'
                            name='country'
                            onChange={e => setCountry(e.target.value)}
                            value={country}
                        ></input>
                    </div>
                    <div>

                        <input
                            type='text'
                            name='zipcode'
                            onChange={e => setZipcode(e.target.value)}
                            value={zipcode}
                        ></input>
                    </div> */}
                </div>
                <button style={{ marginLeft: '10px' }} className='purchase-page-edit-button' type='submit'>Update</button>
            </div>
        </form>
    );
}

export default EditUserPurchase;
