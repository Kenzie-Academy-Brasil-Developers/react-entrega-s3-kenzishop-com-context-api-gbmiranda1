
import Header from "../../Components/Header"
import {TextField} from "@mui/material"
import {Div, Form, Error} from "./style"
import Button from "../../Components/Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory}  from 'react-router-dom'
import api from "../../services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cadastrar(){
    const history = useHistory();

    const formSchema = yup.object().shape({
        username: yup.string().required("Nome de usuário obrigatório").matches(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/, "Minimo 5 caracteres;Sem espaço;Deve começar com uma letra;Pode ter . - _;Não pode começar nem terminar com . - _"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "No mínimo 8 caracters;Pelo menos uma letra;Pelo menos uma número;Pelo menos um caractere especial"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Senhas não coincidem"),
    })
    
      const { register, 
              handleSubmit, 
              formState: { errors },
      } = useForm({
        resolver:yupResolver(formSchema),
      })
    
      const onSubmitFunction = data => {
        delete data.confirmPassword
        api.post(`/users/`, data)
          .then((response)=> {
              toast.success("Cadastro feito com sucesso")
              history.push("/")
          })
          .catch((_) => {
              toast.error("E-mail ou usuário já cadastrados")
          })
      }

    return(
        <Div>
            <Header></Header>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField {...register("username")} margin="normal" fullWidth id="login-basic" label="Usuário" variant="outlined" />
                <Error>
                    {
                    errors.username?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                </Error>
                <TextField {...register("email")} margin="normal" fullWidth type="email" id="password-basic" label="E-mail" variant="outlined" />
                <Error >
                    {
                    errors.email?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                </Error>
                <TextField type="password" {...register("password")} margin="normal" fullWidth id="password-basic" label="Senha" variant="outlined" />
                <Error>
                    {
                    errors.password?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                </Error>
                <TextField type="password" {...register("confirmPassword")} margin="normal" fullWidth id="passwordconfirm-basic" label="Confirmar senha" variant="outlined" />
                <Error>
                    {
                    errors.confirmPassword?.message.split(";").map((item)=>(
                        <li>
                          {item}
                        </li>
                    ))
                    
                    }
                </Error>
                <Button type="submit" text={"Cadastrar"} color="true"></Button>
                <Button text={"Login"} onclick={()=> history.push("/")}></Button>
            </Form>
        </Div>
    )
}

export default Cadastrar;