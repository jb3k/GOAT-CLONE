import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"
import { getAllApparelThunk } from '../../../store/apparel';
import { getAllListingsThunk } from '../../../store/listings';
import Footer from '../../footer';
import { searchAllApparelThunk } from '../../../store/searchbar';
import '../BrowsePage.css'
import Pagination from '../../pagination';
// import FilterForm from '../filterForm'
import FilterForm from '../tester';
import FilterSize from '../filterSize';
import FilterPrice from '../filterPrice';
import ShoeList from '../shoeList';
// import { test } from 'mocha';


function BrowsePageBrand() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(16)
    // const [brandFilter, setBrandFilter] = useState('')
    const [sizeFilter, setSizeFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState('')
    const { brand } = useParams()

    // const sessionUser = useSelector((state) => state.session.user);
    const allApparel = useSelector(state => Object.values(state.apparel))
    const allListings = useSelector(state => Object.values(state.listings))
    // console.log(allApparel)
    useEffect(() => {
        dispatch(getAllApparelThunk())
        dispatch(getAllListingsThunk())
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch, brand])


    // sorting the shoes by date
    const sortedShoes = allApparel.filter(shoe => new Date() > new Date(shoe.createdAt)).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    // filtering the shoes based off the brand in the param
    const filteredShoes = sortedShoes.filter(shoe => shoe.brand === brand)
    //pagination
    let paginationLength = filteredShoes.length
    let lastPostIndex = currentPage * postsPerPage
    let firstPostIndex = lastPostIndex - postsPerPage
    //current posts that should be displayed on each page
    let currentPosts = filteredShoes.slice(firstPostIndex, lastPostIndex)


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
                                <FilterForm page={setCurrentPage} />
                            </div>
                            <div style={{ marginBottom: '50px' }}>
                                <FilterSize filter={setSizeFilter} page={setCurrentPage} allListings={allListings} />
                            </div>
                            <div style={{ marginBottom: '50px' }}>
                                <FilterPrice filter={setPriceFilter} page={setCurrentPage} allListings={allListings} />
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

export default BrowsePageBrand;
