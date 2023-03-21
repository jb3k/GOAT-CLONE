import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllApparelThunk } from '../../store/apparel';
import Footer from '../footer';
import { searchAllApparelThunk } from '../../store/searchbar';
import './BrowsePage.css'
import Pagination from '../pagination';
import FilterForm from './filterForm'
// import { test } from 'mocha';


function BrowsePage({ headerTag }) {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(16)
    const [filter, setFilter] = useState('')

    // const sessionUser = useSelector((state) => state.session.user);
    const allApparel = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getAllApparelThunk())
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch, filter])

    const sortedShoes = allApparel.filter(shoe => new Date() > new Date(shoe.createdAt)).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    let formFilter = (data) => {
        if (filter) {
            if (data.brand === filter) {
                return true
            }
        }
        return false
    }

    const filteredShoes = sortedShoes.filter(formFilter)

    let paginationLength
    filteredShoes.length > 0 ? paginationLength = filteredShoes.length : paginationLength = allApparel.length

    let lastPostIndex = currentPage * postsPerPage
    let firstPostIndex = lastPostIndex - postsPerPage
    let currentPosts
    filteredShoes.length > 0 ? currentPosts = filteredShoes.slice(firstPostIndex, lastPostIndex) : currentPosts = sortedShoes.slice(firstPostIndex, lastPostIndex)


    const allItems = currentPosts.map((item) => {

        if (!item) return null
        const { imageUrl, name, listings, id, brand } = item



        let arr = []
        if (listings.length === 0) arr.push(0)
        listings.forEach((shoe) => { arr.push(shoe.price) })
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
                <div className='browsepage-body-container'>
                    <div className='browsepage-header'>
                        <h2 style={{ marginLeft: '30px' }}> Sneakers</h2>
                        <p className='browsepage-header-text'>
                            Every sneaker you want is always available and verified by StockY. Buy and sell new sneakers & shoes from Jordan, adidas, Nike, Yeezy and more!
                        </p>
                    </div>
                    <div className='browsepage-body'>
                        <div className='browsepage-filter'>
                            <div>
                                <FilterForm filter={setFilter} page={setCurrentPage} />
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className='browsepage-grid'>
                            {allItems}
                        </div>
                    </div>
                    <div>
                        <Pagination totalPosts={paginationLength} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )

}

export default BrowsePage;
