import React from 'react';
import { NavLink } from 'react-router-dom';


export default function ShoeList({ currentPosts, filterTags, allApparel, firstPostIndex, lastPostIndex }) {

    let allPosts

    if (currentPosts.length === 0 && filterTags.size === 0) {
        allPosts = allApparel.slice(firstPostIndex, lastPostIndex).map((item) => {
            if (!item) return null
            const { imageUrl, name, listings, id } = item

            let arr = []
            if (listings.length === 0) arr.push(0)
            listings.forEach((shoe) => { arr.push(shoe.price) })
            let minPrice = Math.min(...arr)

            return (
                <div key={id}>
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
                </div>
            )
        })

    } else {
        allPosts = currentPosts.map((item) => {
            if (!item) return null
            const { imageUrl, name, listings, id } = item

            let arr = []
            if (listings.length === 0) arr.push(0)
            listings.forEach((shoe) => { arr.push(shoe.price) })
            let minPrice = Math.min(...arr)

            return (
                <div key={id}>
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
                </div>
            )
        })
    }

    //if there are no filter tags, then display all posts.. if there are filter tags.. and the arr is empty, show no results. 

    return (
        <>
            {filterTags.size > 0 && allPosts.length === 0 ? <div> No Results </div> : allPosts}
        </>

    )

}
