import { useContext } from "react"
import { MenuContext } from "../contexts/menuContext"

export function Menu(){
    const {displayData, handleSort,changeHandler, handleCheck} = useContext(MenuContext);

    return (
        <div>
            <h1>Menu</h1>
            <h3>Filters</h3>

            <input type="text" onChange={changeHandler}/>

            <label>
            <input type="checkbox" name="checkbox" onChange={()=> handleCheck('veg')}></input>
                Veg
            </label>
            <label>
            <input type="checkbox" name="checkbox" onChange={()=> handleCheck('spicy')}></input>
                Spicy
            </label>

            
            
            <label>
            <input type="radio" name="radio" onChange={()=> handleSort('lth')}></input>
                Sort(price) Low to High
            </label>

            <label>
            <input type="radio" name="radio" onChange={()=> handleSort('htl')}></input>
                Sort(price) High to Low
            </label>
            

            <ul className="food-menu">
            {
             displayData?.map(food => <li className="food-card">
                <img src={food.image} alt={food.name}/>
               <p>Name: {food.name} </p>
               <p>Descrption: {food.description} </p>
               <p>Price: {food.price}</p>
               <p>Delivery Time: {food.delivery_time}</p>
                </li>)
            } 
            </ul>
        </div>
    )
}