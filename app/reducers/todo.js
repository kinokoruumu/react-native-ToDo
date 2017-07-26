import { VisibilityFilters } from './actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

const ADD_TODO = 'ADD_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'

export default function todo(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        default:
            return state
    }
}