import { useContext } from "react"
import { MenuContext } from "../contexts/menuContext"

export function Menu(){
    const {menuData} = useContext(MenuContext);
    return (
        <div>
            <h1>Menu</h1>
            <ul className="food-menu">
            {
             menuData.map(food => <li className="food-card">
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

// id: 2,
//                 name: 'Pepperoni Pizza',
//                 description: 'Pepperoni, mozzarella, and tomato sauce.',
//                 price: 14.99,
//                 image:
//                   'https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_6240,h_4160,al_c,q_90/Pepperoni%20Pizza_1_compressed.jpg',
//                 is_vegetarian: false,
//                 is_spicy: true,
//                 delivery_time: 35,