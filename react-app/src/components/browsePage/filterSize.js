import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './filterForm.css'
import './filterSize.css'


const FilterSize = ({ filter, page, currentPosts }) => {

    const [size, setSize] = useState('')

    useEffect(() => {
        filter(filterListings)
    }, [size])


    //create a function that spits out an array of all the listings
    let filterListings = []
    for (let i = 0; i < currentPosts.length; i++) {
        let shoe = currentPosts[i]
        // console.log(shoe)
        for (let listing of shoe.listings) {
            if (listing.size === size) {
                filterListings.push(shoe)
                break
            }
        }
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
                        setSize(i)
                        page(1)
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
                <button onClick={() => {
                    setSize('')
                }}
                    hidden={size === ''}
                > Reset Size</button>
            </div>
        </>
    );


}

export default FilterSize
