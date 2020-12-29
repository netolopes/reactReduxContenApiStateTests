import React, { useState,useCallback,useContext,useEffect } from "react";
import Filho from "./Filho";

import { Button } from 'antd';
import { useModalContext } from './modal.context';

import { AuthContext } from './authcontexto';


function Pai(props) {
  const [msgs, setMsg] = useState("Olá cm vai vc?");
  const { openModal } = useModalContext();
  const abrirModal = () => openModal({ message: msgs });

  // pega o objeto completo (user) do contexto
  const {user, cliente,setCliente, login,setLogin} = useContext(AuthContext);

  console.log(user);
   const  handleEnviaFilho = () => { 
        return "Outro valor do Pai";
    }


   // gravar no localstorage
      useEffect(() => {
       const userStorage = localStorage.getItem("login");
       if(userStorage){
         setLogin(JSON.parse(userStorage))
       }else{
        setLogin({
          name:'',
        })
       }
       },[]);
       
       const handleLogin = () => {
        localStorage.setItem("login", JSON.stringify(login));
        setLogin(login)
       }

       const handleLogout = () => {
        localStorage.removeItem("login");
        setLogin({
          name:''
        })
       }

    return (
      <>
      <h1>Componente Pai</h1>
      <p>LOGADO EM PAI:{login.name}</p>
      LOGIN:<input  type="text"  onChange={(e) => setLogin({name:e.target.value})} />  
      <button   onClick={handleLogin}>Login</button>
      <button   onClick={handleLogout}>Logout</button>
      <p>Valor vindo globalmente de contextApi, user: {user.name} e cliente: {cliente.name} </p>
      <input  type="text"  onChange={(e) => setCliente({name:e.target.value})} />   
      <div>
        <Filho info2={handleEnviaFilho} info="Texto do componente Pai!" />
      </div>

    <div style={{"margin-top": "10px"}} >
      <input  type="text" value="" />        
      <button   onClick={() => handleEnviaFilho}>Enviar p/ Filho</button>
    </div>


    <h1>Modais personalizadas</h1>
      <Button onClick={abrirModal} type="primary">
        Abrir modal
      </Button>

   

      </>
    );
    }
export default Pai
