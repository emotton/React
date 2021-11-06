import React, { useContext } from 'react';
import { ApplicationContext } from '../contexts/usuarios';

export default function Home() {

    const { helloWorld } = useContext(ApplicationContext);
    const { user, setUser } = useContext(ApplicationContext);

    function onChange(e){
        setUser(e.target.value);
    }

    return (
        <div>
            <h1>Home</h1>
            <h2>{helloWorld}</h2>
            <input type="text" value={user} onChange={onChange} />
            <div>{user}</div>
        </div>
    )
}