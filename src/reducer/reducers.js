const initState={
    todos: [],
    numTodo: 0,
    numFin: 0
};
//Using the increment counter for the states would only 
//manipulate the previous state, instead of creating a new state
const reducers = (state = initState, action) => {
    switch(action.type){
        case "ADD":
            state ={
                ...state,
                todos: [...state.todos, {text: action.text, id: action.id/*, lastVal: ''*/}],
                numTodo: state.numTodo + 1
            }
            return state;
        case "REMOVE":
            state = {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.id)],
                numTodo: state.numTodo - 1,
                numFin: state.numFin + 1
            }
            return state;

        case 'CHANGE':
            state = {
                ...state,
                todos: [...state.todos.map((todo) =>
                    (todo.id === action.id) ? 
                    (
                        todo.lastVal = todo.text,
                        todo.text = action.text
                    )
                    : todo
                )]
            }
            return state;

        default:
            return state;
    }
}

export default reducers;