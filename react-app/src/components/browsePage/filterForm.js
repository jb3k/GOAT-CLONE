import React, { useState } from "react";


const FilterForm = () => {

    const [jordan, setJordan] = useState(false)
    const [nike, setNike] = useState(false)
    const [adidas, setAdidas] = useState(false)
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="App">
        Filter Brands:
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Paneer
        </div>
        <div className="result">
          Above checkbox is {isChecked ? "checked" : "un-checked"}.
        </div>
      </div>
    );


}

export default FilterForm
