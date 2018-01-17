import React from 'react';

const Counter = ({numFin, numTodo}) => {
    return (
        <div>
            <hr/>
            <p>Finished: {numFin}</p>
            <hr/>
            <p>Todos: {numTodo}</p>
        </div>
    )
}

export default Counter;