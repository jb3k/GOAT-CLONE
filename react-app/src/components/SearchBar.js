import { useState } from "react"
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './SearchBar.css'

const SearchBar = () => {

    const history = useHistory()
    const allApparel = useSelector(state => state.apparel)
    const [filterShoes, setFilterShoes] = useState([])
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        const shoeSearch = e.target.value
        setSearch(shoeSearch)
        const findShoe = Object.values(allApparel).filter(shoe => {
            return ((shoe.name.toLowerCase().includes(shoeSearch.toLowerCase())) || shoe.colorway.toLowerCase().includes(shoeSearch.toLowerCase()))
        })
        shoeSearch === '' ? setFilterShoes([]) : setFilterShoes(findShoe)

    }

    const handleSubmit = () => {
        // history.push(`/books/${searchable}`)
        setFilterShoes([])
        setSearch(false)
    }

    const clearSearchInput = () => {
        setFilterShoes([])
        setSearch('')
    }


    return (
        <div className='search-bar-container'>
            <form className="search-bar-input-container"
                onSubmit={handleSubmit}>
                <input
                    className='search-bar-input'
                    type='text'
                    value={search}
                    onChange={handleSearch}
                    placeholder='Search for brand, color, etc.'
                />
            </form>
            <div>
                <button className="clear-button"
                    onClick={() => { if (search.length !== 0) setSearch('') }}>
                    X
                </button>
            </div>
            <div className='shoe-search-results'>
                {
                    filterShoes.slice(0, 10).map((shoe, idx) => (
                        <NavLink to={`/shoe/${shoe.id}`}>
                            <div className='searchBookBarResult'
                                key={idx}>
                                <div>{shoe.name}</div>
                                <div>{shoe.colorway}</div>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchBar
