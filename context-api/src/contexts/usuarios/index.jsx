import { createContext, useState } from 'react';

export const ApplicationContext = createContext({});

export const ApplicationProvider = ({ children }) => {

    const helloWorld = "Hello World";
    const [user, setUser] = useState('');

    return <ApplicationContext.Provider value={{ helloWorld, user, setUser }}>
        {children}
    </ApplicationContext.Provider>;
}