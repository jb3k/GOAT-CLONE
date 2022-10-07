import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
// import { getAllListingsThunk } from '../../store/listings';
// import ShoePurchasePage from './ShoePurchase';
// import ShoeReviewPage from './ShoeReview';
// import ShoeSizePage from './ShoeSize';


function ShoePurchasePage() {
    const dispatch = useDispatch()

    const { shoeId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false)
    // const [shoeListing, setShoeListing] = useState(0)
    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    const shoePage = shoeInfo.map((shoe) => {

        const { colorway, imageUrl, name, listings, brand, brandType, style, releaseDate } = shoe

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

        // let currList
        // let currentListing = listings.forEach(ele => {
        //     console.log(ele)

        // })

        const allShoeSizes = () => {
            let allsizes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
            const list = []
            let priceList = {}
            const eachListing = listings.map(list => {
                const { apparelId, price, size, id } = list


                if (apparelId == shoeId) {
                    priceList[size] = price
                }
            })
            let priceListArr = Object.keys(priceList)

            allsizes.forEach((item1) => {
                priceListArr.forEach((item2) => {
                    if (item1 == item2) {
                        list.push(
                            <Link to={`/shoe/${shoeId}/buy/${item1}`} style={{ textDecoration: 'none' }}>
                                <div className='size-price-container'>
                                    <div>
                                        {item1}
                                    </div>
                                    <div className='size-price-container-price'>
                                        {`$${priceList[`${item1}`]}`}
                                    </div>
                                </div>
                            </Link>
                        )
                    }

                })
                if (!priceList[`${item1}`]) {
                    list.push(<div className='size-price-container'>
                        <div>
                            {item1}
                        </div>
                        <div className='size-price-container-price'>
                            Sold Out
                        </div>
                    </div>
                    )
                }
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
            <div>
                <div className='sell-page-main-container'>
                    {shoePage}
                </div>
            </div>
        </>
    )
}

export default ShoePurchasePage;
