import React, { useContext } from 'react';
import { ApplicationContext } from '../contexts/usuarios';

export default function User() {

    const { user, setUser } = useContext(ApplicationContext);

    function onChange(e){
        setUser(e.target.value);
    }

    return (
        <div>
            <h1>User</h1>
            <input type="text" value={user} onChange={onChange} />
            <div>{user}</div>
        </div>
    )
}