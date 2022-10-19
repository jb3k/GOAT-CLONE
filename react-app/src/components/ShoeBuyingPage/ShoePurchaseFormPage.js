import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import ShoeConfirmationPage from './ShoeConfirmationPage';
import { searchAllApparelThunk } from '../../store/searchbar';
import './ShoePurchaseForm.css'


function ShoePurchaseFormPage() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()
    const { shoeId } = useParams();
    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))

    }, [dispatch])



    const shoeImg = shoeInfo.map(item => {

        const { brand, brandType, style, releaseDate, colorway, imageUrl, id } = item


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
                    <img src={imageUrl} alt="shoe" className='shoe-profile-image' ></img>
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
                    <div className='prev-button-container'>
                        <NavLink to={`/shoe/${shoeId}/buy`}>
                            <button className='buy-prev-button'> Prev </button>
                        </NavLink>
                    </div>
                </div>
            </>
        )

    })


    return isLoaded && (
        <>
            <div className='navbar-spacing'>
                <div className='sell-page-main-container'>
                    {shoeImg}
                </div>
            </div>
        </>
    )
}

export default ShoePurchaseFormPage;
