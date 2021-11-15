import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

    const [codigo, setCodigo] = useState(1);
    const [cliente, setCliente] = useState({});

    function onChangeCodigo(e) {
        setCodigo(e.target.value)
    }

    async function  obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json();
        setCliente(dados);
    }

    function obterClienteSync(){
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados)) 
    }

    return (
        <Layout titulo="Integração com API #1">
            <input type="number" value={codigo} onChange={onChangeCodigo} />
            <button onClick={obterCliente}>
                Obter Cliente
            </button>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}