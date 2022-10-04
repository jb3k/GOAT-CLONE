import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import { getListingThunk } from '../../store/listings';

function ShoeConfirmationPage({ listingId }) {
    const dispatch = useDispatch();

    // const [isLoaded, setIsLoaded] = useState(false)
    // const [errors, setErrors] = useState([]);
    // const [address, setAddress] = useState(userAddy);
    // const [city, setCity] = useState(userCity);
    // const [state, setState] = useState(userState);
    // const [country, setCountry] = useState("USA");
    // const [zipcode, setZipcode] = useState(userZip);

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     const payload = { address, city, country, state, zipcode }
    //     dispatch(createPurchaseThunk(payload))

    // };

    return (
        <div className="personal-info-container">
            <div>
                <div className='sell-form-transaction-fee'>
                    <div style={{ marginBottom: '7px' }}>
                        Transaction Fee (10%)
                    </div>
                    <div>
                        -${100 * 0.1}
                    </div>
                </div>
                <div className='sell-form-transaction-fee'>
                    <div style={{ marginBottom: '7px' }}>
                        Payment Proc. (3%)
                    </div>
                    <div>
                        -${(100 * 0.03)}
                    </div>
                </div>
                <div className='sell-form-transaction-fee'>
                    <div style={{ marginBottom: '7px' }}>
                        Shipping
                    </div>
                    <div>
                        -$10
                    </div>
                </div>
                <div className='sell-form-total'>
                    <div >
                        Total
                    </div>
                    <div>
                        <stong>${100 - (100 * 0.03) - (100 * 0.1)}</stong>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ShoeConfirmationPage;
