import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../api/fakeFetch";


export const MenuContext = createContext();

export const MenuProvider = ({children}) =>{
    const [menuData, setMenuData] = useState([]);

    const getData = async () =>{
        try{
            const {status,data} = await fakeFetch('https://example.com/api/menu');
            if(status === 200)
            setMenuData(data.menu)
        }catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
      getData();
    },[])

    return (
        <MenuContext.Provider value={{menuData}}>
        {children}
        </MenuContext.Provider>
    )
}