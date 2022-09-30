import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { createImageThunk, getAllApparelThunk } from '../store/apparel';



const UploadPicture = () => {
    const dispatch = useDispatch();
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    const [apparelId, setApparelId] = useState("None")
    const [imageLoading, setImageLoading] = useState(false);

    const allApparel = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getAllApparelThunk())
    }, [dispatch])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("image", image);
        console.log(formData)
        // dispatch(createImageThunk())

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch('/api/images', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setImageLoading(false);
            history.push("/images");
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={apparelId} onChange={setApparelId}>
                <option>Select</option>
                {allApparel.map((item) => (
                    <option value={item.id}>{item.name}</option>
                ))}
            </select>
            <input
                type="file"
                accept="image/*"
                onChange={updateImage}
            />
            <button type="submit">Submit</button>
            {(imageLoading) && <p>Loading...</p>}
        </form>
    )
}

export default UploadPicture;
