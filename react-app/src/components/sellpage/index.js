import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { getAllApparelThunk } from '../../store/apparel';
import ApparelForm from '../apparelForm';

function SellPage() {
    const dispatch = useDispatch();
    const [apparelId, setApparelId] = useState("None")
    // const sessionUser = useSelector((state) => state.session.user);
    const allApparel = useSelector(state => Object.values(state.apparel))
    // console.log(allApparel)


    useEffect(() => {
        dispatch(getAllApparelThunk())
    }, [dispatch])

    const allItems = allApparel.map((item) => {
        if (!item) return null
        const { images, name, listings } = item

    })



    //how can i get the value from the drop down menu


    return (
        <div className='signup-whole-page' style={{ flexDirection: 'column' }}>
            <div>
                <h1>This will be the header</h1>
            </div>
            <div>
                <select value={apparelId} onChange={setApparelId}>
                    <option>Select</option>
                    {allApparel.map((item) => (
                        <option value={apparelId}>{item.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <ApparelForm />
            </div>


        </div>
    )

}

export default SellPage;
