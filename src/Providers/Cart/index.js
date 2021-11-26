import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
        const list = JSON.parse(localStorage.getItem("cart")) || [];
    
        if(list.filter((item) => item.id === product.id).length === 0){
            const novaLista = [...list, product];
            localStorage.setItem("cart", JSON.stringify(novaLista));
            setCart(novaLista)
        }
        
    }
    
    const removeToCart = (product, setProdutosCarrinho) => {
        const list = JSON.parse(localStorage.getItem("cart")) || [];
        const novaLista = list.filter((item) => item.id !== product.id);
        setCart(novaLista)
        localStorage.setItem("cart", JSON.stringify(novaLista));
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeToCart}}>
            {children}
        </CartContext.Provider>
    )
}