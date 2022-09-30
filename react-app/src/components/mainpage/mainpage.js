import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { getAllApparelThunk } from '../../store/apparel';
import './mainpage.css'

function MainPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const apparel = useSelector((state) => state.pparel)

    console.log(apparel)


    useEffect(() => {
        dispatch(getAllApparelThunk())
    }, [dispatch])








    return (
        <>
            <h1>My Home Page</h1>
        </>
    )

}

export default MainPage;
