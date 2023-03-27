import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './filterForm.css'
import './filterSize.css'


const FilterSize = ({ filter, page }) => {

    const [size, setSize] = useState('')
    const [checked, setChecked] = useState(false)
    const [] = useState('')


    const shoeSizes = () => {

        let sizeArr = []
        for (let i = 3; i <= 18; i++) {
            sizeArr.push(
                <NavLink to={`/shoes/${i}`}>
                    <input
                        className={size === 8 && checked ? "filterSize-brands-checked" : "filterSize-brands"}
                        type="button"
                        value={i}
                    />
                </NavLink >
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
            </div>
        </>
    );


}

export default FilterSize
