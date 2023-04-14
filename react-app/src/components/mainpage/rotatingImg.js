import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import image1 from '../../assets/1.jpeg'
import image2 from '../../assets/2.jpeg'
import image3 from '../../assets/3.jpeg'
import image4 from '../../assets/4.jpeg'
import image5 from '../../assets/5.jpeg'
import './rotatingImg.css'


export default function RotatingImage() {

    const [imageNumber, setImageNumber] = useState(0)

    let img1 = (
        <>
            <NavLink to={`/shoe/${5}`} style={{ textDecoration: 'none' }}>
                <div className='image-border'>
                    <div className='featured'>
                        Featured Item:
                    </div>
                </div>
            </NavLink>
            <div className='mainpage-rotating-img-container'>
                <img src={image2} className='actual-rotating-image' alt='rotating-shoes'></img>
            </div>

        </>
    )

    let img2 = (
        <>
            <NavLink to={`/shoe/${4}`} style={{ textDecoration: 'none' }}>
                <div className='image-border'>
                    <div className='featured'>
                        Featured Item:
                    </div>
                </div>
            </NavLink>
            <div className='mainpage-rotating-img-container'>
                <img src={image1} className='actual-rotating-image' alt='rotating-shoes'></img>
            </div>

        </>

    )
    let img3 = (
        <>
            <NavLink to={`/shoe/${6}`} style={{ textDecoration: 'none' }}>
                <div className='image-border'>
                    <div className='featured'>
                        Featured Item:
                    </div>
                </div>
            </NavLink>
            <div className='mainpage-rotating-img-container'>
                <img src={image3} className='actual-rotating-image' alt='rotating-shoes'></img>
            </div>

        </>

    )
    let img4 = (
        <>
            <NavLink to={`/shoe/${7}`} style={{ textDecoration: 'none' }}>
                <div className='image-border'>
                    <div className='featured'>
                        Featured Item:
                    </div>
                </div>
            </NavLink>
            <div className='mainpage-rotating-img-container'>
                <img src={image4} className='actual-rotating-image' alt='rotating-shoes'></img>
            </div>

        </>

    )
    let img5 = (
        <>
            <NavLink to={`/shoe/${8}`} style={{ textDecoration: 'none' }}>
                <div className='image-border'>
                    <div className='featured'>
                        Featured Item:
                    </div>
                </div>
            </NavLink>
            <div className='mainpage-rotating-img-container'>
                <img src={image5} className='actual-rotating-image' alt='rotating-shoes'></img>
            </div>

        </>

    )

    const images = [img1, img2, img3, img4, img5]
    useEffect(() => {
        const imageInterval = setInterval(() => {
            setImageNumber((num) => ++num % images.length)
        }, 4000)
        return () => {
            clearInterval(imageInterval)
        }
    }, [images])


    return (
        <>
            {images[imageNumber]}
        </>
    )

}
