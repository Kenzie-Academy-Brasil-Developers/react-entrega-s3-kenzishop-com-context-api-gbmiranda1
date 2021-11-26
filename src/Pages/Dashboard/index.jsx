import {useState } from "react"
import HeaderLogado from "../../Components/HeaderLogado"
import {CardProduct, Container, HeaderCard} from "./style"
import Button from "../../Components/Button"
import {useContext, useEffect} from "react";
import {CartContext} from "../../Providers/Cart"
import {ProductContext} from "../../Providers/Products"

function Dashboard(){
    const [atualizar, setAtualizar] = useState(JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).length :  0)
    const {product, buscarProdutos} = useContext(ProductContext);
    const {addToCart} = useContext(CartContext);


    useEffect(() => {
        buscarProdutos()
    }, [])



    function addCart(id){
        addToCart(product.find((item)=>item.id === id))
        setAtualizar(JSON.parse(localStorage.getItem("cart")).length)
    }

    return(
        <div>
            <HeaderLogado atualizar={atualizar}></HeaderLogado>
            <Container>
            {
                product.map((item, index) =>(
                    <CardProduct key={index}>
                        <HeaderCard>
                            <img  src={item.image} alt={item.title}/>
                            <h3>{item.title}</h3>
                            <span>{`R$ ${(item.price).toString().replace(".", ",")}`}</span>
                        </HeaderCard>
                        <Button onclick={() => addCart(item.id)} text={"Adicionar Carrinho"} color="true"></Button>
                    </CardProduct>
                ))
            }
            </Container>
        </div>
    )
}

export default Dashboard;