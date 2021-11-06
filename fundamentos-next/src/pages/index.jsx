import Navegador from "../components/Navegador"

export default function Inicio() {
    return (
        <div style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           height: '100vh'
        }}>
            <Navegador texto="Estiloso" color="red" destino="/estiloso" />
            <Navegador texto="Exemplo" color="darkviolet" destino="/exemplo" />
            <Navegador texto="Navegação #01" color="green" destino="/navegacao" />
            <Navegador texto="Navegação #02" color="green" destino="/cliente/sp-1/123" />
            <Navegador texto="Estado" color="pink" destino="/estado" />
        </div>
    )
}