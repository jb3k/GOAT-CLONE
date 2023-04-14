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
import TagFilter from './tagFilter';


function BrowsePage() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(16)
    const [brandFilter, setBrandFilter] = useState([])
    const [filterTags, setFilterTags] = useState(new Set())
    const [jordan, setJordan] = useState(false)
    const [nike, setNike] = useState(false)
    const [adidas, setAdidas] = useState(false)
    const [size, setSize] = useState('')
    const [sizeFilter, setSizeFilter] = useState([])
    // const [priceFilter, setPriceFilter] = useState(false)


    const allApparel = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getAllApparelThunk())
        dispatch(searchAllApparelThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch, brandFilter, filterTags])

    const sortedShoes = allApparel.filter(shoe => new Date() > new Date(shoe.createdAt)).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    let lastPostIndex = currentPage * postsPerPage
    let firstPostIndex = lastPostIndex - postsPerPage

    let test
    let combine = (one, two) => {
        let arr = [...one, ...two]
        //need to add the length conditionals because if not, a blank arr is considered truthy
        if (one && two && one.length > 0 && two.length > 0) {
            const id1 = one.map(shoe => shoe.id)
            const id2 = two.map(shoe => shoe.id)
            const unique = id1.filter(id => id2.includes(id))
            arr = one.filter(shoe => unique.includes(shoe.id))
            return arr
        } else {
            return arr
        }
    }
    //combine both filtered arrays
    let combined = combine(brandFilter, sizeFilter)
    combined.length > 0 ? test = combined : test = []
    // create the amount of pages in the pagination
    let paginationLength
    combined.length > 0 ? paginationLength = combined.length : paginationLength = allApparel.length
    // slice the posts based on the page
    let currentPosts
    test.length > 0 ? currentPosts = test.slice(firstPostIndex, lastPostIndex) : currentPosts = []



    return isLoaded && (
        <>
            <div className='navbar-spacing'>
                <div className='browsepage-body-container'>
                    <div className='browsepage-header'>
                        <h2 style={{ marginLeft: '30px' }}> Sneakers</h2>
                        <p className='browsepage-header-text'>
                            Every sneaker you want is always available and verified by StockY. Buy and sell new sneakers & shoes from Jordan, Adidas, Nike, Yeezy and more!
                        </p>
                    </div>
                    <TagFilter filterTags={filterTags} jordan={jordan} setJordan={setJordan} nike={nike} setNike={setNike} adidas={adidas} setAdidas={setAdidas} size={size} setSize={setSize} />
                    <div className='browsepage-body'>
                        <div className='browsepage-filter'>
                            <div style={{ marginBottom: '50px' }}>
                                <FilterForm page={setCurrentPage} allApparel={sortedShoes} setBrandFilter={setBrandFilter} filterTags={filterTags} setFilterTags={setFilterTags} jordan={jordan} setJordan={setJordan} nike={nike} setNike={setNike} adidas={adidas} setAdidas={setAdidas} />
                            </div>
                            <div style={{ marginBottom: '50px' }}>
                                <FilterSize size={size} setSize={setSize} setBrandFilter={setSizeFilter} page={setCurrentPage} currentPosts={sortedShoes} filterTags={filterTags} setFilterTags={setFilterTags} />
                            </div>
                            {/* <div style={{ marginBottom: '50px' }}>
                                <FilterPrice setBrandFilter={setBrandFilter} page={setCurrentPage} currentPosts={test} setPriceFilter={setPriceFilter} priceFilter={priceFilter} />
                            </div> */}
                        </div>
                        <div className='browsepage-grid'>
                            <ShoeList currentPosts={currentPosts} filterTags={filterTags} allApparel={sortedShoes} />
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
