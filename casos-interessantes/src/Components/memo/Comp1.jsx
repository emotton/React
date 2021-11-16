import { memo } from 'react';

const Comp1 = ({ value}) => {
    // console.log("comp1");
    return (
        <h1>{value}</h1>
    );
}

export default memo(Comp1);