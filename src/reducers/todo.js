import { getTodos, createTodo, updateTodo } from '../lib/todoServices'
import { showMessage } from './messages'

const initState = {
    todos: [],
    currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const TODOS_LOAD = 'TODOS_LOAD'
export const TODO_ADD = 'TODO_ADD'

export const updateCurrent = (val) => ({ type: CURRENT_UPDATE, payload: val })
export const loadTodos = (todos) => ({ type: TODOS_LOAD, payload: todos })
export const addTodo = (todo) => ({ type: TODO_ADD, payload: todo })
export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(showMessage('Loading todos'))
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}

export const saveTodo = (name) => {
    return (dispatch) => {
        dispatch(showMessage('Saving Todo'))
        createTodo(name)
            .then(res => dispatch(addTodo(res)))
    }
}

export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        dispatch(showMessage('Saving Update'))
        const { todos } = getState().todo
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return { ...state, currentTodo: '', todos: state.todos.concat(action.payload) }
        case CURRENT_UPDATE:
            return { ...state, currentTodo: action.payload }
        case TODOS_LOAD:
            return { ...state, todos: action.payload }
        default:
            return state
    }

} 