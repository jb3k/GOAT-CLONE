import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import ShoePurchasePage from './ShoePurchase';
import ShoeReviewPage from './ShoeReview';
import ShoeSizePage from './ShoeSize';
import './page1.css'


function ShoeListingPage() {
    const dispatch = useDispatch()

    const { shoeId } = useParams();

    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
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

        let listPrice
        let listSize
        const listingPrice = listings.map((listing) => { const { price, size } = listing; listPrice = price; listSize = size })

        console.log(listPrice)

        const allShoeSizes = () => {
            let allsizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18]

            const list = []
            allsizes.forEach((item) => {
                list.push(<a className='size-price-container'
                >
                    {`${item}`}
                </a>)
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
                        <h1> Select Size </h1>
                        U.S. Men's Shoes
                    </div>
                </div>
                <div className='shoe-size-list-container'>
                    <div className='shoe-size-list'>
                        {allShoeSizes()}
                    </div>
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

    return (
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
