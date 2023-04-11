import './tagFilter.css'

function TagFilter({ filterTags, jordan, setJordan, nike, setNike, adidas, setAdidas, size, setSize }) {

    return (
        <div className='filter-tag-container'>
            {filterTags.size > 0 && (
                <>
                    <div className="filter-tag-text">Active Filters:</div>
                    {Array.from(filterTags).map((tag) => {
                        const handleClick = () => {
                            switch (tag) {
                                case 'Jordan':
                                    setJordan(!jordan);
                                    break;
                                case 'Nike':
                                    setNike(!nike);
                                    break;
                                case 'Adidas':
                                    setAdidas(!adidas);
                                    break;
                                case size:
                                    setSize('')
                                    filterTags.delete(size)
                                default:
                                    break;
                            }
                        };

                        return (
                            <div key={tag} className="filter-tag" onClick={handleClick}>
                                <i className="fa-solid fa-xmark" style={{ fontSize: '20px', marginRight: '10px', marginTop: '2px', color: 'black' }}></i>
                                {tag}
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    )


}

export default TagFilter
