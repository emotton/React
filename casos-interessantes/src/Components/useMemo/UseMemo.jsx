import { useState, useCallback, useMemo } from 'react';

import Comp1 from './Comp1';
import Comp2 from './Comp2';

const UseMemo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrement1 = useCallback(() => {
        setCount1(count1 + 1);
    }, [count1]);

    const handleIncrement2 = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]);

    const chooseColor = useMemo(() => {

        for(let i=0; i<10 ** 9; i++){
            i += 1;
            i -= 1;
        }

        if(count1 % 2 === 0){
            return 'red';
        }
        if(count1 % 3 === 0){
            return 'blue';
        }
        if(count1 % 5 === 0){
            return 'green';
        }

        return 'orange';
    }, [count1]);

    return (
        <div>
            <h5>UseMemo : Problema : Mesmo quando for atualizar o segundo comp, refaz a cor</h5>
            <h5>utilizando useMemo ele guarda a cor</h5>
            <Comp1 color={chooseColor} value={count1} setValue={handleIncrement1} />
            <Comp2 value={count2} setValue={handleIncrement2} />
        </div>
    );
}

export default UseMemo;