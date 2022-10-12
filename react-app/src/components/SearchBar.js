import { useState } from "react"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './SearchBar.css'

const SearchBar = () => {

    const allApparel = useSelector(state => state.apparel)
    const [filterShoes, setFilterShoes] = useState([])
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        const shoeSearch = e.target.value
        setSearch(shoeSearch)
        const findShoe = Object.values(allApparel).filter(shoe => {
            return ((shoe.name.toLowerCase().includes(shoeSearch.toLowerCase())) || shoe.brand.toLowerCase().includes(shoeSearch.toLowerCase()))
        })
        shoeSearch === '' ? setFilterShoes([]) : setFilterShoes(findShoe)

    }

    const handleSubmit = () => {
        // history.push(`/shoe/${search}`)
        setFilterShoes([])
        setSearch(false)
    }
    const clearSearch = () => {
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
                {search.length !== 0 ? <button className="clear-button" onClick={clearSearch}>X</button> : <button style={{ border: 'none' }}></button>}
            </div>
            <div className='shoe-search-results'>
                {
                    filterShoes.slice(0, 10).map((shoe, idx) => (
                        <NavLink to={`/shoe/${shoe.id}`} style={{ textDecoration: 'none' }}>
                            <div className='dropdown-searchbar-results' key={idx} onClick={clearSearch} >
                                <div className='searchbar-image-container'>
                                    <img src={shoe.imageUrl} alt='shoe' className="searchbar-image"></img>
                                </div>
                                <div className="searchbar-text-container">
                                    <div>{shoe.name}</div>
                                    <div>{shoe.colorway}</div>
                                </div>
                            </div>
                        </NavLink>
                    ))
                }
            </div >
        </div >
    )
}

export default SearchBar
