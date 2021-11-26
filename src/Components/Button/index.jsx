import {Button} from "./style"

function Buttons ({text, color, onclick, type}){

    return(
        <Button type={type} onClick={onclick} color={color} >{text}</Button>
    )

}

export default Buttons