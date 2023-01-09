import { legacy_createStore as createStore } from 'redux'

const initialState = {
    tasks: [{ name: "quero estudar", checked: false }],
    editingKey: -1
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            const { name } = action.payload
            return { ...state, tasks: [...state.tasks, { checked: false, name }] }
        case 'TOGGLE_TASK':
            return { ...state, tasks: state.tasks.map((task, key) => ({ ...task, checked: key === action.payload.key ? !task.checked : task.checked })) }
        case 'SET_TASK_NAME':
            return { ...state, tasks: state.tasks.map((task, key) => ({ ...task, name: key === state.editingKey ? action.payload.name : task.name })), editingKey: -1 }
        case 'SET_EDITING_KEY':
            return { ...state, editingKey: action.payload.key }
        case 'REMOVE_TASK':
            return { ...state, tasks: state.tasks.filter((_, key) => key !== action.payload.key) }
        default:
            return state
    }
}

export function addTask(payload) {
    return { type: 'ADD_TASK', payload }
}

export function toggleTask(payload) {
    return { type: 'TOGGLE_TASK', payload }
}

export function removeTask(payload) {
    return { type: 'REMOVE_TASK', payload }
}

export function setTaskName(payload) {
    return { type: 'SET_TASK_NAME', payload }
}

export function setEditingKey(payload) {
    return { type: 'SET_EDITING_KEY', payload }
}

export default createStore(reducer)