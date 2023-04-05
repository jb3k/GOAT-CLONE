import React from 'react';
import { NavLink } from 'react-router-dom';


export default function ShoeList({ currentPosts, filteredPosts, priceFilter }) {


    // console.log(currentPosts, filteredPosts)


    const allItems = currentPosts.map((item) => {

        if (!item) return null
        const { imageUrl, name, listings, id } = item



        let arr = []
        if (listings.length === 0) arr.push(0)
        listings.forEach((shoe) => { arr.push(shoe.price) })
        let minPrice = Math.min(...arr)



        let shoes = (
            <>
                <NavLink to={`/shoe/${id}`} style={{ textDecoration: 'none' }}>
                    <div className='mainpage-shoe-containers'>
                        <div className='mainpage-shoe-listing-image-container'>
                            <img src={imageUrl} className='mainpage-shoe-listing-image' alt="profile"></img>
                        </div>
                        <div className='mainpage-shoe-text-container'>
                            <div className='mainpage-shoe-name'>
                                {name}
                            </div>
                            <div>
                                <div className='mainpage-shoe-lowest-ask'>lowest ask</div>
                                <strong><div className='mainpage-shoe-lowest-price'>{minPrice > 0 ? `$${minPrice}` : 'Sold out'}</div></strong>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </>
        )

        return (
            <div key={id}>
                {shoes}
            </div>
        )
    })


    const filteredItems = filteredPosts.map((item) => {

        if (!item) return null
        const { apparelImg, apparelName, id, price } = item


        let shoes = (
            <>
                <NavLink to={`/shoe/${id}`} style={{ textDecoration: 'none' }}>
                    <div className='mainpage-shoe-containers'>
                        <div className='mainpage-shoe-listing-image-container'>
                            <img src={apparelImg} className='mainpage-shoe-listing-image' alt="profile"></img>
                        </div>
                        <div className='mainpage-shoe-text-container'>
                            <div className='mainpage-shoe-name'>
                                {apparelName}
                            </div>
                            <div>
                                <div className='mainpage-shoe-lowest-ask'>lowest ask</div>
                                <strong><div className='mainpage-shoe-lowest-price'>{price > 0 ? price : 'Sold out'}</div></strong>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </>
        )

        return (
            <div key={id}>
                {shoes}
            </div>
        )
    })


    return (
        <>
            {priceFilter === true ? filteredItems : allItems}
        </>


    )


}
