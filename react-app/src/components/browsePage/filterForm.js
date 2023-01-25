import React, { useState } from "react";
import './filterForm.css'


const FilterForm = ({ filter }) => {

  const [jordan, setJordan] = useState(true)
  const [nike, setNike] = useState(true)
  const [adidas, setAdidas] = useState(true)


  const handleChange = (data) => {
    if (data === 'jordan') {
      if (jordan === true) {
        let val = document.getElementById('jordan')
        filter(val.value)
      }
      if (jordan === false) filter('')
      setJordan(!jordan)
    }
    if (data === 'nike') {
      if (nike === true) {
        let val = document.getElementById('nike')
        filter(val.value)
      }
      if (nike === false) filter('')
      setNike(!nike)
    }
    if (data === 'adidas') {
      if (adidas === true) {
        let val = document.getElementById('adidas')
        filter(val.value)
      }
      if (adidas === false) filter('')
      setAdidas(!adidas)
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
            // checked={jordan}
            onChange={() => handleChange('jordan')}
          />
          <label className="label-spacer"> Jordan </label>
        </div>
        <div className="filter-brands">
          <input
            type="checkbox"
            id='nike'
            value={'Nike'}
            // checked={nike}
            onChange={() => handleChange('nike')}
          />
          <label className="label-spacer"> Nike </label>
        </div>
        <div className="filter-brands">
          <input
            type="checkbox"
            id='adidas'
            value={'Adidas'}
            // checked={adidas}
            onChange={() => handleChange('adidas')}
          />
          <label className="label-spacer"> Adidas </label>
        </div>
      </div>
    </>
  );


}

export default FilterForm
