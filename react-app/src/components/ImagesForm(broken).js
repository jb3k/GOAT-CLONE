// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from "react-router-dom";
// import { createImageThunk, getAllApparelThunk } from '../store/apparel';



// const UploadPicture = () => {
//     const dispatch = useDispatch();
//     const history = useHistory(); // so that we can redirect after the image upload is successful
//     const [apparelId, setApparelId] = useState(null)
//     const [image, setImage] = useState(null);
//     const [errors, setErrors] = useState([]);
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [colorway, setColorway] = useState("")
//     const [release_date, setReleaseDate] = useState("")
//     const [brand, setBrand] = useState("")
//     const [style, setStyle] = useState("")
//     const [brand_type, setBrandType] = useState("")
//     const [condition, setCondition] = useState("")
//     const [retail_price, setRetailPrice] = useState(0)
//     const [size, setSize] = useState(0)
//     const [imageLoading, setImageLoading] = useState(false);
//     // const [price_sold, setPriceSold] = useState(0)
//     // const [quantity_sold, setQuantitySold] = useState(0)

//     const allApparel = useSelector(state => Object.values(state.apparel))
//     const getApparelId = allApparel.map((id) => id.id)



//     useEffect(() => {
//         dispatch(getAllApparelThunk())
//     }, [dispatch])


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();

//         formData.append("image", image);
//         // console.log(formData)
//         // dispatch(createImageThunk())

//         // aws uploads can be a bit slow—displaying
//         // some sort of loading message is a good idea
//         setImageLoading(true);

//         const res = await fetch('/api/apparel/', {
//             method: "POST",
//             body: formData,
//         });
//         if (res.ok) {
//             await res.json();
//             setImageLoading(false);
//             // if successful image, then add to main page?
//             // history.push("/");
//         }
//         else {
//             setImageLoading(false);
//             // a real app would probably use more advanced
//             // error handling
//             console.log("error");
//         }
//     }

//     const updateImage = (e) => {
//         const file = e.target.files[0];
//         setImage(file);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <select value={apparelId} onChange={(e) => setApparelId(e.target.value)}>
//                 <option>Select</option>
//                 {allApparel.map((item) => (
//                     <option key={item.id} value={item.id}>{item.name}</option>
//                 ))}
//             </select>
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={updateImage}
//             />
//             <div>
//                 <input
//                     type='text'
//                     name='name'
//                     onChange={(e) => setName(e.target.value)}
//                     value={name}
//                     placeholder={"sneaker name"}
//                 ></input>
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='description'
//                     onChange={(e) => setDescription(e.target.value)}
//                     value={description}
//                     placeholder={"Description"}
//                 ></input>
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='price'
//                     onChange={(e) => setPrice(e.target.value)}
//                     value={price}
//                     placeholder={"price"}
//                 ></input>
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='colorway'
//                     onChange={(e) => setColorway(e.target.value)}
//                     value={colorway}
//                     placeholder={"colorway"}
//                 ></input>
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='release_date'
//                     onChange={(e) => setReleaseDate(e.target.value)}
//                     value={release_date}
//                     placeholder={"release date"}
//                 ></input>
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='brand'
//                     onChange={(e) => setBrand(e.target.value)}
//                     value={brand}
//                     placeholder={"brand"}
//                 ></input>
//             </div>
//             <div>
//                 <select value={style} onChange={(e) => setStyle(e.target.value)}>
//                     <option value={style}> Select </option>
//                     <option value={style}> low </option>
//                     <option value={style}> mid </option>
//                     <option value={style}> high </option>
//                 </select>
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='brand_type'
//                     onChange={(e) => setBrandType(e.target.value)}
//                     value={brand_type}
//                     placeholder={"Ex: Kobe 6 "}
//                 ></input>
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='brand_type'
//                     onChange={(e) => setBrandType(e.target.value)}
//                     value={brand_type}
//                     placeholder={"brand type"}
//                 ></input>
//             </div>
//             <div>
//                 <select value={condition} onChange={(e) => setCondition(e.target.value)}>
//                     <option value={condition}> Select </option>
//                     <option value={condition}> new </option>
//                     <option value={condition}> used </option>
//                 </select>
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='retail_price'
//                     onChange={(e) => setRetailPrice(e.target.value)}
//                     value={retail_price}
//                     placeholder={"retail price"}
//                 ></input>
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='size'
//                     onChange={(e) => setSize(e.target.value)}
//                     value={size}
//                     placeholder={"retail price"}
//                 ></input>
//             </div>

//             <button type="submit">Submit</button>
//             {(imageLoading) && <p>Loading...</p>}
//         </form>
//     )
// }

// export default UploadPicture;
