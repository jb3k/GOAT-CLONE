import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllApparelThunk } from '../../store/apparel';
import { getAllListingsThunk } from '../../store/listings';
import Footer from '../footer';
import { searchAllApparelThunk } from '../../store/searchbar';
import './BrowsePage.css'
import Pagination from '../pagination';
import FilterForm from './filterForm'
import FilterSize from './filterSize';
import FilterPrice from './filterPrice';
import ShoeList from './shoeList';


function BrowsePage() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(16)
    const [brandFilter, setBrandFilter] = useState([])
    const [sizeFilter, setSizeFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState('')

    const allApparel = useSelector(state => Object.values(state.apparel))
    const allListings = useSelector(state => Object.values(state.listings))

    useEffect(() => {
        dispatch(getAllApparelThunk())
        dispatch(getAllListingsThunk())
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch, brandFilter])

    const sortedShoes = allApparel.filter(shoe => new Date() > new Date(shoe.createdAt)).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))


    let paginationLength
    brandFilter.length > 0 ? paginationLength = brandFilter.length : paginationLength = allApparel.length


    let lastPostIndex = currentPage * postsPerPage
    let firstPostIndex = lastPostIndex - postsPerPage

    let test
    brandFilter.length > 0 ? test = brandFilter : test = sortedShoes

    let currentPosts
    brandFilter.length > 0 ? currentPosts = brandFilter?.slice(firstPostIndex, lastPostIndex) : currentPosts = sortedShoes.slice(firstPostIndex, lastPostIndex)


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
                                <FilterForm page={setCurrentPage} allApparel={sortedShoes} setBrandFilter={setBrandFilter} />
                            </div>
                            <div style={{ marginBottom: '50px' }}>
                                <FilterSize filter={setBrandFilter} page={setCurrentPage} currentPosts={test} />
                            </div>
                            <div style={{ marginBottom: '50px' }}>
                                <FilterPrice filter={setBrandFilter} page={setCurrentPage} currentPosts={test} />
                            </div>
                        </div>
                        <div className='browsepage-grid'>
                            <ShoeList currentPosts={currentPosts} />
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
