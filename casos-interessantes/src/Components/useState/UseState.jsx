import React, { useState } from 'react';

const UseState = () => {

    const [i, setI] = useState(0);
    const [inputValue, setinputValue] = useState('');
    const [tasks, settasks] = useState([]);

    return (
        <div>
            <h5>Utilizando useState para guardar estados do componente</h5>
            <h1>{i}</h1>
            <button onClick={() => setI(i + 1)}>Increment</button>
            <br />
            <hr />
            <form onSubmit={(e)=>{
                e.preventDefault();
                settasks([...tasks, inputValue] )
                setinputValue('')
            }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setinputValue(e.target.value)}
                />
                <br />
                <span>{inputValue}</span>

            </form>
            <ul>
                {tasks.map((task, index) => 
                <li key={task}>
                    {task}
                    <button onClick={()=> settasks(tasks.filter((t, taskIndex)=>
                        taskIndex  !== index
                    ))}>X</button>
                </li>
                )}
            </ul>
        </div>
    );

}

export default UseState;
