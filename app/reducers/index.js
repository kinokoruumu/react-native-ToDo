import { combineReducers } from 'redux'
import todo from './todo'
import visibilityFilter from './visibilityFilter'
 
const reducer = combineReducers({
    todo,
    visibilityFilter,
})
 
export default reducer