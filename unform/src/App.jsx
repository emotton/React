import './App.css';
import Form from './components/Form';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Form>
        <Input name="name" />
        <Input name="email" />
        <button>Enviar</button>
      </Form>
    </div>
  );
}

export default App;
