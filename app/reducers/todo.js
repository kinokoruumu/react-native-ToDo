import { AsyncStorage } from 'react-native'

const initialState = {
    todos: []
}

export default function todo(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case 'TO_COMPLETE':
            let todos = state.todos
            todos[action.id].completed = true
            return Object.assign({}, state, {
                todos: todos
            })
        default:
            return state
    }
}