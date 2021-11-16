import { memo } from 'react';


const Comp2 = ({ value}) => {
    // console.log("comp2");
    return (
        <h1>{value}</h1>
    );
}

export default memo(Comp2);