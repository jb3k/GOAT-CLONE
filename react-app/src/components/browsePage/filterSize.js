import React, { useState } from "react";
import './filterForm.css'
import './filterSize.css'


const FilterSize = ({ filter, page }) => {

    const [size, setSize] = useState('')
    const [checked, setChecked] = useState(false)
    const [] = useState('')


    const handleChange = (data) => {
        if (data) {
            setSize(data)
            filter(size)
            page(1)
            setChecked(true)
        }
    }

    return (
        <>
            <div className="filterForm-brands">
                Size:
                <div className="filterSize-box" >
                    <div>
                        <input
                            className={size === 8 && checked ? "filterSize-brands-checked" : "filterSize-brands"}
                            type="button"
                            value={8}
                            onClick={() => {
                                handleChange(8)
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className={size === 4 && checked ? "filterSize-brands-checked" : "filterSize-brands"}
                            type="button"
                            value={4}
                            onClick={() => {
                                handleChange(4)
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );


}

export default FilterSize
