import React from 'react';
import ListContainer from '../container/ListContainer'
import AddTodo from '../container/AddTodo'
import CounterContainer from '../container/CounterContainer'

const App = () => {
    return (
    <div >
        <AddTodo />
        <ListContainer /> 
        <CounterContainer />
    </div>
    )
}

export default App;