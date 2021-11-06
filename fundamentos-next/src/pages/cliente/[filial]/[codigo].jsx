import Layout from "../../../components/Layout";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ClientePorCodigo() {
    const router = useRouter();
    /*
    useEffect(() => {
       console.log(router.query.codigo);
    }, []);
    */
    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Filial = {router.query.filial} </div>
            <div>Cliente = {router.query.codigo} </div>
        </Layout>
    )
}