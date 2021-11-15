import { useEffect, useState } from "react"

const Estatico = props => {

    const [valor, setValor] = useState(0)

    /*
    async function obterValor() {
        const resp = await fetch('/api/random')
        const dados = await resp.json()
        console.log(dados)
        setValor(dados.numero)
    }

    useEffect(obterValor, [])
    */

    return (
        <div>
            <h1>Estático</h1>
            <h2>Último valor = {props.valor}</h2>
        </div>
    )
}

export default Estatico

export const getStaticProps = async () => {

    const resp = await fetch('http://localhost:3000/api/random')
    const dados = await resp.json()

    return {
        revalidate: 10, // 10 segundos
        props: {
            valor: dados.numero
        }
    }
}