import './App.css';
import Callback from './Components/callback/Callback';
import Memo from './Components/memo/Memo';
import UseMemo from './Components/useMemo/UseMemo';
import SemUseState from './Components/useState/SemUseState';
import UseState from './Components/useState/UseState';

function App() {
  return (
    <div className="App">
      <h1>Exemplos - Casos Interessantes</h1>
      <h4>Componentes renderizados sem necessidade</h4>
      <Memo />
      <Callback />
      <UseMemo />
      <SemUseState /> 
      <UseState />
    </div>
  );
}

export default App;
