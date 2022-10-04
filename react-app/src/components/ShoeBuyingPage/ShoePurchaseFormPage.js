import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { getAllListingsThunk } from '../../store/listings';
import ShoePurchaseForm from './ShoePurchaseForm';
import ShoeConfirmationPage from './ShoeConfirmationPage';
import { getUserPurchasesThunk } from '../../store/purchase';


function ShoePurchaseFormPage() {
    const dispatch = useDispatch()


    const [shoeListingId, setShoeListingId] = useState(null)


    const [shoeSelected, setShoeSelected] = useState(false)



    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()
    const { shoeId, space, sizeId } = useParams();
    const shoeInfo = useSelector(state => Object.values(state.apparel))
    // const userInfo = useSelector(state => Object.values(state.purchase))
    // const listingInfo = useSelector(state => Object.values(state.listings))
    // const info = useSelector(state => state.listings)


    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(getUserPurchasesThunk())
            // dispatch(getAllListingsThunk())
            .then(() => setIsLoaded(true))

    }, [dispatch])



    const shoeImg = shoeInfo.map(item => {

        const { brand, brandType, style, releaseDate, colorway, imageUrl, name, id, listings } = item

        // let listingFilter = listings.map(ele => {
        //     // console.log(ele)
        //     const { id, size, price, apparelId } = ele
        //     let filtered
        //     if (parseInt(shoeId) === apparelId && parseInt(sizeId) === size) {
        //         filtered = (
        //             <>
        //                 <option value={id}> Size: {size} ${price}</option>
        //             </>
        //         )
        //     }
        //     return (
        //         <>
        //             {filtered}
        //         </>
        //     )

        // })



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
                    <img src={imageUrl} alt="shoe image" className='shoe-profile-image' ></img>
                </div>
            </>
        )

        return (
            <>
                <div key={id} className='sell-page-left-container'>
                    {leftContainer}
                </div>
                <div className='sell-page-right-container'>
                    <div>
                        <ShoeConfirmationPage />
                    </div>
                    <div>
                        <NavLink to={`/shoe/${shoeId}/buy`}>
                            <button className='prev-button'> Prev </button>
                        </NavLink>
                    </div>
                </div>
            </>
        )

    })


    return isLoaded && (
        <>
            <div className='sell-page-main-container'>
                {shoeImg}
            </div>
        </>
    )
}

export default ShoePurchaseFormPage;


{/* <div>
<select
    onChange={(e) => {
        if (e.target.value === 0) {
            setShoeSelected(false)
        }
        setShoeSelected(true)
    }}
>
    <option value={0}> Select </option>
    { shoeSelected && <ShoeConfirmationPage/> && listingFilter}
</select>
</div> */}
