import React, { useState } from "react";
import './filterForm.css'
import './filterSize.css'


const FilterSize = ({ filter, page }) => {

    const [checked, setChecked] = useState('')


    const handleChange = (data) => {

    }

    return (
        <>
            <div className="filterForm-brands">
                Size:
                <div className="filterSize-box" >
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id="jordan"
                            value={3}
                            checked={checked === 'jordan'}
                            onChange={() => {
                                handleChange('jordan')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='nike'
                            value={4}
                            checked={checked === 'nike'}
                            onChange={() => {
                                handleChange('nike')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='adidas'
                            value={5}
                            checked={checked === "adidas"}
                            onChange={() => {
                                handleChange('adidas')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='adidas'
                            value={6}
                            checked={checked === "adidas"}
                            onChange={() => {
                                handleChange('adidas')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='adidas'
                            value={7}
                            checked={checked === "adidas"}
                            onChange={() => {
                                handleChange('adidas')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id="jordan"
                            value={8}
                            checked={checked === 'jordan'}
                            onChange={() => {
                                handleChange('jordan')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='nike'
                            value={9}
                            checked={checked === 'nike'}
                            onChange={() => {
                                handleChange('nike')
                            }}
                        />
                    </div>

                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id="jordan"
                            value={10}
                            checked={checked === 'jordan'}
                            onChange={() => {
                                handleChange('jordan')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='nike'
                            value={11}
                            checked={checked === 'nike'}
                            onChange={() => {
                                handleChange('nike')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='adidas'
                            value={12}
                            checked={checked === "adidas"}
                            onChange={() => {
                                handleChange('adidas')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='adidas'
                            value={13}
                            checked={checked === "adidas"}
                            onChange={() => {
                                handleChange('adidas')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='adidas'
                            value={14}
                            checked={checked === "adidas"}
                            onChange={() => {
                                handleChange('adidas')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id="jordan"
                            value={15}
                            checked={checked === 'jordan'}
                            onChange={() => {
                                handleChange('jordan')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='nike'
                            value={16}
                            checked={checked === 'nike'}
                            onChange={() => {
                                handleChange('nike')
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='adidas'
                            value={17}
                            checked={checked === "adidas"}
                            onChange={() => {
                                handleChange('adidas')
                            }}

                        />
                    </div>
                    <div>
                        <input
                            className="filterSize-brands"
                            type="button"
                            id='adidas'
                            value={18}
                            checked={checked === "adidas"}
                            onChange={() => {
                                handleChange('adidas')
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );


}

export default FilterSize
