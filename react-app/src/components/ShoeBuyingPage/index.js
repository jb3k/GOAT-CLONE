import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { getAllListingsThunk } from '../../store/listings';
// import ShoePurchasePage from './ShoePurchase';
// import ShoeReviewPage from './ShoeReview';
// import ShoeSizePage from './ShoeSize';


function ShoePurchasePage() {
    const dispatch = useDispatch()

    const { shoeId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false)

    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
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
            let allsizes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
            const list = []

            allsizes.forEach((item1) => {

                list.push(<div className='size-price-container'>
                    <Link to={`/shoe/${shoeId}/buy/${item1}`} style={{ textDecoration: 'none' }}>
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

export default ShoePurchasePage;
