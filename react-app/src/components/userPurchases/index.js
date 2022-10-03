import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getUserPurchasesThunk } from '../../store/purchase';
import './userPurchases.css'

function CurrentUserPurchases() {
    const dispatch = useDispatch()
    const [showEditTextField, setShowEditTextField] = useState(false);

    const allUserListings = useSelector(state => Object.values(state.listings))
    console.log(allUserListings)

    useEffect(() => {
        dispatch(getUserPurchasesThunk())
    }, []);


    



    return (
        <>
            <div>
                <h1> current purchases</h1>
            </div>
            <div>
            </div>
        </>
    );
}

export default CurrentUserPurchases;
