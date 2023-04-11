import React, { useState, useEffect } from "react";
import './filterSize.css'


const FilterSize = ({ setBrandFilter, page, currentPosts }) => {

    const [size, setSize] = useState('')

    useEffect(() => {
        setBrandFilter(filterFunc())
    }, [size])


    //create a function that spits out an array of all the listings
    const filterFunc = () => {
        let filterListings = []
        for (let i = 0; i < currentPosts.length; i++) {
            let shoe = currentPosts[i]
            if (shoe.listings) {
                for (let listing of shoe.listings) {
                    if (listing.size === size) {
                        filterListings.push(shoe)
                        break
                    }
                }
            }
        }
        return filterListings
    }

    const handleSize = (data) => {
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
