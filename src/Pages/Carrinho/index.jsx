import {
  CardProduct,
  Container,
  HeaderCard,
  ContainerE,
  CarrinhoFinalizar,
} from "./style";
import Button from "../../Components/Button";
import HeaderCarrinho from "../../Components/HeaderCarrinho";
import { useState } from "react";
import { useContext } from "react";
import {CartContext} from "../../Providers/Cart"

function Carrinho() {
  const [atualizar, setAtualizar] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart")).length
      : 0
  );

  const {cart, removeToCart} = useContext(CartContext);

  function removeCart(id) {
    removeToCart(JSON.parse(localStorage.getItem("cart")).find((item)=>item.id === id));
    setAtualizar(JSON.parse(localStorage.getItem("cart")).length);
  }

  const total = cart.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual.price;
  }, 0);

  return (
    <div>
      <HeaderCarrinho atualizar={atualizar}></HeaderCarrinho>
      <ContainerE>
        <Container>
          {cart &&
            cart.map((item, index) => (
              <CardProduct key={index}>
                <HeaderCard>
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <span>{`R$ ${item.price.toString().replace(".", ",")}`}</span>
                </HeaderCard>
                <Button
                  onclick={() => removeCart(item.id)}
                  text={"Remover Carrinho"}
                  color="true"
                ></Button>
              </CardProduct>
            ))}
        </Container>
        <CarrinhoFinalizar>
          <div>
            <span>Total: </span>
            <span>{`R$ ${total.toFixed(2).toString().replace(".", ",")}`}</span>
          </div>
          <Button text={"Finalizar Compra"} color="true"></Button>
        </CarrinhoFinalizar>
      </ContainerE>
    </div>
  );
}
export default Carrinho;
