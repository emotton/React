import { memo } from 'react';

const Comp1 = ({ value, setValue, color }) => {
    // console.log("comp1");
    return (
        <button style={{ color }} onClick={setValue}>Increment1 - {value}</button>
    );
}

export default memo(Comp1);