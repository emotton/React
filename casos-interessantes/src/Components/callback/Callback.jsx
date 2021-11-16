import { useState, useCallback } from 'react';

import Comp1 from './Comp1';
import Comp2 from './Comp2';

const Callback = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrement1 = useCallback(() => {
        setCount1(count1 + 1);
    }, [count1]);

    const handleIncrement2 = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]);

    return (
        <div>
            <h5>CallBack : Problema : Toda vez que renderiza o CompPai2, recria as duas funções</h5>
            <h5>com Callback, desta forma mantem a mesma função</h5>
            <Comp1 value={count1} setValue={handleIncrement1} />
            <Comp2 value={count2} setValue={handleIncrement2} />
        </div>
    );
}

export default Callback;