import {NavLink} from 'react-router-dom';
export function Header(){
    return (
        <div>
            <nav>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/menu" className="nav-link">Menu</NavLink>
                <NavLink to="/cart" className="nav-link">Cart</NavLink>
            </nav>
        </div>
    )
}