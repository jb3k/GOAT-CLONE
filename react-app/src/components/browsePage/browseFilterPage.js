import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getAllListingsThunk } from '../../store/listings';
import Footer from '../footer';
import { searchAllApparelThunk } from '../../store/searchbar';
import './BrowsePage.css'
import Pagination from '../pagination';
import FilterForm from './filterForm'
import FilterSize from './filterSize';
import FilterPrice from './filterPrice';
// import { test } from 'mocha';


function BrowseFilterPage() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(16)
    const [brandFilter, setBrandFilter] = useState('')
    const [sizeFilter, setSizeFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState('')
    const { id } = useParams()

    // const sessionUser = useSelector((state) => state.session.user);
    const allListings = useSelector(state => Object.values(state.listings))

    useEffect(() => {
        dispatch(getAllListingsThunk())
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch, brandFilter])

    const sortedShoes = allListings.filter(shoe => new Date() > new Date(shoe.createdAt)).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    const filteredShoes = sortedShoes.filter((shoe) => shoe.size == id)


    let paginationLength
    filteredShoes.length > 0 ? paginationLength = filteredShoes.length : paginationLength = allListings.length

    let lastPostIndex = currentPage * postsPerPage
    let firstPostIndex = lastPostIndex - postsPerPage
    let currentPosts
    filteredShoes.length > 0 ? currentPosts = filteredShoes.slice(firstPostIndex, lastPostIndex) : currentPosts = sortedShoes.slice(firstPostIndex, lastPostIndex)


    const allItems = currentPosts.map((item) => {

        if (!item) return null
        const { apparelImg, apparelName, price, id } = item


        let arr = [price]
        let minPrice = Math.min(...arr)


        let shoes = (
            <>
                <NavLink to={`/shoe/${id}`} style={{ textDecoration: 'none' }}>
                    <div className='mainpage-shoe-containers'>
                        <div className='mainpage-shoe-listing-image-container'>
                            <img src={apparelImg} className='mainpage-shoe-listing-image' alt="profile"></img>
                        </div>
                        <div className='mainpage-shoe-text-container'>
                            <div className='mainpage-shoe-name'>
                                {apparelName}
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
                            <div style={{ marginBottom: '50px' }}>
                                <FilterForm filter={setBrandFilter} page={setCurrentPage} />
                            </div>
                            <div style={{ marginBottom: '50px' }}>
                                <FilterSize filter={setSizeFilter} page={setCurrentPage} />
                            </div>
                            <div style={{ marginBottom: '50px' }}>
                                <FilterPrice filter={setPriceFilter} page={setCurrentPage} apparel={allListings} />
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

export default BrowseFilterPage;
