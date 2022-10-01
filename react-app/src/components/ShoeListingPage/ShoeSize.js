import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import './ShoeSize.css'


function ShoeSizePage() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()
    const { shoeId } = useParams();
    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    const allShoeSizes = () => {
        let allsizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18]

        const list = []

        allsizes.forEach((item) => {
            list.push(<div className='size-price-container'>{item}</div>)
        })

        const shoePage = shoeInfo.map((shoe) => {

            const { colorway, id, imageUrl, name, listings } = shoe

            let shoeListings = listings.map((item) => {
                const { size, id, price } = item


                return (
                    <div key={id}>
                        <div >
                            {price}
                        </div>
                    </div>
                )

            })

            let rightContainer = (
                <>
                    <div >
                        {shoeListings}
                    </div>
                </>
            )


            return (
                <div key={id}>
                    <div>
                        {rightContainer}
                    </div>
                </div>
            )

        })

        return (
            <div className='shoe-size-prices-grid-container'>
                {list}
            </div>
        )


    }

    return isLoaded && (
        <div>
            <div>
                {allShoeSizes()}
                <div>
                    {/* {shoePage} */}
                </div>
            </div>
        </div>
    );
}

export default ShoeSizePage;
