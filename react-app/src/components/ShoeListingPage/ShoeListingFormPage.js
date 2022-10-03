import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import ShoeListingForm from './ShoeListingForm';



function ShoeListingFormPage() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()
    const { shoeId } = useParams();
    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
            .then(() => setIsLoaded(true))

    }, [dispatch])



    const shoePage = shoeInfo.map((shoe) => {

        const { colorway, imageUrl, name } = shoe

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
