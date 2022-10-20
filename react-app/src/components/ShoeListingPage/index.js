import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { searchAllApparelThunk } from '../../store/searchbar';
// import ShoePurchasePage from './ShoePurchase';
// import ShoeReviewPage from './ShoeReview';
// import ShoeSizePage from './ShoeSize';
import './page1.css'


function ShoeListingPage() {
    const dispatch = useDispatch()

    const { shoeId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false)

    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch])

    const shoePage = shoeInfo.map((shoe) => {

        const { colorway, imageUrl, brand, brandType, style, listings, releaseDate } = shoe

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

        const allShoeSizes = () => {
            let allsizes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

            const list = []
            allsizes.forEach((item1) => {
                list.push(<div className='size-price-container'>
                    <Link to={`/shoe/${shoeId}/sell/${item1}`} style={{ textDecoration: 'none' }}>
                        <div className='tester'>
                            {item1}
                        </div>
                    </Link>
                </div>
                )
            })
            return (
                <>
                    {list}
                </>
            )
        }

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
                        {allShoeSizes()}
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

export default ShoeListingPage;
