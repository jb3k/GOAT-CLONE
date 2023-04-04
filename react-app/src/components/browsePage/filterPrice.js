import React, { useEffect, useState } from "react";
import './filterForm.css'


const FilterPrice = ({ filter, page, allListings }) => {

    const [price, setPrice] = useState('')
    const [checked, setChecked] = useState('')


    //all shoees


    const handleChange = (data) => {
        
    }

    return (
        <>
            <div className="filterForm-brands">
                Price:
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        id="jordan"
                        value={'Jordan'}
                        checked={checked === 'jordan'}
                        onChange={() => {
                            handleChange('jordan')
                        }}
                    />
                    <label className="label-spacer"> Under $100 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        id='nike'
                        value={'Nike'}
                        checked={checked === 'nike'}
                        onChange={() => {
                            handleChange('nike')
                        }}
                    />
                    <label className="label-spacer"> $101 - $500 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        id='adidas'
                        value={'Adidas'}
                        checked={checked === "adidas"}
                        onChange={() => {
                            handleChange('adidas')
                        }}
                    />
                    <label className="label-spacer"> $501 - $1000 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        id='adidas'
                        value={'Adidas'}
                        checked={checked === "adidas"}
                        onChange={() => {
                            handleChange('adidas')
                        }}
                    />
                    <label className="label-spacer"> $1001 - $2000 </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        id='adidas'
                        value={'Adidas'}
                        checked={checked === "adidas"}
                        onChange={() => {
                            handleChange('adidas')
                        }}
                    />
                    <label className="label-spacer"> +$2000 </label>
                </div>
            </div>
        </>
    );


}

export default FilterPrice
