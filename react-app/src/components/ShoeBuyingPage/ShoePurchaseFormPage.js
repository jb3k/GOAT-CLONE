import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { getListingThunk } from '../../store/listings';
import ShoePurchaseForm from './ShoePurchaseForm';


function ShoePurchaseFormPage() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()
    const { shoeId, space, sizeId } = useParams();
    const shoeInfo = useSelector(state => Object.values(state.listings))



    useEffect(() => {
        dispatch(getListingThunk(shoeId))
            .then(() => setIsLoaded(true))

    }, [dispatch])

    const sizeListings = shoeInfo.map(item => {
        const { size, price, apprelImg, apparelName, apparelColorway } = item
        let selectedSize
        if (size === parseInt(sizeId)) {
            selectedSize = (
                <>
                    <div>
                        Something
                    </div>
                </>

            )
        }



        return (
            <>
                <div>

                </div>
                <div>
                    {selectedSize}
                </div>
            </>
        )


    })

    return isLoaded && (
        <>
            <div>
                Purchase Form page
            </div>
            <div>
                {sizeListings}
            </div>
        </>
    )
}

export default ShoePurchaseFormPage;
