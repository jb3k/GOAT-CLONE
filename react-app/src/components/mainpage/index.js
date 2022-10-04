import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getAllApparelThunk } from '../../store/apparel';
import './mainpage.css'

function MainPage() {
    const dispatch = useDispatch();
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    // const sessionUser = useSelector((state) => state.session.user);
    const allApparel = useSelector(state => Object.values(state.apparel))
    // console.log(allApparel)


    useEffect(() => {
        dispatch(getAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch])

    const allItems = allApparel.map((item) => {

        if (!item) return null

        const { imageUrl, name, listings, id } = item

        let arr = []
        const filterListing = listings.forEach((price) => {
            arr.push(price.price)
        })
        let minPrice = Math.min(...arr)

        let shoes = (
            <>
                <div className='mainpage-shoe-containers'>
                    <div className='mainpage-shoe-listing-image-container'>
                        <NavLink to={`/shoe/${id}`}>
                            <img src={imageUrl} className='mainpage-shoe-listing-image' alt="profile"></img>
                        </NavLink>
                    </div>
                    <div className='mainpage-shoe-name'>
                        {name}
                    </div>
                    <div>
                        <div className='mainpage-shoe-lowest-ask'>lowest ask</div>
                        <strong><div className='mainpage-shoe-lowest-price'>${minPrice}</div></strong>
                    </div>
                    {/* <div>
                        last sale:
                    </div> */}
                </div>
            </>
        )


        return (

            <>
                {shoes}
            </>
        )


    })



    return (
        <>
            <div>
                <h1 className='mainpage-header'>This will be the header</h1>
            </div>
            <div className='mainpage-body-container'>
                <div>
                    BIG IMAGE HERE
                </div>
                <div className='mainpage-shoe-listing-container'>
                    <div>
                        Recomended for you:
                    </div>
                    <div className='test'>
                        {allItems}
                    </div>
                </div>

            </div>
        </>
    )

}

export default MainPage;
