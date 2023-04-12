import React, { useEffect, useState } from "react";
import './filterForm.css'


const FilterPrice = ({ setBrandFilter, page, currentPosts, setPriceFilter, priceFilter }) => {

    const [highPrice, setHighPrice] = useState('')
    const [lowPrice, setLowPrice] = useState('')
    const [under100, setUnder100] = useState(false)
    const [between100and500, setbetween100and500] = useState(false)
    const [between500and1000, setbetween500and1000] = useState(false)
    const [between1000and2000, setbetween1000and2000] = useState(false)
    const [over2000, setOver2000] = useState(false)

    useEffect(() => {
        setBrandFilter(filterListings)
    }, [highPrice, lowPrice])

    //create a function that spits out an array of all the listings
    let filterListings = currentPosts
        //use flatMap to combine the arrays returned from the filter method 
        .flatMap((shoe) => (shoe.listings || []).filter((listing) => listing.price <= highPrice && listing.price >= lowPrice))
    // console.log(filterListings)


    let handleChange = (num) => {
        setPriceFilter(true)
        if (num === 1) {
            setUnder100(!under100)
            setLowPrice(0)
            setHighPrice(100)
            page(1)
        } else if (num === 2) {
            setbetween100and500(!between100and500)
            setLowPrice(101)
            setHighPrice(500)
            page(1)
        } else if (num === 3) {
            setbetween500and1000(!between500and1000)
            setLowPrice(501)
            setHighPrice(1000)
            page(1)
        } else if (num === 4) {
            setbetween1000and2000(!between1000and2000)
            setLowPrice(1001)
            setHighPrice(2000)
            page(1)
        } else {
            setOver2000(!over2000)
            setLowPrice(2001)
            setHighPrice(100000)
            page(1)
        }
    }


    return (
        <>
            <div className="filterForm-brands">
                Price:
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        checked={under100}
                        onChange={() => {
                            handleChange(1)
                        }}
                    />
                    <label className="label-spacer"> Under $100 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        checked={between100and500}
                        onChange={() => {
                            handleChange(2)
                        }}
                    />
                    <label className="label-spacer"> $101 - $500 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        checked={between500and1000}
                        onChange={() => {
                            handleChange(3)
                        }}
                    />
                    <label className="label-spacer"> $501 - $1000 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        checked={between1000and2000}
                        onChange={() => {
                            handleChange(4)
                        }}
                    />
                    <label className="label-spacer"> $1001 - $2000 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        checked={over2000}
                        onChange={() => {
                            handleChange(5)
                        }}
                    />
                    <label className="label-spacer"> +$2000 </label>
                </div>
            </div>
        </>
    );


}

export default FilterPrice
