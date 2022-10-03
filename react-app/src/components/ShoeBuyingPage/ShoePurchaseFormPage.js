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
    const userInfo = useSelector(state => Object.values(state.purchase))
    const listingInfo = useSelector(state => Object.values(state.listings))
    const info = useSelector(state => state.listings)


    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(getUserPurchasesThunk())
        dispatch(getAllListingsThunk())
            .then(() => setIsLoaded(true))

    }, [dispatch])



    let listingFilter = listingInfo.map(ele => {
        const { id, size, price, apparelId } = ele

        let filtered
        if (parseInt(shoeId) === apparelId && parseInt(sizeId) === size) {
            filtered = (
                <>
                    <option value={id}> Size: {size} ${price}</option>
                </>
            )
        }
        return (
            <>
                {filtered}
            </>
        )

    })


    const shoeImg = shoeInfo.map(item => {

        const { name, imageUrl, colorway, id } = item

        let leftContainer = (
            <>
                <div>
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

        return (
            <>
                <div key={id}>
                    {leftContainer}
                </div>
            </>
        )

    })


    return isLoaded && (
        <>
            <div className='sell-page-main-container'>
                <div>
                    {shoeImg}
                </div>
                <div>
                    <div>
                        <label> Shoes </label>
                        <select onChange={(e) => {
                            setShoeListingId(e.target.value)
                            setShoeSelected(true)
                        }} >
                            <option> Select </option>
                            {listingFilter}
                        </select>
                    </div>
                    {shoeSelected && <ShoeConfirmationPage listingId={shoeListingId} />}

                </div>
            </div>
        </>
    )
}

export default ShoePurchaseFormPage;
