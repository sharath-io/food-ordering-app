import {   useContext} from "react"
import { MenuContext } from "../contexts/menuContext";
import { NavLink } from "react-router-dom";

export function Menu(){
    
    const {cart,addToCart, handleSearch,handleSort,handleCheckbox, sortFilteredData} = useContext(MenuContext);


    return (
        <div>
            <h1>Menu</h1>
            <h3>Filters</h3>

           
            <input type="text" onChange={(event)=> handleSearch(event.target.value)} />

            <label>
                <input type="checkbox" value="veg" onChange={()=> handleCheckbox('is_vegetarian')}/>
                veg
            </label>

            <label>
                <input type="checkbox" value="spicy" onChange={()=> handleCheckbox('is_spicy')}/>
                spicy
            </label>
            
            <label>
                <input type="radio" name="radio" value="lth"  onChange={()=> handleSort('lth')}/>
                Sort Low To High (price)
            </label>

            <label>
                <input type="radio" name="radio" vaue="htl"   onChange={()=> handleSort('htl')}/>
                Sort High to Low (price)
            </label>

            <ul className="food-menu">
            {
             sortFilteredData.map(food => <li className="food-card">
                <img src={food.image} alt={food.name}/>
               <p>Name: {food.name} </p>
               <p>Descrption: {food.description} </p>
               <p>Price: {food.price}</p>
               <p>Delivery Time: {food.delivery_time}</p>
               {
                !cart.includes(food) 
                ? <button onClick={()=> addToCart(food)}>Add to Cart</button>
                : <NavLink to="/cart"><button>Go to Cart</button></NavLink>
               }
                </li>)
            } 
            </ul>
        </div>
    )
}