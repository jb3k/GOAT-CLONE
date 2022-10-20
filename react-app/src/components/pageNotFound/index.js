import React from 'react'

const PageNotFound = () => {
    return (
        <>
            <div className='navbar-spacing'></div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                <h1> 404 Page Not Found </h1>
                <p> Please direct back to the home page by clicking on "Browse" or "StockY"</p>
            </div>
        </>
    )
}

export default PageNotFound
