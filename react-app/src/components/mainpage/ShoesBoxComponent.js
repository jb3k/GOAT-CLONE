import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './shoeBox.css'


function ShoeBox({ allApparel, recentlyViewed, setRecentlyViewed }) {

    useEffect(() => {
        // Get the stored recently viewed shoes from local storage
        const storedShoes = localStorage.getItem('recentlyViewedShoes');
        if (storedShoes) {
            setRecentlyViewed(JSON.parse(storedShoes));
        }
    }, []);

    const handleClick = (shoe) => {
        // Add the clicked shoe to recently viewed shoes
        const viewedList = [...recentlyViewed];

        // Check if the shoe is already in the list
        const index = viewedList.findIndex((item) => item.id === shoe.id);
        if (index > -1) {
            viewedList.splice(index, 1); // Remove the existing entry
        }
        // Add the shoe to the beginning of the list
        viewedList.unshift(shoe);

        if (viewedList.length > 6) {
            viewedList.pop()
            localStorage.setItem('recentlyViewedShoes', JSON.stringify(viewedList));
        } else {
            // Store the updated recently viewed shoes in local storage
            localStorage.setItem('recentlyViewedShoes', JSON.stringify(viewedList));
        }
        //update the recently viewed list
        setRecentlyViewed(viewedList);

    };

    const allItems = allApparel.map((item) => {

        if (!item) return null
        const { imageUrl, name, listings, id } = item

        let arr = []
        if (listings.length === 0) arr.push(0)
        listings.forEach((shoe) => { arr.push(shoe.price) })
        let minPrice = Math.min(...arr)

        return (
            <div key={id}>
                <NavLink to={`/shoe/${id}`} style={{ textDecoration: 'none' }}>
                    <div className='mainpage-shoe-containers' onClick={() => handleClick(item)}>
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

    return (
        <>
            {allItems.slice(0, 20)}
        </>
    )

}

export default ShoeBox
