import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllApparelThunk } from '../../store/apparel';
import './mainpage.css'
import image1 from '../../assets/1.jpeg'
import image2 from '../../assets/2.jpeg'
import image3 from '../../assets/3.jpeg'
import image4 from '../../assets/4.jpeg'
import image5 from '../../assets/5.jpeg'
import Footer from '../footer';



function MainPage() {
    const dispatch = useDispatch();
    // const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    const sessionUser = useSelector((state) => state.session.user);
    const allApparel = useSelector(state => Object.values(state.apparel))
    // console.log(allApparel)
    const [imageNumber, setImageNumber] = useState(0)
    const images = [image1, image2, image3, image4, image5
        // <img src={image1} className='actual-rotating-image'></img>,
        // <img src={image2} className='actual-rotating-image'></img>,
        // <img src={image3} className='actual-rotating-image'></img>,
        // <img src={image4} className='actual-rotating-image'></img>,
        // <img src={image5} className='actual-rotating-image'></img>
    ]

    useEffect(() => {
        dispatch(getAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch])


    useEffect(() => {
        const imageInterval = setInterval(() => {
            setImageNumber((num) => ++num % images.length)
        }, 4000)

        return () => {
            clearInterval(imageInterval)
        }

    }, [])

    const allItems = allApparel.map((item) => {

        if (!item) return null

        const { imageUrl, name, listings, id } = item

        let arr = []
        if (listings.length === 0) {
            arr.push(0)
        }
        const filterListing = listings.forEach((price) => {
            arr.push(price.price)
        })
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
                            {/* <div>
                        last sale:
                    </div> */}
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


    let header
    if (!sessionUser) {
        header = (
            <>
                <h2 className='mainpage-header'></h2>
            </>
        )
    } else {
        header = (
            <>
                <h2 className='mainpage-header'> Welcome, {sessionUser.firstName} {sessionUser.lastName}</h2>
            </>
        )
    }

    return isLoaded && (
        <>
            <div>
                {header}
            </div>
            <div className='mainpage-body-container'>
                <div className='mainpage-shoe-listing-container'>
                    <strong> Trending Shoes:</strong>
                </div>
                <div className='mainpage-rotating-img-container'>
                    <img src={images[imageNumber]} className='actual-rotating-image'></img>
                    {/* <div className='mainpage-rotating-img' style={{ backgroundImage: `url(${images[imageNumber]})` }}>
                    </div> */}
                </div>
                <div className='mainpage-shoe-listing-container'>
                    <div style={{ marginTop: '30px' }}>
                        <strong> Recomended for you:</strong>
                    </div>
                    <div className='test'>
                        {allItems}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default MainPage;
