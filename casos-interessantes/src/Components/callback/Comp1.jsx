import { memo } from 'react';

const Comp1 = ({ value, setValue }) => {
    // console.log("comp1");
    return (
        <button onClick={setValue}>Increment1 - {value}</button>
    );
}

export default memo(Comp1);