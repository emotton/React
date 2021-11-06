import './App.css';
import { ApplicationProvider } from './contexts/usuarios';
import Header from './views/Header';
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './views/Content';

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
