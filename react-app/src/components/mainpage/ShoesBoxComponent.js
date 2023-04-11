import { NavLink } from 'react-router-dom';


function ShoeBox({ allApparel }) {



    const allItems = allApparel.map((item) => {

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

    // console.log(allApparel)

    return (
        <>
            {allItems.slice(0, 20)}
        </>
    )

}

export default ShoeBox
