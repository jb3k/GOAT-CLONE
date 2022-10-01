import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom';
import { getApparelThunk } from '../../store/apparel';
import ShoePurchasePage from './ShoePurchase';
import ShoeReviewPage from './ShoeReview';
import ShoeSizePage from './ShoeSize';
import './page1.css'


function ShoeListingPage() {
    const dispatch = useDispatch()

    const [isLoaded, setIsLoaded] = useState(false)
    const { shoeId } = useParams();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        size: "",
        price: "",
    });


    // const history = useHistory()
    const shoeInfo = useSelector(state => Object.values(state.apparel))

    useEffect(() => {
        dispatch(getApparelThunk(shoeId))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    const shoePages = ["Select Size", "Payment Info", "Review Order"];

    const PageDisplay = () => {
        if (page === 0) {
            return <ShoeSizePage />;
        } else if (page === 1) {
            return <ShoePurchasePage />;
        } else {
            return <ShoeReviewPage />;
        }
    };


    const shoePage = shoeInfo.map((shoe) => {

        const { colorway, id, imageUrl, name, listings } = shoe

        let leftContainer = (
            <>
                <div>
                    <div>
                        left container
                        <div>
                            {name}
                        </div>
                        <div>
                            {colorway}
                        </div>
                        <div>
                            <img src={imageUrl} alt="shoe image"></img>
                        </div>
                    </div>
                </div>
            </>
        )

        return (
            <div key={id}>
                {leftContainer}
            </div>
        )

    })


    return isLoaded && (
        <div className='buy-sell-form-main-container'>
            <div className='buy-sell-form-main-container-left-container'>
                {shoePage}
            </div>
            <div className='buy-sell-form-main-container-right-container'>
                <div className="buy-sell-form-main-header">
                    <h1>{shoePages[page]}</h1>
                </div>
                <div className="buy-sell-form-main-container-body">{PageDisplay()}</div>
                <div className="buy-sell-form-main-container-bottom-buttons">
                    <button
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}>
                        Prev
                    </button>
                    <button
                        onClick={() => {
                            if (page === shoePages.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {page === shoePages.length - 1 ? "Confirm Sale" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShoeListingPage;
