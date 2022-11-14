import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import ShoeListingForm from './ShoeListingForm';
import { searchAllApparelThunk } from '../../store/searchbar';



function ShoeListingFormPage() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()
    const { shoeId } = useParams();
    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))

    }, [dispatch, shoeId])



    const shoePage = shoeInfo.map((shoe) => {

        const { brand, brandType, style, releaseDate, colorway, imageUrl } = shoe

        let leftContainer = (
            <>
                <div className='formpage-sell-shoe-name-container'>
                    <div className='formpage-sell-shoe-name'>
                        {brand} {brandType} {style}
                    </div>
                    <div className='formpage-sell-shoe-name'>
                        {colorway} ({releaseDate})
                    </div>
                </div>
                <div className='shoe-profile-image-container'>
                    <img src={imageUrl} alt='shoe'className='shoe-profile-image' ></img>
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
                <div className='sell-page-right-container'>
                    {rightContainer}
                </div>
            </>

        )
    })

    return isLoaded && (
        <>
            <div className='navbar-spacing'>
                <div className='sell-page-main-container'>
                    {shoePage}
                </div>
            </div>
        </>
    )
}

export default ShoeListingFormPage;
