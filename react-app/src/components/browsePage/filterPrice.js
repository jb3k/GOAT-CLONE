import React, { useEffect, useState } from "react";
import './filterForm.css'


const FilterPrice = ({ filter, page, currentPosts, setPriceFilter, priceFilter }) => {

    const [highPrice, setHighPrice] = useState('')
    const [lowPrice, setLowPrice] = useState('')
    const [under100, setUnder100] = useState(false)
    const [between100and500, setbetween100and500] = useState(false)
    const [between500and1000, setbetween500and1000] = useState(false)
    const [between1000and2000, setbetween1000and2000] = useState(false)
    const [over2000, setOver2000] = useState(false)

    useEffect(() => {
        filter(filterListings)
    }, [highPrice, lowPrice])

    //create a function that spits out an array of all the listings
    let filterListings = []
    for (let i = 0; i < currentPosts.length; i++) {
        let shoe = currentPosts[i]
        if (shoe.listings && typeof shoe.listings[Symbol.iterator] === 'function') {
            for (let listing of shoe.listings) {
                if (listing.price <= highPrice && listing.price >= lowPrice) {
                    filterListings.push(listing)
                }
            }
        }
    }

    // console.log(filterListings)

    let handleChange = (num) => {
        setPriceFilter(!priceFilter)
        if (num === 1) {
            setbetween100and500(false)
            setbetween500and1000(false)
            setbetween1000and2000(false)
            setOver2000(false)
        } else if (num === 2) {
            setUnder100(false)
            setbetween500and1000(false)
            setbetween1000and2000(false)
            setOver2000(false)
        } else if (num === 3) {
            setUnder100(false)
            setbetween100and500(false)
            setbetween1000and2000(false)
            setOver2000(false)
        } else if (num === 4) {
            setUnder100(false)
            setbetween100and500(false)
            setbetween500and1000(false)
            setOver2000(false)
        } else {
            setUnder100(false)
            setbetween100and500(false)
            setbetween500and1000(false)
            setbetween1000and2000(false)
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
                            setUnder100(!under100)
                            setLowPrice(0)
                            setHighPrice(100)
                            handleChange(1)
                            page(1)
                        }}
                    />
                    <label className="label-spacer"> Under $100 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        checked={between100and500}
                        onChange={() => {
                            setbetween100and500(!between100and500)
                            setLowPrice(101)
                            setHighPrice(500)
                            handleChange(2)
                            page(1)
                        }}
                    />
                    <label className="label-spacer"> $101 - $500 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        checked={between500and1000}
                        onChange={() => {
                            setbetween500and1000(!between500and1000)
                            setLowPrice(501)
                            setHighPrice(1000)
                            handleChange(3)
                            page(1)
                        }}
                    />
                    <label className="label-spacer"> $501 - $1000 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        checked={between1000and2000}
                        onChange={() => {
                            setbetween1000and2000(!between1000and2000)
                            setLowPrice(1001)
                            setHighPrice(2000)
                            handleChange(4)
                            page(1)
                        }}
                    />
                    <label className="label-spacer"> $1001 - $2000 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        checked={over2000}
                        onChange={() => {
                            setOver2000(!over2000)
                            setLowPrice(2001)
                            setHighPrice(100000)
                            handleChange(5)
                            page(1)
                        }}
                    />
                    <label className="label-spacer"> +$2000 </label>
                </div>
            </div>
        </>
    );


}

export default FilterPrice
