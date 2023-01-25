import React, { useState } from "react";
import './filterForm.css'


const FilterForm = ({ filter, page }) => {

  const [jordan, setJordan] = useState(true)
  const [nike, setNike] = useState(true)
  const [adidas, setAdidas] = useState(true)
  const [checked, setChecked] = useState('')


  const handleChange = (data) => {
    if (data === 'jordan') {
      if (jordan === true) {
        let val = document.getElementById('jordan')
        filter(val.value)
        page(1)
      }
      if (jordan === false) filter('')
      setJordan(!jordan)

      if (jordan === false) {
        setChecked('')
      }
      if (jordan) {
        setChecked('jordan')
        setNike(true)
        setAdidas(true)
      }
    }
    if (data === 'nike') {
      if (nike === true) {
        let val = document.getElementById('nike')
        filter(val.value)
        page(1)
      }
      if (nike === false) filter('')
      setNike(!nike)

      if (nike === false) {
        setChecked('')
      }
      if (nike) {
        setChecked('nike')
        setJordan(true)
        setAdidas(true)
      }

    }
    if (data === 'adidas') {
      if (adidas === true) {
        let val = document.getElementById('adidas')
        filter(val.value)
        page(1)
      }
      if (adidas === false) filter('')
      setAdidas(!adidas)
      if (adidas === false) {
        setChecked('')
      }
      if (adidas) {
        setChecked('adidas')
        setJordan(true)
        setNike(true)
      }
    }
  }

  return (
    <>
      <div className="filterForm-brands">
        Brands:
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
          <label className="label-spacer"> Jordan </label>
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
          <label className="label-spacer"> Nike </label>
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
          <label className="label-spacer"> Adidas </label>
        </div>
      </div>
    </>
  );


}

export default FilterForm
