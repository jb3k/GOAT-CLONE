import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';


function ShoeProfilePage() {
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


    const shoePage = shoeInfo.map((shoe) => {

        const { brand, brandType, colorway, condition, description, id, imageUrl, name, style, retaillPrice, releaseDate } = shoe

        let topContainer = (
            <>
                <div>
                    <div>
                        left container
                        <div>
                            url path
                        </div>
                        <div>
                            {name}
                        </div>
                        <div>
                            {colorway}
                        </div>
                        <div>
                            condtion:{condition}
                        </div>
                        <div>
                            <img src={imageUrl} alt="shoe image"></img>
                        </div>
                    </div>
                    <div>
                        right container
                        <NavLink to={`/shoe/${id}/buy`}>
                            <button> Buy</button>
                        </NavLink>
                        <NavLink to={`/shoe/${id}/sell`}>
                            <button> Sell</button>
                        </NavLink>
                    </div>
                </div>
            </>
        )

        let relatedProducts = (
            <div>
                Related relatedProducts
            </div>
        )


        let productDetails = (
            <div>
                Product Details:

            </div>
        )

        let priceHistory = (
            <div>
                Price history
            </div>

        )
        let historalStats = (
            <div>
                Historial stats
            </div>
        )
        return isLoaded && (
            <div key={id}>
                <div>
                    {topContainer}
                </div>
                <div>
                    {relatedProducts}
                </div>
                <div>
                    {productDetails}
                </div>
                <div>
                    {priceHistory}
                </div>
                <div>
                    {historalStats}
                </div>
            </div >
        )

    })




    return isLoaded && (
        <div>
            {shoePage}
        </div>
    );
}
export default ShoeProfilePage;
