import './tagFilter.css'

function TagFilter({ filterTags, jordan, setJordan, nike, setNike, adidas, setAdidas }) {

    return (
        <div className='filter-tag-container'>
            {filterTags.size > 0 && Array.from(filterTags).map((tag, i) => {
                return (
                    <>
                        <div className='filter-tag-text'> Active Filters: </div>
                        <div key={i} className='filter-tag' onClick={() => {
                            if (tag === 'Jordan') {
                                setJordan(!jordan)
                            } else if (tag === 'Nike') {
                                setNike(!nike)
                            } else if (tag === 'Adidas') {
                                setAdidas(!adidas)
                            }
                        }}>
                            <i class="fa-solid fa-xmark" style={{ fontSize: '20px', marginRight: '10px', marginTop: '2px', color: 'black' }}></i>
                            {tag}
                        </div>
                    </>
                )

            })}
        </div>
    )


}

export default TagFilter
