import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editListingsThunk } from '../../store/listings';



const EditUserListing = ({ listingId, listingPrice, listingSize, setShowEditTextField }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [size, setSize] = useState(listingSize);
    const [price, setPrice] = useState(listingPrice);
    const [quantity, setQuantity] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const errorValidation = []
        if (size < 3 || size > 18 || (!Number(size))) errorValidation.push('Need Valid Size')
        if (!Number(price) || price > 9999 || price < 1) errorValidation.push('Price must be between 1-9999')
        return setErrors(errorValidation)
    }, [size, price])


    const onSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)

        if (errors.length > 0) return

        const payload = { size, price, quantity }
        dispatch(editListingsThunk(listingId, payload))
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
