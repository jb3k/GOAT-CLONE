import { NavLink } from 'react-router-dom';
import './menubar.css'

function MenuBar() {

    return (
        <>
            <div className='mainpage-header'>
                <div className='mainpage-header-text'>
                    <NavLink to={'/shoes'} style={{ textDecoration: 'none' }} >
                        <div>Sneakers</div>
                    </NavLink>
                </div>
                <div className='mainpage-header-text'>
                    <NavLink to={'/shoes'} style={{ textDecoration: 'none' }} >
                        <div>Shoes</div>
                    </NavLink>
                </div>
                <div className='mainpage-header-text'>
                    <NavLink to={'/shoes'} style={{ textDecoration: 'none' }}>
                        <div>Apparel</div>
                    </NavLink>
                </div>
                <div className='mainpage-header-text'>
                    <NavLink to={'/shoes'} style={{ textDecoration: 'none' }}>
                        <div>Browse All</div>
                    </NavLink>
                </div>
            </div>
        </>
    )

}

export default MenuBar
