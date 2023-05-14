import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../api/fakeFetch";


export const MenuContext = createContext();

export const MenuProvider = ({children}) =>{
    const [menuData, setMenuData] = useState([]);
    const [cart, setCart] = useState([]);
    const [filters, setFilters] = useState({
        search:'', 
        checkBox: [],
        sortType: null});

    const handleSearch = (searchItem) =>{
        setFilters({...filters,search: searchItem});
    }

    const handleSort = (type) => setFilters({...filters, sortType: type});

    const handleCheckbox =(type) =>{
        filters.checkBox.includes(type)
        ?  setFilters({...filters,  checkBox: filters.checkBox.filter(checkboxFilter => checkboxFilter !== type)})
        : setFilters({...filters, checkBox: [...filters.checkBox, type]});
    }

    const checkboxFilteredData =
    filters?.checkBox?.length > 0
      ? menuData.filter((item) =>filters?.checkBox?.every((checkboxFilter) => item[checkboxFilter]))
      : menuData;

    const textFilteredData = 
    filters.search.length > 0
    ? checkboxFilteredData.filter(({name}) => name.toLowerCase().includes(filters.search.toLowerCase()))
    : checkboxFilteredData;

    const sortFilteredData = filters.sortType
    ? textFilteredData.sort((item1,item2) => filters.sortType==='lth' ? item1.price - item2.price : item2.price - item1.price)
    : textFilteredData;

    const getData = async () =>{
        try{
            const {status,data} = await fakeFetch('https://example.com/api/menu');
            if(status === 200){
                setMenuData(data.menu);
            }
            
        }catch(e){
            console.error(e)
        }
    }

    const addToCart = (item) => setCart([...cart, item]);

    


    useEffect(()=>{
      getData();
    },[])

    return (
        <MenuContext.Provider value={{menuData, cart,addToCart, handleSearch,handleSort, handleCheckbox, sortFilteredData}}>
        {children}
        </MenuContext.Provider>
    )
}