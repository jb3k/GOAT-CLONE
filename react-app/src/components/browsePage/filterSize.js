import React, { useState, useEffect } from "react";
import './filterSize.css'


const FilterSize = ({ size, setSize, setBrandFilter, page, currentPosts, filterTags, setFilterTags }) => {

    const [sizeArr, setSizeArr] = useState([])

    useEffect(() => {
        setBrandFilter(filterFunc())
    }, [size, filterTags])


    //create a function that spits out an array of all the listings
    const filterFunc = () => {
        const filteredListings = currentPosts
            .filter((shoe) => shoe.listings) // only keep items with a listings property
            .filter((shoe) => shoe.listings.some((listing) => listing.size === size)) // only keep items with a listing of the desired size
            .map((shoe) => ({ ...shoe, listings: shoe.listings.filter((listing) => listing.size === size) })); // create a new array that only contains listings of the desired size

        return filteredListings;

    }

    const handleSize = (data) => {
        let prev
        if (sizeArr.length >= 1) {
            prev = sizeArr.shift()
            setSizeArr([...sizeArr, data])
        }
        setSizeArr([...sizeArr, data])
        if (filterTags.has(prev)) {
            filterTags.delete(prev)
            setFilterTags(filterTags.add(data))
        }
        setFilterTags(filterTags.add(data))
        setSize(data)
        page(1)
    }


    const shoeSizes = () => {

        let sizeArr = []
        for (let i = 3; i <= 18; i++) {
            sizeArr.push(
                <input
                    className={size === i ? "filterSize-brands-checked" : "filterSize-brands"}
                    type="button"
                    value={i}
                    onClick={() => {
                        handleSize(i)
                    }}
                />
            )
        }

        return (
            <>
                {sizeArr}
            </>
        )

    }


    return (
        <>
            <div className="filterForm-brands">
                Size:
                <div className="filterSize-box" >
                    {shoeSizes()}
                </div>
                {size !== '' && <div className="reset-button"
                    onClick={() => {
                        setSize('')
                    }}
                >
                    <i class="fa-solid fa-xmark" style={{ fontSize: '20px', marginRight: '10px', marginTop: '2px' }}></i>
                    Reset Size
                </div>}
            </div>
        </>
    );


}

export default FilterSize
