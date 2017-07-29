import { AsyncStorage } from 'react-native'

const initialState = {
    todos: [],
    currentID: 0
}

export default function todo(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_TODO':
        console.log(action.data)
            return Object.assign({}, state, {
                todos: action.data.todos,
                currentID: action.data.currentID
            })
        case 'ADD_TODO':
            console.log(action.id)
            let data = {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ],
                currentID: action.id
            }
            // data = {
            //     todos: [],
            //     currentID: 0
            // }
            AsyncStorage.setItem('todoItems', JSON.stringify(data))
            return Object.assign({}, state, data)
        case 'TO_COMPLETE':
            let todos = state.todos
            console.log(state)
            console.log(action.id)
            todos[action.id - 1].completed = true
            AsyncStorage.setItem('todoItems', JSON.stringify({
                todos: todos,
                currentID: state.currentID
            }))
            return Object.assign({}, state, {
                todos: todos,
                currentID: state.currentID
            })
            return state
        default:
            return state
    }
}