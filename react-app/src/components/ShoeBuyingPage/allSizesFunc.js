import React from 'react';
import { Link } from 'react-router-dom';


function AllSizesFunc({ listings, shoeId }) {

    let allsizes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    const list = []
    let priceList = {}
    let priceArr = []

    listings.map(list => {
        const { apparelId, price, size } = list
        if (apparelId.toString() === shoeId) {
            priceArr.push(price)
            priceArr.sort((a, b) => { if (a > b) return 1; if (a < b) return -1; return 0 })
            priceList[size] = priceArr[0]
        }

        return priceList
    })



    let priceListArr = Object.keys(priceList)

    allsizes.forEach((item1) => {
        // console.log(typeof item1)
        priceListArr.forEach((item2) => {
            if (item1.toString() === item2) {
                list.push(
                    <Link to={`/shoe/${shoeId}/buy/${item1}`} style={{ textDecoration: 'none' }}>
                        <div className='size-price-container'>
                            <div>
                                {item1}
                            </div>
                            <div className='size-price-container-price'>
                                {`$${priceList[`${item1}`]}`}
                            </div>
                        </div>
                    </Link>
                )
            }

        })
        if (!priceList[`${item1}`]) {
            list.push(<div className='size-price-container' key={item1.toString()} >
                <div>
                    {item1}
                </div>
                <div className='size-price-container-price'>
                    Sold Out
                </div>
            </div>
            )
        }
    })

    return (
        <>
            {list}
        </>
    )
}

export default AllSizesFunc
