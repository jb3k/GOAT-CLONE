import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import UploadPicture from '../ImagesForm';
import { getAllApparelThunk, createImageThunk } from '../../store/apparel';


const ApparelForm = () => {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();


    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [colorway, setcolorway] = useState("")
    const [release_date, setrelease_date] = useState("")
    const [brand, setbrand] = useState("")
    const [style, setstyle] = useState("")
    const [brand_type, setbrand_type] = useState("")
    const [condition, setcondition] = useState("")
    const [retail_price, setretail_price] = useState(0)
    const [price_sold, setprice_sold] = useState(0)
    const [quantity_sold, setquantity_sold] = useState(0)
    const [size, setsize] = useState(0)



    const allApparel = useSelector(state => Object.values(state.apparel))
    

    useEffect(() => {
        dispatch(getAllApparelThunk())
    }, [dispatch])




    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (password === repeatPassword) {
        //     const data = await dispatch(signUp(username, email, password));
        //     if (data) {
        //         setErrors(data)
        //     }
        // }
    };



    const addApparel = allApparel.map((item) => {

        const {id, name} = item
        

        //if the item i select from the dropdown is there... i only show the listing form...
        //if the item is not in the drop down, i will click the add apparel button which will lead me to apparel form...



    })






    return (
        // <div className='signup-whole-page'>
            <div className='signup-form-container'>
                {/* <form onSubmit={handleSubmit}>
                    <div>
                        {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div> */}
                    <div>
                        <UploadPicture />
                    </div>
                    {/* <div>
                        <input
                            type='text'
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder={"name"}
                        ></input>
                    </div>

                    <button type='submit'>Sign Up</button>
                </form> */}
            </div >
        // </div >
    );
};

export default ApparelForm;
