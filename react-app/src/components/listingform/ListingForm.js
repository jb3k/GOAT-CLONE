import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { getAllListingsThunk } from '../../store/listings';
import UploadPicture from '../ImagesForm'
import './ListingForm.css'

function ListingForm() {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    // console.log(sessionUser)
    // const listings = useSelector((state) => state)
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    // useEffect(() => {
    //     dispatch(getAllListingsThunk())
    // }, [dispatch])


    const onSignUp = async (e) => {
        e.preventDefault();
        // if (password === repeatPassword) {
        //     const data = await dispatch(signUp(username, email, password));
        //     if (data) {
        //         setErrors(data)
        //     }
        // }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    // if (user) {
    //     return <Redirect to='/' />;
    // }



    return (
        <div className='signup-whole-page'>
            <div className='signup-form-container'>
                <form onSubmit={onSignUp}>
                    <div>
                        {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <div>
                        <UploadPicture />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='username'
                            onChange={updateUsername}
                            value={username}
                            placeholder={"size"}
                        ></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type='text'
                            name='email'
                            onChange={updateEmail}
                            value={email}
                        ></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            onChange={updatePassword}
                            value={password}
                        ></input>
                    </div>
                    <div>
                        <label>Repeat Password</label>
                        <input
                            type='password'
                            name='repeat_password'
                            onChange={updateRepeatPassword}
                            value={repeatPassword}
                            required={true}
                        ></input>
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )

}

export default ListingForm;
