import { useState } from 'react';

import Comp1 from './Comp1';
import Comp2 from './Comp2';

const Memo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
            <h5>Memo : Problema : como o estado está no CompPai, recria ambos componentes</h5>
            <h5>Desta forma usando memo, apenas o comp em questão é renderizado</h5>
            <Comp1 value={count1} />
            <button onClick={() => setCount1(count1 + 1)}>Increment1</button>
            <Comp2 value={count2} />
            <button onClick={() => setCount2(count2 + 1)}>Increment2</button>
        </div>
    );
}

export default Memo;