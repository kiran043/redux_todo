import { combineReducers } from 'redux'
import todos from './Todoreducer'
import visibilityFilter from './Filterreducer'

export default combineReducers({
  todos,
  visibilityFilter
})