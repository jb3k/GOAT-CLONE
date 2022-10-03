import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { getListingThunk } from '../../store/listings';
import ShoeListingForm from './ShoeListingForm';



function ShoeListingFormPage() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()
    const { shoeId, space, sizeId } = useParams();
    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(getListingThunk(sizeId))
            .then(() => setIsLoaded(true))

    }, [dispatch])



    const shoePage = shoeInfo.map((shoe) => {

        const { colorway, id, imageUrl, name, listings, size } = shoe

        let leftContainer = (
            <>
                <div>
                    Header
                    <div>
                        {name}
                    </div>
                    <div>
                        {colorway}
                    </div>
                </div>
                <div>
                    <img src={imageUrl} alt="shoe"></img>
                </div>

            </>
        )

        let rightContainer = (
            <>
                <ShoeListingForm />
            </>
        )

        return (
            <>
                <div className='sell-page-left-container'>
                    {leftContainer}
                </div>
                <div>
                    {rightContainer}
                </div>
            </>

        )
    })

    return isLoaded && (
        <>
            <div>
                <div className='sell-page-main-container'>
                    {shoePage}
                </div>
            </div>
        </>
    )
}

export default ShoeListingFormPage;
