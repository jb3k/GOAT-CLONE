import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import './ApparelForm.css'


const ApparelForm = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [colorway, setColorway] = useState("")
    const [release_date, setRelease_date] = useState("")
    const [brand, setBrand] = useState("")
    const [style, setStyle] = useState("")
    const [brand_type, setBrand_type] = useState("")
    const [condition, setCondition] = useState("")
    const [retail_price, setRetail_price] = useState(0)
    const [validationErrors, setValidationErrors] = useState([])
    const [submitted, setSubmitted] = useState(false)


    useEffect(() => {
        const errors = []

        if (!image) errors.push('Please provide an Image!')
        if (!style) errors.push('Please provide a Style!')
        if (!condition) errors.push('Please provide a Condition!')
        if (name.length > 40 || name.length < 3) errors.push('Name must be between 3 and 40 characters')
        if (description.length < 30 || description.length > 10000) errors.push('Shoe Description must be between 30 and 10000 characters')
        if (colorway.length > 21) errors.push('Colorway length must be less than 21 characters. Keep down to at most 3 colors.')
        if (brand.length > 13) errors.push('Brand length must be less than 13 characters')
        if (retail_price < 1 || retail_price > 10000) errors.push('Retail_price must be between 1 and 10,000')
        if (release_date.length !== 4) errors.push('Valid Release Date only consists of the year made.')


        setValidationErrors(errors)
    }, [name, description, colorway, release_date, brand, style, brand_type, condition, retail_price, image])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true)

        const formData = new FormData();
        formData.append("image", image);
        formData.append('name', name)
        formData.append('description', description)
        formData.append('colorway', colorway)
        formData.append('release_date', release_date)
        formData.append('brand', brand)
        formData.append('style', style)
        formData.append('brand_type', brand_type)
        formData.append('condition', condition)
        formData.append('retail_price', retail_price)


        if (validationErrors.length > 0) return


        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch('/api/apparel/', {
            method: "POST",
            body: formData,
        });

        console.log('HELLO', res)
        if (res.ok) {
            await res.json();
            console.log('HELLOOOOOOOO', formData)
            setImageLoading(false);
            history.push("/shoes");
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <div>
            <div className='navbar-spacing'></div>
            <div className="apparel-whole-page">
                <div className="apparel-form-container">
                    <div className="apparel-form-top-container">
                        Submit New Arrivals:
                    </div>
                    <form onSubmit={handleSubmit}>
                        {submitted && validationErrors.map(((error, i) => <div className='errors' key={i}><li>{error}</li></div>))}
                        <div>
                            <div>
                                Shoe Name:
                            </div>
                            <input
                                className='apparel-form-body-boxes'
                                type='text'
                                name='name'
                                onChange={e => setName(e.target.value)}
                                value={name}
                                required={true}
                                placeholder={'Ex: Jordan 1 Retro High "Chicago"'}
                            ></input>
                        </div>
                        <div >
                            <div>
                                Product Description:
                            </div>
                            <textarea
                                className='apparel-form-description-box'
                                type='text'
                                name='description'
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                                required={true}
                                placeholder={'Shoe details / description*'}
                            />
                        </div>
                        <div >
                            <div> Colorway: </div>
                            <input
                                className='apparel-form-body-boxes'
                                type='text'
                                name='colorway'
                                onChange={e => setColorway(e.target.value)}
                                value={colorway}
                                required={true}
                                placeholder={'Shoe colorway *'}
                            ></input>
                        </div>
                        <div >
                            <div> Release Date (Year):  </div>
                            <input
                                className='apparel-form-body-boxes'
                                type='text'
                                name='release_date'
                                onChange={e => setRelease_date(e.target.value)}
                                value={release_date}
                                required={true}
                                placeholder={'Release Date Year*'}
                            ></input>
                        </div>
                        <div >
                            <div> Brand: </div>
                            <input
                                className='apparel-form-body-boxes'
                                type='text'
                                name='brand'
                                onChange={e => setBrand(e.target.value)}
                                value={brand}
                                required={true}
                                placeholder={'Ex. Nike, Adidas, Jordan, etc..'}
                            ></input>
                        </div>
                        <div >
                            <div> Style:  </div>
                            <select value={style} onChange={e => setStyle(e.target.value)} className='apparel-form-select-boxes'>
                                <option value=''> Select</option>
                                <option value='low'> Low</option>
                                <option value='mid'> Mid</option>
                                <option value='high'> High</option>
                            </select>
                        </div>
                        <div >
                            <div> Brand Type: </div>
                            <input
                                className='apparel-form-body-boxes'
                                type='text'
                                name='brand_type'
                                onChange={e => setBrand_type(e.target.value)}
                                value={brand_type}
                                required={true}
                                placeholder={'Ex: "1" for Jordan 1, "dunk" for nike dunk '}
                            ></input>
                        </div>
                        <div >
                            <div> Condition: </div>
                            <select value={condition} onChange={e => setCondition(e.target.value)} className='apparel-form-select-boxes'
                            >
                                <option value=''> Select</option>
                                <option value='new'> New </option>
                                <option value='used'> Used </option>
                            </select>
                        </div>
                        <div >
                            <div> Retail Price: </div>
                            <input
                                className='apparel-form-body-boxes'
                                type='number'
                                name='retail_price'
                                onChange={e => setRetail_price(e.target.value)}
                                value={retail_price}
                                required={true}
                                min={1}
                                max={10000}
                            ></input>
                        </div>
                        <div>
                            <div style={{ marginBottom: '5px' }}> Upload Image: </div>
                            <input
                                className='apparel-form-upload-button'
                                type="file"
                                accept="image/*"
                                onChange={updateImage}
                            />
                        </div>
                        <button type="submit" className='signup-form-signup-button'>Submit</button>
                        {(imageLoading) && <p>Loading...</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApparelForm;
