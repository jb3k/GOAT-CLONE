import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { getAllApparelThunk } from '../../store/apparel';
import './mainpage.css'

function MainPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const allApparel = useSelector(state => console.log(state))

    

    useEffect(() => {
        dispatch(getAllApparelThunk())
    }, [dispatch])

    // const allItems = allApparel.map((item) => {

    //     const { images, name, listings } = itemwhene 

    //     let item = (
    //         <></>
    //     )


    //     return (

    //         <></>
    //     )


    // })









    return (
        <>
            <div>
                <h1>My Home Page</h1>
            </div>
            <div>
                {/* {allItems()} */}
            </div>


        </>
    )

}

export default MainPage;
