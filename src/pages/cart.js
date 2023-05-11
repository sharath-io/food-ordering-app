import { useContext, useState } from "react"
import { MenuContext } from "../contexts/menuContext"

export function Cart(){
    const {cart} = useContext(MenuContext);
    const [disable, setDisable] = useState(false);

    const [total, setTotal] = useState( cart.reduce((acc,curr) => (
        {...acc, accTime: acc.accTime + curr.delivery_time, accPrice: acc.accPrice + curr.price}
         ), {accTime: 0, accPrice: 0}));

         const applyCoupon = () => {
            setTotal({...total, accPrice: total.accPrice - 5});
            setDisable(true);
         }
    
    return (
        <div>
            <h1>Cart</h1>
            <h3>Total DeliveryTime: {total.accTime}</h3>
            <h3>Total Price: {total.accPrice}</h3>
            <button onClick={applyCoupon} disabled={disable}>Apply Coupon</button>
            <ul className="food-menu">
            {
             cart.map(food => <li className="food-card">
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