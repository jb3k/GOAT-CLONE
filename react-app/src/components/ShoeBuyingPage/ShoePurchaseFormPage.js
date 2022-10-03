import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import { getListingThunk } from '../../store/listings';
import ShoePurchaseForm from './ShoePurchaseForm';
import ShoeConfirmationPage from './ShoeConfirmationPage';
import { getUserPurchasesThunk } from '../../store/purchase';


function ShoePurchaseFormPage() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()
    const { shoeId, space, sizeId } = useParams();
    const shoeInfo = useSelector(state => Object.values(state.apparel))
    const userInfo = useSelector(state => Object.values(state.purchase))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(getUserPurchasesThunk())
            .then(() => setIsLoaded(true))

    }, [dispatch])


    const formPages = () => {
        let userAddy
        let userCity
        let userState
        let userZip
        const stuff = userInfo.map(ele => {
            const { address, city, state, country, zipcode } = ele
            userAddy = address
            userCity = city
            userState = state
            userZip = zipcode

        })

        



        if (page === 0) {
            return <ShoePurchaseForm userAddy={userAddy} userCity={userCity} userState={userState} userZip={userZip} />
        } else {
            return <ShoeConfirmationPage userAddy={userAddy} userCity={userCity} userState={userState} userZip={userZip} />
        }
    }


    const shoeImg = shoeInfo.map(item => {

        const { name, imageUrl, colorway } = item

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
                <div>
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
                    <div >{formPages()}</div>
                    <div >
                        <button
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => {
                                if (page === 1) {
                                    alert('Purchase submitted')
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                        >
                            {page === 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoePurchaseFormPage;
