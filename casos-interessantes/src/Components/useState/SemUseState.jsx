import React from 'react';

const SemUseState = () => {

    let i = 0;

    return (
        <div>
            <h5>O react não renderiza pelo fato de mudar uma variável</h5>
            <h1>{i}</h1>
            <button onClick={()=> { i+= 1; console.log(i);}}>Increment</button>
        </div>
    );

}

export default SemUseState;
