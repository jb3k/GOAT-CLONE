import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className="pagination-container">
            <button className="pagination-next" onClick={() => { if (currentPage > 1) setCurrentPage(currentPage - 1) }}>{'<'}</button>
            {
                pages.map((page, idx) => {
                    return (
                        <>

                            <button key={idx}
                                onClick={() => setCurrentPage(page)}
                                className={page == currentPage ? 'active' : 'pagination-boxes'}>
                                {page}
                            </button>
                        </>
                    )
                })
            }
            <button className="pagination-next" onClick={() => { if (currentPage <= pages.length) setCurrentPage(currentPage + 1) }}>{'>'}</button>
        </div>
    )


}

export default Pagination
