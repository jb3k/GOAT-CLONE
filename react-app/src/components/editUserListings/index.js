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
            <div className="edit-form-text-container">
                <div>
                    <div>
                        Size:
                    </div>
                    <div>
                        Price:
                    </div>
                </div>

                <div style={{ marginLeft: '10px' }}>
                    <div>
                        <input
                            type='text'
                            name='size'
                            onChange={e => setSize(e.target.value)}
                            value={size}
                        ></input>
                    </div>
                    <div>
                        <input
                            type='text'
                            name='price'
                            onChange={e => setPrice(e.target.value)}
                            value={price}
                        ></input>
                    </div>
                </div>
                <button style={{ marginLeft: '10px' }} className='purchase-page-edit-button' type='submit'>Update</button>
            </div>
        </form>
    );
}

export default EditUserListing;
