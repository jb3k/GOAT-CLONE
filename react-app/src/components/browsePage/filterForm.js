import React, { useEffect, useState } from "react"
import './filterForm.css'


const FilterForm = ({ page, allApparel, setBrandFilter, filterTags, setFilterTags, jordan, setJordan, nike, setNike, adidas, setAdidas }) => {

    useEffect(() => {
        setBrandFilter(filterArr)
    }, [jordan, nike, adidas])


    let filterArr = []
    const jordanFilter = allApparel.filter((shoe) => {
        if (jordan) {
            setFilterTags(filterTags.add('Jordan'))
            return shoe.brand === 'Jordan'
        } else {
            filterTags.delete('Jordan')
            setFilterTags(filterTags)
        }
    })
    const nikeFilter = allApparel.filter((shoe) => {
        if (nike) {
            setFilterTags(filterTags.add('Nike'))
            return shoe.brand.includes('Nike')
        } else {
            filterTags.delete('Nike')
            setFilterTags(filterTags)
        }

    })
    const adidasFilter = allApparel.filter((shoe) => {
        if (adidas) {
            setFilterTags(filterTags.add('Adidas'))
            return shoe.brand === 'Adidas'
        } else {
            filterTags.delete('Adidas')
            setFilterTags(filterTags)
        }
    })
    filterArr = [...jordanFilter, ...nikeFilter, ...adidasFilter]


    return (
        <>
            <div className="filterForm-brands">
                Brands:
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        value={'Jordan'}
                        checked={jordan}
                        onChange={() => {
                            setJordan(!jordan)
                            page(1)
                        }}
                    />
                    <label className="label-spacer"> Jordan </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        value={'Nike'}
                        checked={nike}
                        onChange={() => {
                            setNike(!nike)
                            page(1)
                        }}
                    />
                    <label className="label-spacer"> Nike </label>
                </div>
                <div className="filter-brands">
                    <input
                        type="checkbox"
                        value={'Adidas'}
                        checked={adidas}
                        onChange={() => {
                            setAdidas(!adidas)
                            page(1)
                        }}
                    />
                    <label className="label-spacer"> Adidas </label>
                </div>
                {filterArr.length > 0 && <div className="reset-button"
                    onClick={() => {
                        setJordan(false)
                        setNike(false)
                        setAdidas(false)
                    }}
                >
                    <i class="fa-solid fa-xmark" style={{ fontSize: '20px', marginRight: '10px', marginTop: '2px' }}></i>
                    Reset Brand
                </div>}
            </div>
        </>
    );


}

export default FilterForm
