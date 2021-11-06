import './App.css';
import { ApplicationProvider } from './contexts/usuarios';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <ApplicationProvider>
      <div className="App">
        <h1>APP</h1>
        <Router>
          <Header></Header>
          <Content></Content>
        </Router>
      </div>
    </ApplicationProvider>
  );
}

export default App;
