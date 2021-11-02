import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'


const UseCallback = props => {
    const [count, setCount] = useState(0)
    
    /* Se for utilizado, a função passa a ser mantida, não afetando
    o seu estado, quando for passada, sendo a mesma, não gera nova
    renderização */
    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta)
    }, [])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!" />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback