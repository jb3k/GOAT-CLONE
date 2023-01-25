
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';



function BrowsePage() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)

    const allApparel = useSelector(state => Object.values(state.apparel))

    //create an array, every onclick add that item that you clicked on into the array. 


    useEffect(() => {
        dispatch(getAllApparelThunk())
    }, [dispatch])



    return isLoaded && (
        <>
        </>
    )

}

export default BrowsePage;
