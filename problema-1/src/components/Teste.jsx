import { useState } from "react";

function Teste() {
  const [state, setState] = useState({
    total: 2, lista: ['Eduardo', 'Henrique']
  });

  const addToList = () => {
    setTimeout(()=> {
      setState((prevState) => {
        return { total: prevState.lista.length + 1, lista: [ ...prevState.lista, 'Bheatriz']}
      })
    }, 2000);
  };

  return (
    <div className="App">
      <h1>Teste</h1>
      {JSON.stringify(state)}
      <button onClick={addToList}>Add</button>
      <button onClick={() => setState({ total: 0, lista: []})}>Clear</button>
    </div>
  );
}

export default Teste;
