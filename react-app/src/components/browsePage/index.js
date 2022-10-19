import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllApparelThunk } from '../../store/apparel';
import Footer from '../footer';
import { searchAllApparelThunk } from '../../store/searchbar';
import './BrowsePage.css'


function BrowsePage() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const sessionUser = useSelector((state) => state.session.user);
    const allApparel = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getAllApparelThunk())
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch])


    const allItems = allApparel.map((item) => {

        if (!item) return null
        const { imageUrl, name, listings, id } = item


        let arr = []
        if (listings.length === 0) arr.push(0)
        const filterListing = listings.forEach((shoe) => { arr.push(shoe.price) })
        let minPrice = Math.min(...arr)

        let shoes = (
            <>
                <NavLink to={`/shoe/${id}`} style={{ textDecoration: 'none' }}>
                    <div className='mainpage-shoe-containers'>
                        <div className='mainpage-shoe-listing-image-container'>
                            <img src={imageUrl} className='mainpage-shoe-listing-image' alt="profile"></img>
                        </div>
                        <div className='mainpage-shoe-text-container'>
                            <div className='mainpage-shoe-name'>
                                {name}
                            </div>
                            <div>
                                <div className='mainpage-shoe-lowest-ask'>lowest ask</div>
                                <strong><div className='mainpage-shoe-lowest-price'>{minPrice > 0 ? `$${minPrice}` : 'Sold out'}</div></strong>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </>
        )
        return (
            <div key={id}>
                {shoes}
            </div>
        )
    })

    return isLoaded && (
        <>
            <div className='navbar-spacing'>
                <div className='mainpage-body-container'>
                    <div className='mainpage-shoe-listing-container'>
                        <div style={{ marginTop: '30px' }}>
                            <strong> Search All:</strong>
                        </div>
                        <div className='browse-page'>
                            {allItems}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default BrowsePage;
