import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Card from './components/layout/Card';
import './App.css';

export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="Primeiro Componente" color="#FA6900">
                <Primeiro />
            </Card>
            <Card titulo="Arrow" color="#E94C6F">
                <h1>Arrow</h1>
            </Card>
            <Card titulo="Com Parâmetros" color="#E8B71A">
                <ComParametro titulo="Segundo componente" aluno="Henrique" nota={9.3} />
            </Card>
            <Card titulo="Fragmento" color="#588C73">
                <Fragmento />
            </Card>
        </div>
    </div>;
