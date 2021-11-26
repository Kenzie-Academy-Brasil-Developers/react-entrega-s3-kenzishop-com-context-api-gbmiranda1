import {Switch} from "react-router-dom" 
import Cadastrar from "../Pages/Cadastrar";
import Login from "../Pages/Login"
import Dashboard from "../Pages/Dashboard"
import Route from "./route"
import Carrinho from "../Pages/Carrinho";
import { ToastContainer } from 'react-toastify';


function Routes(){
    return(
        <div>
             <ToastContainer/>
            <Switch>
                <Route exact path={"/"} component={Login}/>
                <Route path={"/cadastrar"} component={Cadastrar}/>
                <Route isPrivate path={"/dashboard"} component={Dashboard}/>
                <Route isPrivate path={"/carrinho"} component={Carrinho}/>
            </Switch>
        </div>
    )
}

export default Routes;