import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editListingsThunk } from '../../store/listings';



const EditUserListing = ({ listingId, listingPrice, listingSize, setShowEditTextField }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [size, setSize] = useState(listingSize);
    const [price, setPrice] = useState(listingPrice);
    const [quantity, setQuantity] = useState(1);

    const user = useSelector(state => state.session.user);

    const onSubmit = async (e) => {
        e.preventDefault();
        const payload = { size, price, quantity }
        dispatch(editListingsThunk(listingId, payload))
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
                <label>Size</label>
                <input
                    type='text'
                    name='size'
                    onChange={e => setSize(e.target.value)}
                    value={size}
                ></input>
            </div>
            <div>
                <label>Price</label>
                <input
                    type='text'
                    name='price'
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                ></input>
            </div>
            <button type='submit'>Update</button>
        </form>
    );
}

export default EditUserListing;
