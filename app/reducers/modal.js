const initialState = {
    modalVisible: false
}

const modal = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MODAL_VISIBLE':
            return Object.assign({}, state, {
                modalVisible: action.visible
            })
        default:
            return state
    }
}

export default modal