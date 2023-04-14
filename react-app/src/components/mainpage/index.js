import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllApparelThunk } from '../../store/apparel';
import { NavLink } from 'react-router-dom';
import './mainpage.css'
import ad from '../../assets/ad.png'
import Footer from '../footer';
import { searchAllApparelThunk } from '../../store/searchbar';
import ShoeBox from './ShoesBoxComponent';
import MenuBar from './menubar';
import RotatingImage from './rotatingImg';


function MainPage() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const allApparel = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getAllApparelThunk())
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch])


    const sortedShoes = allApparel.filter(shoe => new Date() > new Date(shoe.createdAt)).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    const jordanShoes = allApparel.filter((shoe) => shoe.brand === 'Jordan')
    const nikeShoes = allApparel.filter(shoe => shoe.brand.includes('Nike'))
    const [recentlyViewed, setRecentlyViewed] = useState(sortedShoes.slice(4, 10));



    return isLoaded && (
        <>
            <div className='navbar-spacing'>
                <div>
                    <MenuBar />
                </div>
                <div className='mainpage-body-container'>
                    <RotatingImage />
                    <div className='mainpage-shoe-listing-container'>
                        <div className='mainpage-shoe-listing-title'>
                            <div>
                                <strong> Recomended for you:</strong>
                            </div>
                            <div className='see-all-button-container'>
                                <NavLink to={'/shoes'} className='see-all-button' >
                                    See All <i class="fa-solid fa-arrow-right"></i>
                                </NavLink>
                            </div>
                        </div>
                        <div className='shoe-container'>
                            <ShoeBox allApparel={sortedShoes} recentlyViewed={recentlyViewed} setRecentlyViewed={setRecentlyViewed} />
                        </div>
                    </div>
                    <div className='mainpage-shoe-listing-container'>
                        <div className='mainpage-shoe-listing-title'>
                            <strong> Recently Viewed:</strong>
                        </div>
                        <div className='shoe-container'>
                            <ShoeBox allApparel={recentlyViewed} recentlyViewed={recentlyViewed} setRecentlyViewed={setRecentlyViewed} />
                        </div>
                    </div>
                    <div className='ad'>
                        <a href='https://www.linkedin.com/in/justin-j-b-kam-4105961a5/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                            <img src={ad} className='ad-image' alt='ad'></img>
                        </a>
                    </div>
                    <div className='mainpage-shoe-listing-container'>
                        <div className='mainpage-shoe-listing-title'>
                            <div>
                                <strong> Popular Jordan Brand Shoes:</strong>
                            </div>
                            <div className='see-all-button-container'>
                                <NavLink to={'/shoes'} className='see-all-button' >
                                    See All <i class="fa-solid fa-arrow-right"></i>
                                </NavLink>
                            </div>
                        </div>
                        <div className='shoe-container'>
                            <ShoeBox allApparel={jordanShoes} recentlyViewed={recentlyViewed} setRecentlyViewed={setRecentlyViewed} />
                        </div>
                    </div>
                    <div className='mainpage-shoe-listing-container' style={{ marginBottom: '100px' }} >
                        <div className='mainpage-shoe-listing-title'>
                            <div>
                                <strong> Popular Nike Brand Shoes:</strong>
                            </div>
                            <div className='see-all-button-container'>
                                <NavLink to={'/shoes'} className='see-all-button' >
                                    See All <i class="fa-solid fa-arrow-right"></i>
                                </NavLink>
                            </div>
                        </div>
                        <div className='shoe-container'>
                            <ShoeBox allApparel={nikeShoes} recentlyViewed={recentlyViewed} setRecentlyViewed={setRecentlyViewed} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default MainPage;
