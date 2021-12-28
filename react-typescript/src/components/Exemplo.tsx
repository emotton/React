import React from 'react';
import { useState } from 'react';
import { ImCogs } from 'react-icons/im';

export default function Exemplo() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Sou um exemplo</h1>
            <div>{count}</div>
            <div>
                <button onClick={()=>setCount(count+1)}>Incrementar
                <ImCogs />
                </button>
            </div>
        </div>
    )
}