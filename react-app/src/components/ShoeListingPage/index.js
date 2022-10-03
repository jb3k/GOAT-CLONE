import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { getAllListingsThunk } from '../../store/listings';
// import ShoePurchasePage from './ShoePurchase';
// import ShoeReviewPage from './ShoeReview';
// import ShoeSizePage from './ShoeSize';
import './page1.css'


function ShoeListingPage() {
    const dispatch = useDispatch()

    const { shoeId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false)

    const shoeInfo = useSelector(state => Object.values(state.apparel))
    const listingInfo = useSelector(state => Object.values(state.listings))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(getAllListingsThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch])

    const shoePage = shoeInfo.map((shoe) => {

        const { colorway, imageUrl, name, listings } = shoe

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

        // let currList
        // let currentListing = listings.forEach(ele => {
        //     console.log(ele)

        // })

        const allShoeSizes = () => {
            let allsizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18]

            let priceList = {}

            const eachListing = listingInfo.map(list => {
                const { apparelId, price, size, id } = list
                if (apparelId == shoeId) {
                    priceList[size] = price
                }
            })


            let priceListArr = Object.keys(priceList)

            // console.log(priceListArr)

            const list = []
            allsizes.forEach((item1) => {

                list.push(<div className='size-price-container'>
                    <Link to={`/shoe/${shoeId}/sell/${item1}`} style={{ textDecoration: 'none' }}>
                        <div>
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
                    <div>
                        <p>Select Size</p>
                        U.S. Men's Shoes
                    </div>
                </div>
                <div className='shoe-size-list-container'>
                    <div className='shoe-size-list'>
                        {allShoeSizes()}
                    </div>
                </div>
                <div>
                    <NavLink to='/'>
                        <button> Cancel </button>
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

export default ShoeListingPage;
