# React
React

npx create-react-app my-app --template typescript

yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-prettier eslint-plugin-prettier prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser -D

    "eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "typescript", "autoFix": true},
        { "language": "typescriptreact", "autoFix": true}
    ],

yarn add eslint-import-resolver-typescript -D
Referências

yarn add react-redux redux

-----------------------------------------------------------------------------------


yarn add -D @types/react-redux
===========
https://www.youtube.com/watch?v=OXxul6AvXNs&t=11s


Ponto-01
-------
import ReactDOM from 'react-dom'
import React from 'react'

const tag =  <strong>Olá React !!!</strong>
const el = document.getElementById('root');
ReactDOM.render(
    <div>
       {tag}
    </div>
, el);

Ponto-02
-------
import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

const tag =  <strong>Olá React !!!</strong>
const el = document.getElementById('root');
ReactDOM.render(
    <div>
       {tag}
    </div>
, el);


Ponto-03
-------
export default function Primeiro() {
    return 'Primeiro Componente'
}

### como default, a function nem precisa ter nome, pode ser anonima ()

Ponto-04
-------
import React from 'react';

export default function Primeiro() {
    return <h2>Primeiro Componente</h2>;
}

### em versões atuais, o import não é necessário

Ponto-05
-------
Pode utilizar extensão js, no entanto, utilizar jsx ajuda o auto preenchimento

Ponto-06
-------
export default function ComParametro(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
        </div>
    );
};

 <ComParametro titulo="Segundo componente" subtitulo="Subtitulo!" />

Ponto-07
-------
 <ComParametro titulo="Segundo componente" aluno="Henrique"  nota={9.3} />

 ## passar números com {}

Ponto-08
--------
export default function ComParametro(props) {
    console.log(props);
    props.nota = 10;
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.aluno}</h3>
            <p>{props.nota}</p>
        </div>
    );
};

## Propriedades são readonly, não podem ser mudadas

Ponto-09
--------
Em jsx não pode existe mais de um componente, logo, no mínimo deve ser envolvido com um DIV

Assim como pode utilizar um Fragmento <> </>

import React from 'react';

export default function Fragmento(props) {
    return (
        <>
            <h2>Fragmento</h2>
            <p>cuidado com esse erro</p>
        </>
    )
}

Neste formato não pode-se atribuir propriedade <valor="kkkk">

ou

import React from 'react';

export default function Fragmento(props) {
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>cuidado com esse erro</p>
        <React.Fragment/>
    )
}

Utilizando neste formato, pode-se utilizar propriedades 
<React.Fragment valor="kkkkk">

Ponto-10
--------
export default _ => {
    return (
        <div>
            <h1>Fundamentos React Arrow</h1>
            <Primeiro/>
            <ComParametro titulo="Segundo componente" aluno="Henrique"  nota={9.3} />
            <Fragmento />
     </div>
    )
}

Função Arrow que descarta o parametro

Ponto-11
--------
export default _ =>
    <div>
        <h1>Fundamentos React Arrow</h1>
        <Primeiro/>
        <ComParametro titulo="Segundo componente" aluno="Henrique"  nota={9.3} />
        <Fragmento />
     </div>

Forma mais reduzida

Ponto-12
--------
import React from 'react';
import './Card.css';

export default props => {
    return (
        <div className="Card">
            <div>Conteúdo</div>
            <div>{props.titulo}</div>
        </div>
    );
};

Utilização de class, deve ser className

Ponto-13
--------
Pode-se baixar fontes e disponibilizar colocando via link no index.html

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">


Ponto-14
--------
export default props => {
    return (
        <div className="Card">
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};

<div>
    <Card titulo="Primeiro Componente">
        <Primeiro />
    </Card>
    <Card titulo="Arrow">
        <h1>Fundamentos React Arrow</h1>
    </Card>
    <Card titulo="Com Parâmetros">
        <ComParametro titulo="Segundo componente" aluno="Henrique" nota={9.3} />
    </Card>
    <Card titulo="Fragmento">
        <Fragmento />
    </Card>
</div>;


Ferramentas
===========
https://fonts.google.com/