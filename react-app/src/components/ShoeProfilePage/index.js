import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

function ShoeProfilePage() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()
    const { shoeId } = useParams();



    return (
        <ul>

            <li>
                <strong>Username</strong> {user.username}
            </li>
            <li>
                <strong>Email</strong> {user.email}
            </li>
        </ul>
    );
}
export default ShoeProfilePage;
