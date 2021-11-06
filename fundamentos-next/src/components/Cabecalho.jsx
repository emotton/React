import Link from 'next/link';

export default function Cabecalho(props) {
    return (
        <header>
            <h1>{props.titulo}</h1>
            <Link href="/estiloso">Estiloso</Link>
        </header>
    )
}