import { memo } from 'react';

const Comp2 = ({ value, setValue }) => {
    // console.log("comp2");
    return (
        <button onClick={setValue}>Increment2 - {value}</button>
    );
}

export default memo(Comp2);