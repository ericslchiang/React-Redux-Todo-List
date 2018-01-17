export const addTodo = (text) => ({
    type: 'ADD',
    id: Date.now(),
    text
})

export const changeTodo = (text, id) => ({
    type: 'CHANGE',
    id,
    text,
    lastVal: '',
    isEdit: false
})

export const removeTodo = (id) => ({
    type: "REMOVE",
    id
})