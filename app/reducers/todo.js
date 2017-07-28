import { AsyncStorage } from 'react-native'

const initialState = {
    todos: []
}

export default function todo(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            let data = {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }
            let jsonData = JSON.stringify(data)
            console.log('json'+jsonData)
            AsyncStorage.setItem('todoItems', jsonData)
            return Object.assign({}, state, data)
        case 'TO_COMPLETE':
            return
        default:
            return state
    }
}