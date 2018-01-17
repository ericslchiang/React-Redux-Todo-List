import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick, onTodoChange}) => {
    return(
        <div >
            <ul>
            {todos.map((todo) => (
            <Todo
                key={todo.id}
                //This gives each element an unique key
                {...todo}
                //NOTE TO SELF: this is just another way of passing props into the todo element.
                //Writing text={todo.text} would be equivalent.  
                // onClick={() => onTodoClick(todo.id)}
                onClick={onTodoChange}
                //Testing changing the todo. change back to onTodoClick
            />
            ))}    
        </ul>
        </div>
    )
    
}
export default TodoList;