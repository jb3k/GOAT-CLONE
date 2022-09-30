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



//         < select name = 'type' value = { type } onChange = { e => setType(e.target.value)
// } >
//                                 <option value='In person'>In Person</option>
//                                 <option value='Online'>Online</option>
//                             </select >



    //how can i get the value from the drop down menu


    return (
    <div>
        <div>
            <h1>This will be the header</h1>
        </div>
        <div>
            <select value={apparelId} onChange={(e) => setApparelId(e.target.value)}>
                <option>Select</option>
                {allApparel.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
        <div className='signup-whole-page'>
            <ApparelForm />
        </div>


    </div>
)

}

export default SellPage;
