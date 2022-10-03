import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import { createPurchaseThunk } from '../../store/purchase'
import { getUserPurchasesThunk } from '../../store/purchase';
function ShoeConfirmationPage({ userAddy, userCity, userState, userZip }) {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState(userAddy);
    const [city, setCity] = useState(userCity);
    const [state, setState] = useState(userState);
    const [country, setCountry] = useState("USA");
    const [zipcode, setZipcode] = useState(userZip);

    const onSubmit = async (e) => {
        e.preventDefault();
        const payload = { address, city, country, state, zipcode }
        dispatch(createPurchaseThunk(payload))

    };



    return (
        <div className="personal-info-container">
            <input
                type="text"
                placeholder="Purchase Price"
                // value={formData.firstName}
                // onChange={(e) => {
                //     setFormData({ ...formData, firstName: e.target.value });
                // }}
            />
            <input
                type="text"
                placeholder="Sales Tax"
                // value={formData.lastName}
                // onChange={(e) => {
                //     setFormData({ ...formData, lastName: e.target.value });
                // }}
            />
            <input
                type="text"
                placeholder="Shipping"
                // value={formData.username}
                // onChange={(e) => {
                //     setFormData({ ...formData, username: e.target.value });
                // }}
            />
        </div>
    );
}

export default ShoeConfirmationPage;
