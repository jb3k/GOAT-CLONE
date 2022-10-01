import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';


function ShoeListingPage() {
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

        const { colorway, condition, id, imageUrl, name, releaseDate, listings } = shoe

        let leftContainer = (
            <>
                <div>
                    <div>
                        left container
                        <div>
                            {name}
                        </div>
                        <div>
                            {colorway}
                        </div>
                        <div>
                            <img src={imageUrl} alt="shoe image"></img>
                        </div>
                    </div>
                </div>
            </>
        )


    
        let rightContainer = (
            <>
                <div>
                    right container:
                    <div>
                        <div>
                            Select Size
                        </div>
                        <div>
                            U.S. Men's Sizes
                        </div>
                        <div>
                            {listings.map((item) => {
                                <div>
                                    <div>
                                        {item.size}
                                    </div>
                                    <div>
                                        {item.price}
                                    </div>
                                </div>

                            })}
                        </div>
                    </div>
                </div>

            </>
        )


        return isLoaded && (
            <div>
                <div>
                    {leftContainer}
                </div>
                <div>
                    {rightContainer}
                </div>
            </div>
        )

    })




    return isLoaded && (
        <div>
            {shoePage}
        </div>
    );
}

export default ShoeListingPage;
