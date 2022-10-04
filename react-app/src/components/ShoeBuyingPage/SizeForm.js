import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editListingsThunk } from '../../store/listings';



const SizeListingForm = ({ listingId, listingPrice, listingSize, setShowEditTextField }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [price, setPrice] = useState();

    const user = useSelector(state => state.session.user);

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     const payload = { size, price, quantity }
    //     dispatch(editListingsThunk(listingId, payload))
    //     setShowEditTextField(false)

    // };

    return (
        <>
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
        </>
    );
}

export default SizeListingForm;
