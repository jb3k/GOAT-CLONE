import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
            <div className='mainpage-shoe-listing-container'>
                <div classname='mainpage-shoe-listing-image-container'>
                    <img src={imageUrl} classname='mainpage-shoe-listing-image' alt="profile" onClick={() => history.push(`/shoe/${id}`)}></img>
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
