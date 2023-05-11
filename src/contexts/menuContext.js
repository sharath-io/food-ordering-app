import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../api/fakeFetch";


export const MenuContext = createContext();

export const MenuProvider = ({children}) =>{
    const [menuData, setMenuData] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayData, setDisplayData] = useState([]);

    const getData = async () =>{
        try{
            const {status,data} = await fakeFetch('https://example.com/api/menu');
            if(status === 200){
                setMenuData(data.menu)
            setDisplayData(data.menu)
            }
            
        }catch(e){
            console.error(e)
        }
    }

    const changeHandler = (event) =>{
        const len = event.target.value.length;
        len> 0 
        ?  setDisplayData(
            menuData.filter(({name})=>name.toLowerCase().includes(event.target.value.toLowerCase()) ))
        : setDisplayData(menuData);
    }

    const handleSort=(input) =>{
        const sortedItems = input === 'lth'
         ? displayData.sort((a,b)=> a.price-b.price)
        : displayData.sort((a,b)=> b.price-a.price)
        setDisplayData([...sortedItems]);
    }

    const handleCheck = (input) =>{
        if(input==='veg')
        setDisplayData(displayData.filter(({is_vegetarian}) => is_vegetarian))
        else if (input === 'spicy')
         setDisplayData(displayData.filter(({is_spicy}) => is_spicy))
         else
         setDisplayData(menuData);
    }

    const addToCart = (item) => setCart([...cart, item]);


    useEffect(()=>{
      getData();
    },[])

    return (
        <MenuContext.Provider value={{displayData,handleSort, changeHandler, handleCheck, cart,addToCart}}>
        {children}
        </MenuContext.Provider>
    )
}