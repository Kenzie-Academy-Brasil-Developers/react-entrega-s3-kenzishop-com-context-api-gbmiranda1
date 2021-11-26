import api from "../../services/api"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({children}) => {

    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem("Kenzie-shop:token")))
    }, [token])

    const signIn = (data) => {
        api.post(`/sessions/`, data)
        .then((response)=> {
            localStorage.clear()
            const { access } = response.data
            localStorage.setItem("Kenzie-shop:token", JSON.stringify(access));        
            setToken(access)
        })
        .catch((_) => {
            toast.error("Usuário ou senha inválidos")
        })
    }
    
    const logOut = () => {
        localStorage.clear()
        setToken("")
    }

    return(
        <UserContext.Provider value={{signIn, logOut, token}}>
            {children}
        </UserContext.Provider>
    )
}

