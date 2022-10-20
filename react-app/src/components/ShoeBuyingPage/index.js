import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { searchAllApparelThunk } from '../../store/searchbar'
import AllSizesFunc from './allSizesFunc';


function ShoePurchasePage() {
    const dispatch = useDispatch()

    const { shoeId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false)
    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch, shoeId])

    const shoePage = shoeInfo.map((shoe) => {

        const { colorway, imageUrl, listings, brand, brandType, style, releaseDate } = shoe

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
                <div className='sell-page-image-container'>
                    <img src={imageUrl} alt="shoe" className='sell-page-image'></img>
                </div>

            </>
        )

        let rightContainer = (
            <>
                <div className='right-container-header'>
                    <div className='right-container-header-title'>
                        Select Size
                    </div>
                    <div className='right-container-header-text'>
                        U.S Men's Shoes Lowest Asks
                    </div>
                </div>
                <div className='shoe-size-list-container'>
                    <div className='shoe-size-list'>
                        <AllSizesFunc listings={listings} shoeId={shoeId} />
                    </div>
                </div>
                <div className='right-container-header'>
                    <NavLink to={`/shoe/${shoeId}`}>
                        <button className='cancel-button'> Cancel </button>
                    </NavLink>
                </div>
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

export default ShoePurchasePage;
