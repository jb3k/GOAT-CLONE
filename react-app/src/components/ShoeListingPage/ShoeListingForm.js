import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import { createListingsThunk } from '../../store/listings';


function ShoeListingForm() {

    const dispatch = useDispatch()
    const history = useHistory()
    const { shoeId, space, sizeId } = useParams();
    const [errors, setErrors] = useState([]);
    const [size, setSize] = useState(sizeId);
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(1);


    const onSubmit = async (e) => {
        e.preventDefault();
        const payload = { size, price, quantity }
        dispatch(createListingsThunk(shoeId, payload))
        alert('Your Listing has been created!')
        history.push('/users/listings')

    };


    return (
        <form onSubmit={onSubmit}>
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div>
                <label>Size</label>
                <input
                    type='text'
                    name='size'
                    onChange={e => setSize(e.target.value)}
                    value={size}
                    required={true}
                ></input>
            </div>
            <div>
                <label>Price</label>
                <input
                    type='text'
                    name='price'
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                    required={true}
                ></input>
            </div>
            <button type='submit'>Create Listing</button>
        </form>
    );
}

export default ShoeListingForm;
