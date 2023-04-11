import React, { useEffect } from 'react';

function RecentlyViewed({ recentlyViewed, setRecentlyViewed }) {
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

    return (
        <div>
            <h2>Recently Viewed</h2>
            <div className="shoe-box-container">
                {recentlyViewed.map((shoe) => (
                    <div key={shoe.id} className="shoe-box" onClick={() => handleClick(shoe)}>
                        <img src={shoe.image} alt={shoe.name} />
                        <div className="shoe-info">
                            <p>{shoe.name}</p>
                            <p>{shoe.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default RecentlyViewed;
