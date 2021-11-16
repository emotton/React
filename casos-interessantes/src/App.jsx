import './App.css';
import CompPai2 from './Components/callback/CompPai2';
import CompPai from './Components/memo/CompPai';
import CompPai3 from './Components/useMemo/CompPai3';

function App() {
  return (
    <div className="App">
      <h1>Exemplos - Casos Interessantes</h1>
      <h4>Componentes renderizados sem necessidade</h4>
      <CompPai />
      <CompPai2 />
      <CompPai3 />
    </div>
  );
}

export default App;
