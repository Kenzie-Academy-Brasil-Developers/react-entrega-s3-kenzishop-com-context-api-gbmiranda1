import { createContext, useState } from "react";
import api from "../../services/api"

export const ProductContext = createContext([]);

export const ProductProvider = ({children}) => {
    const [product, setProducts] = useState([]);
    

    function buscarProdutos(){
        const token = JSON.parse(localStorage.getItem("Kenzie-shop:token"))
        api.get("/products/", {headers: { Authorization: `Bearer ${token}` }})
        .then((response) =>{
            setProducts(response.data)
        })
    }
   
    return(
        <ProductContext.Provider value={{product, buscarProdutos}}>
            {children}
        </ProductContext.Provider>
    )
}