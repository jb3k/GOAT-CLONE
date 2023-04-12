import React, { useEffect } from 'react';

function RecentlyViewed() {
    useEffect(() => {
        // Get the stored recently viewed shoes from local storage
        const storedShoes = localStorage.getItem('recentlyViewedShoes');
        if (storedShoes) {
            setRecentlyViewed(JSON.parse(storedShoes));
        }
    }, []);

    const handleClick = (shoe) => {
        // Add the clicked shoe to recently viewed shoes
        const updatedShoes = [shoe, ...recentlyViewed.filter((item) => item.id !== shoe.id)];
        setRecentlyViewed(updatedShoes);

        // Store the updated recently viewed shoes in local storage
        localStorage.setItem('recentlyViewedShoes', JSON.stringify(updatedShoes));
    };

}
export default RecentlyViewed;
