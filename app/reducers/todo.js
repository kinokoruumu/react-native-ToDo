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
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case 'TO_COMPLETE':
            return
        default:
            return state
    }
}