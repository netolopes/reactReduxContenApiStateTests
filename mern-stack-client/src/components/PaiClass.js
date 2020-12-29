import React ,{useContext} from "react";
import FilhoClass from "./FilhoClass";
import { LocaleContext } from './authcontextoclass';

class PaiClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marca: "Ford",
      modelo: "Mustang",
      cor: "red",
      ano: 1964,
      revisao:['primeira rev','segunda rev','terceira rev'],
      novo:'',
      contador:0
    };
  }
  changeColor2 = () => {
    this.setState({cor: "blue"});
  }

 changeColor(){
   //ESTADO TOTAL/ESTADO ESPECIFICO/VALOR DO ESTADO ESPECIFICO
  this.setState({cor: "bluexxxxx"});
}

  addItem = () => {
    // recebe o state completo(por isso entre '{}') e adiciona no 
    // item 'revisao' o state atual de revisao + o valor de novo ,
   this.setState({
     revisao:[...this.state.revisao,this.state.novo]
    });
  }

  render() {
  //  const { Consumer } = LocaleContext;
    return (
      <div>
       <LocaleContext.Consumer>
       {
       localeVal => <h1>Eu sou um context api de class:  {localeVal.locale}</h1>
      }
    </LocaleContext.Consumer>
    <LocaleContext.Consumer>
    {localeVal => (
        <button onClick={localeVal.changeLocale}>Mudar Local</button>
      )}
    </LocaleContext.Consumer>
        <h1>My {this.state.marca}</h1>
        <p>
          It is a {this.state.cor} {this.state.modelo} from {this.state.ano}.
        </p>
        <button type="button" onClick={() => this.changeColor()} >Change color</button>
        <button type="button" onClick={this.changeColor2} >Change color 2</button>
        <p> 
          <ul>
            {this.state.revisao.map((v) =>(
            <li>{v}</li>
          ))}
          </ul>
        </p>
       
        
        <p>{this.state.novo}</p>
        <input type="text"  value={this.state.novo} onChange={(e) => this.setState({novo:e.target.value}) }  ></input>
        <button type="button" onClick={this.addItem} >Add item</button>
       
        <p>{this.state.contador}</p>
        <button type="button" onClick={() => this.setState({contador:this.state.contador + 1}) } >+</button>
        <button type="button" onClick={() => this.setState({contador:this.state.contador - 1})} >-</button>
      </div>
    );
  }
}

export default PaiClass;