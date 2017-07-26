export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        text
    }
}