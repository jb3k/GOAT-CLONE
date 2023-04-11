import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllApparelThunk } from '../../store/apparel';
import './mainpage.css'
import image1 from '../../assets/1.jpeg'
import image2 from '../../assets/2.jpeg'
import image3 from '../../assets/3.jpeg'
import image4 from '../../assets/4.jpeg'
import image5 from '../../assets/5.jpeg'
import ad from '../../assets/ad.png'
import Footer from '../footer';
import { searchAllApparelThunk } from '../../store/searchbar';
import ShoeBox from './ShoesBoxComponent';
import MenuBar from './menubar';


function MainPage() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const allApparel = useSelector(state => Object.values(state.apparel))
    const [imageNumber, setImageNumber] = useState(0)
    const images = [image1, image2, image3, image4, image5]
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(() => {
        dispatch(getAllApparelThunk())
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch])

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setImageNumber((num) => ++num % images.length)
        }, 4000)
        return () => {
            clearInterval(imageInterval)
        }
    }, [images])


    const sortedShoes = allApparel.filter(shoe => new Date() > new Date(shoe.createdAt)).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    const jordanShoes = allApparel.filter((shoe) => shoe.brand === 'Jordan')
    const nikeShoes = allApparel.filter(shoe => shoe.brand.includes('Nike'))


    return isLoaded && (
        <>
            <div className='navbar-spacing'>
                <div>
                    <MenuBar />
                </div>
                <div className='mainpage-body-container'>
                    <div className='mainpage-rotating-img-container'>
                        <img src={images[imageNumber]} className='actual-rotating-image' alt='rotating-shoes'></img>
                    </div>
                    <div className='mainpage-shoe-listing-container'>
                        <div style={{ marginTop: '30px' }}>
                            <strong> Recomended for you:</strong>
                        </div>
                        <div className='test'>
                            <ShoeBox allApparel={sortedShoes} />
                        </div>
                    </div>
                    <div className='mainpage-shoe-listing-container'>
                        <div style={{ marginTop: '30px' }}>
                            <strong> Recently Viewed:</strong>
                        </div>
                        <div className='test'>
                            <ShoeBox allApparel={sortedShoes} />
                        </div>
                    </div>
                    <div className='mainpage-shoe-listing-container'>
                        <div style={{ marginTop: '45px', marginBottom: '30px' }}>
                            <a href='https://www.linkedin.com/in/justin-j-b-kam-4105961a5/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                <img src={ad} className='ad-image' alt='ad'></img>
                            </a>
                        </div>
                    </div>
                    <div className='mainpage-shoe-listing-container'>
                        <div style={{ marginTop: '30px' }}>
                            <strong> Popular Jordan Brand Shoes:</strong>
                        </div>
                        <div className='test'>
                            <ShoeBox allApparel={jordanShoes} />
                        </div>
                    </div>
                    <div className='mainpage-shoe-listing-container' style={{ marginBottom: '100px' }} >
                        <div style={{ marginTop: '30px' }}>
                            <strong> Popular Nike Brand Shoes:</strong>
                        </div>
                        <div className='test'>
                            <ShoeBox allApparel={nikeShoes} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default MainPage;
