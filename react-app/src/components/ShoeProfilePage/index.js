import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { getAllListingsThunk } from '../../store/listings';
import './ShoeProfilePage.css'


function ShoeProfilePage() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()
    const { shoeId } = useParams();
    const shoeInfo = useSelector(state => Object.values(state.apparel))
    const shoeListings = useSelector(state => Object.values(state.listings))

    // console.log(shoeInfo[0].brand)

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(getAllListingsThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch, shoeId])


    const relatedBrands = shoeListings.map((item) => {
        const { apparelBrand, price, apparelId, apparelName, apparelImg } = item

        if ((apparelBrand === shoeInfo[0].brand) && (apparelId !== shoeInfo[0].id) && (apparelName !== shoeInfo[0].name)) {
            console.log(item)
            if (apparelName !== shoeInfo[0].name) {

                return (
                    <>
                        <div className='mainpage-shoe-containers'>
                            <div className='mainpage-shoe-listing-image-container'>
                                <NavLink to={`/shoe/${apparelId}`}>
                                    <img src={apparelImg} className='mainpage-shoe-listing-image' alt="profile"></img>
                                </NavLink>
                            </div>
                            <div className='mainpage-shoe-text-container'>
                                <div className='mainpage-shoe-name'>
                                    {apparelName}
                                </div>
                                <div>
                                    <div className='mainpage-shoe-lowest-ask'>lowest ask</div>
                                    <strong><div className='mainpage-shoe-lowest-price'>${price}</div></strong>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        }

    })

    console.log(relatedBrands)


    const shoePage = shoeInfo.map((shoe) => {

        const { brand, brandType, colorway, condition, description, id, imageUrl, name, style, retailPrice, releaseDate, listings } = shoe

        let allListings
        if (listings.length > 25) {
            allListings = (
                <div style={{ marginLeft: '8px' }}>
                    There are currently {listings.length} available listings
                </div>
            )
        } else if (listings.length < 24 && listings.length >= 1) {
            allListings = (
                <div style={{ marginLeft: '8px' }}>
                    Only {listings.length} available listings for this shoe!!!
                </div>
            )
        } else {
            allListings = (
                <div style={{ marginLeft: '8px' }}>
                    No available listings for this shoe
                </div>
            )
        }

        let topContainer = (
            <>
                <div className='shoe-profile-top-container'>
                    <div className='shoe-profile-top-left-container'>
                        <div className='shoe-profile-url-header'>
                            Home / Sneakers / {brand} / {brandType} / {name}
                        </div>
                        <div className='shoe-profile-title'>
                            {name}
                        </div>
                        <div className='shoe-profile-colorway'>
                            {colorway}
                        </div>
                        <div className='shoe-profile-condition'>
                            Condtion: {condition}
                        </div>
                        <div className='shoe-profile-image-container'>
                            <img src={imageUrl} alt="shoe image" className='shoe-profile-image' ></img>
                        </div>
                    </div>
                    <div className='shoe-profile-top-right-container'>
                        <div className='shoe-profile-top-right-body-container'>
                            <i class="fa-solid fa-fire"></i>
                            {allListings}
                        </div>
                        <div className='shoe-profile-top-right-body'>
                            <div>
                                <NavLink to={`/shoe/${id}/buy`}>
                                    <button className='shoe-profile-buy-button'> Buy</button>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to={`/shoe/${id}/sell`}>
                                    <button className='shoe-profile-sell-button'> Sell</button>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )



        let relatedProducts = (
            <div className='shoe-profile-related-products-container'>
                <div style={{ marginBottom: '5px' }}>
                    Related Products:
                </div>
                <div className='shoe-profile-related-products' >
                    {relatedBrands}
                </div>



                {/* <div className='shoe-profile-related-products'>
                    <div>
                        img
                    </div>
                    <div>
                        name
                    </div>
                    <div>
                        lowest ask
                    </div>
                    <div>
                        price
                    </div>
                </div> */}
            </div>
        )


        let productDetails = (
            <div className='shoe-profile-product-details-container'>
                <div style={{ marginBottom: '30px', fontWeight: '600' }}>
                    Product Details:
                </div>
                <div className='shoe-profile-product-body-container'>
                    <div className='shoe-profile-product-body-left-container'>
                        <div className='shoe-profile-product-body-left-left-container'>
                            <div>
                                Colorway
                            </div>
                            <div>
                                Retail Price
                            </div>
                            <div>
                                Release Date
                            </div>
                        </div>
                        <div className='shoe-profile-product-body-left-right-container'>
                            <div>
                                {colorway}
                            </div>
                            <div>
                                ${retailPrice}
                            </div>
                            <div>
                                {releaseDate}
                            </div>
                        </div>
                    </div>
                    <div className='shoe-profile-product-body-right-container'>
                        <div style={{ marginBottom: '8px', fontWeight: '550' }}>
                            Product description
                        </div>
                        <div className='shoe-profile-product-description'>
                            {description}
                        </div>
                    </div>
                </div>

            </div>
        )

        let priceHistory = (
            <div>
                Price history
                <div>
                    Graph...?
                </div>
            </div>

        )
        let historalStats = (
            <div className='shoe-profile-stats'>
                <div>
                    Historial stats
                </div>

                <div className='shoe-profile-stats-box-container'>
                    <div className='shoe-profile-stats-box'>
                        12-month Trade Range
                    </div>
                    <div className='shoe-profile-stats-box'>
                        All-Time Trade Range
                    </div>
                    <div className='shoe-profile-stats-box'>
                        Volatility
                    </div>
                    <div className='shoe-profile-stats-box'>
                        Number of Sales
                    </div>
                    <div className='shoe-profile-stats-box'>
                        Price Premium
                    </div>
                    <div className='shoe-profile-stats-box'>
                        Average Sale Price
                    </div>
                </div>

            </div>
        )
        return isLoaded && (
            <div key={id} className='shoe-page-body'>
                <div>
                    {topContainer}
                </div>
                <div>
                    {relatedProducts}
                </div>
                <div>
                    {productDetails}
                </div>
                <div>
                    {priceHistory}
                </div>
                <div>
                    {historalStats}
                </div>
            </div >
        )

    })




    return isLoaded && (
        <div className='shoe-page-body-container'>
            {shoePage}
        </div>
    );
}
export default ShoeProfilePage;
