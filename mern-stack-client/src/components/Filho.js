import React, { useState,useCallback,useContext } from "react";
import { render } from "react-dom";
import { AuthContext } from './authcontexto';

function Filho(props) {

  const [msg, setMsg] = useState("Olá cm vai vc?");
  const [tecnologias, setTecnologias] = useState(['react', 'php', 'ruby']);
  //PARA ADICIONAR UM NOVO ITEM ADICIONA UMA VALOR EM setEstado
  const [novo, setNovo] = useState('');
  const [valor, setValor] = useState(0);

  //const [vinfo, setVinfo] = useState('');
  

// pega o objeto completo (user) do contexto
const {user,cliente,login} = useContext(AuthContext);


  const handleMsg = () => {
    alert('texto: '+ msg);
  }

    // sem callback, gasto de memoria
   function handlaAddFunction() {
    setTecnologias([...tecnologias, novo]);
  setMsg('aaaaaaaaaaaaaaaa');
  setNovo('');
   }

// com callback sem gasto de memoria , aguarda array de dependencia atualizar
const handlaAddArrow = useCallback(() => {
  //adiciono em setTecnologias o valor atual + o novo valor!
  setTecnologias([...tecnologias, novo]);
  setMsg('aaaaaaaaaaaaaaaa');
  setNovo('');
}, [novo, tecnologias]); // array de dependencia

function handleContMais() {
  setValor(valor +1);
}

  function handleContMenos(){
    setValor(valor - 1);
   }; 


    return(
      <>
       <p>LOGADO EM FILHO:{login.name}</p>
       <p>Valor vindo globalmente de contextApi: {user.name} e cliente:  {cliente.name}</p>
      <p>{props.info}</p>
      <p>{props.info2}</p>
      <button onClick={() => handleMsg(msg)}>Alert msg</button><br/>

      <ul>
        {tecnologias.map((v) => (
          <li>{v}</li>
        ))}
      </ul>

      <p>{novo}</p>
          <input type="text" value={novo} onChange={(e) => setNovo(e.target.value)} />
      
      <button type="button" onClick={() => handlaAddFunction()}>
      executa cm funcao
      </button>
      <button type="button" onClick={handlaAddArrow}>
        executa cm arrow
      </button>

      <p>Contador: {valor}</p>
      <button type="button" onClick={handleContMais}> + </button>
      <button type="button" onClick={handleContMenos}> - </button>
      </>
    )
  }


export default Filho