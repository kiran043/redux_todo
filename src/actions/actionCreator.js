import {SET_VISIBILITY_FILTER,REMOVE_TODO,TOGGLE_TODO,ADD_TODO} from  './actionsTypes';

let TodoId=2 

export const setVisibilityFilter= filter=>({
    type:SET_VISIBILITY_FILTER,
    filter
})

export const deleteTodo=(id)=>({
    type:REMOVE_TODO,
    id:id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})


export const addTodo = text => ({
    type: ADD_TODO,
    id: TodoId++,
    text
})