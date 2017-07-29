import { combineReducers } from 'redux'
import todo from './todo'
import visibilityFilter from './visibilityFilter'
import modal from './modal'
 
const reducer = combineReducers({
    todo,
    visibilityFilter,
    modal,
})
 
export default reducer