import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { createListingsThunk } from '../../store/listings';
import './ShoeListingForm.css'


function ShoeListingForm() {

    const dispatch = useDispatch()
    const history = useHistory()
    const { shoeId, space, sizeId } = useParams();
    const [errorValidation, setErrorValidation] = useState([])
    const [size, setSize] = useState(sizeId);
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(1);


    // useEffect(() => {
    //     const errors = []
    //     if (!Number(price)) errors.push('Need valid price')
    //     return setErrorValidation(errors)
    // }, [size, price])


    const onSubmit = async (e) => {
        e.preventDefault();
        const payload = { size, price, quantity }
        dispatch(createListingsThunk(shoeId, payload))
        alert('Your Listing has been created!')
        history.push('/users/listings')

    };


    return (
        <div className='sell-page-right-container'>
            <form onSubmit={onSubmit}>
                <div>
                    {errorValidation.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
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
                        <button className='sell-now-button' type='submit'>List Now</button>
                        <div className='sell-form-price-box'>
                            <label style={{ fontWeight: 'bolder', marginRight: '5px', marginLeft: '10px' }}>$</label>
                            <input
                                className='price-input-container'
                                type='number'
                                name='price'
                                onChange={e => setPrice(e.target.value)}
                                value={price}
                                required={true}
                                min={1}
                                placeholder="Enter Price"
                            ></input>
                        </div>
                        <div className='sell-form-transaction-fee'>
                            <div style={{ marginBottom: '7px' }}>
                                Transaction Fee (10%)
                            </div>
                            <div>
                                -${price * 0.1}
                            </div>
                        </div>
                        <div className='sell-form-transaction-fee'>
                            <div style={{ marginBottom: '7px' }}>
                                Payment Proc. (3%)
                            </div>
                            <div>
                                -${(price * 0.03)}
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
                                <stong>${price - (price * 0.03) - (price * 0.1)}</stong>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <NavLink to={`/shoe/${shoeId}/sell`}>
                        <button className='prev-button'> Prev </button>
                    </NavLink>
                </div>
            </form>
        </div>
    );
}

export default ShoeListingForm;
