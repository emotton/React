import React, { Component } from "react";

interface IProps {
  texto: string;
}

interface IState {
  contador: number;
  nome: string;
}

class ExemploClass extends Component<IProps, IState> {

    state: IState = {
        contador: 0,
        nome: 'Eduardo'
      };

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps: IProps) {}

  componentWillUnmount() {}

  render() {
    return <div>
        <h1>Sou um componente de Classe</h1>
        <h5>{this.props.texto}</h5>
        <div>
            {this.state.contador}
        </div>
        <div>
            {this.state.nome}
        </div>
        <div>
            <button onClick={
                ()=>this.setState({contador: (this.state.contador + 1)})
            }
            >Incrementar</button>
            <button onClick={
                ()=>this.setState({nome: 'Motton'})
            }
            >Mudar nome</button>
        </div>
    </div>;
  }
}

export default ExemploClass;
