import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage, }) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((page, idx) => {
                    return (
                        <button key={idx}
                            onClick={() => setCurrentPage(page)}>
                            {page}
                        </button>
                    )
                })
            }
        </div>
    )


}

export default Pagination
