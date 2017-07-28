export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const getTodo = () => {
    return {
        type: 'GET_TODO'
    }
}

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        text
    }
}

export const toComplete = id => {
    return {
        type: 'TO_COMPLETE',
        id
    }
}

export const setModalVisible = visible => {
    return {
        type: 'SET_MODAL_VISIBLE',
        visible
    }
}