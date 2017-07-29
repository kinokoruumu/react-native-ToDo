export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const loadTodo = data => {
    return {
        type: 'LOAD_TODO',
        data
    }
}

//TODO AsyncStorageにcurrentIDを保存してApp.jsのcomponentWillMountでnextTodoIdの初期値に代入する
export const addTodo = (text, currentID) => {
    currentID++
    return {
        type: 'ADD_TODO',
        id: currentID,
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