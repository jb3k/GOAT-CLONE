import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { getAllApparelThunk } from '../../store/apparel';
import './mainpage.css'

function MainPage() {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    const allApparel = useSelector(state => Object.values(state.apparel))
    // console.log(allApparel)


    useEffect(() => {
        dispatch(getAllApparelThunk())
    }, [dispatch])

    const allItems = allApparel.map((item) => {

        if (!item) return null

        const { imageUrl, name, listings } = item

        let arr = []
        const filterListing = listings.forEach((price) => {
            arr.push(price.price)
        })
        let minPrice = Math.min(...arr)

        let shoes = (
            <div className='mainpage-shoe-listing-container'>
                <div classname='mainpage-shoe-listing-image-container'>
                    <img src={imageUrl} classname='mainpage-shoe-listing-image' alt="profile"></img>
                </div>
                <div>
                    <h5>{name}</h5>
                </div>
                <div>
                    <div>lowest ask</div>
                    <div>{minPrice}</div>

                </div>
                <div>
                    last sale:
                </div>
            </div>
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
                <h1>This will be the header</h1>
            </div>
            <div>
                {allItems}
            </div>


        </>
    )

}

export default MainPage;
