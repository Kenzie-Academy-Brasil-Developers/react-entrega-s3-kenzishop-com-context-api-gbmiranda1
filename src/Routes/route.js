import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import {UserContext} from "../Providers/user"
import { useContext } from "react";

const Route =({isPrivate = false, component: Component, ...rest}) => {
    const {token} = useContext(UserContext);
    return (
        <ReactDOMRoute 
            {...rest} 
            render={() => {
                return isPrivate === !!token ? <Component/> : <Redirect to={isPrivate ? "/" : "/dashboard"}/>
            }}
        />

    )
}

export default Route;