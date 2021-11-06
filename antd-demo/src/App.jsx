import { Button } from 'antd';
import './App.css';
import Calendar from './components/Calendar';
import Switch from './components/Switch';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
        <h1>APP no ar</h1>
        <Button type="primary">Teste</Button>
        <Calendar></Calendar>
        <Switch></Switch>
        <Formulario></Formulario>
    </div>
  );
}

export default App;
