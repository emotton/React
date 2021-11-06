import Layout from '../components/Layout'
import { useState } from 'react';

export default function Estado() {
    let numero = 3;

    /*
    const state = useState(0);
    console.log(state);
    */

    /*
     const state = useState(0);
     let num = state[0];
     let alterarNum = state[1];
     */

    const [num, setNum] = useState(0);

    function incrementar() {
        console.log('incrementar');
        numero++;
        console.log(numero);
    }

    function incrementarNum() {
        setNum(num + 1);
    }

    return (
        <Layout titulo="Componente com estado">
            <div>{numero}</div>
            <button onClick={incrementar}>
                Incrementar numero
            </button>
            <div>{num}</div>
            <button onClick={incrementarNum}>
                Incrementar num
            </button>
        </Layout>

    )
}