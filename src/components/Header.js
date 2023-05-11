import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {MenuContext} from '../index';
export function Header(){
    const {cart} = useContext(MenuContext);
    return (
        <div>
            <nav>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/menu" className="nav-link">Menu</NavLink>
                <NavLink to="/cart" className="nav-link">Cart ({cart.length})</NavLink>
            </nav>
        </div>
    )
}