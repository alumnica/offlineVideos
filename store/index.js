import { combineReducers } from 'redux'
import counterReducer from './counterSlice.js'

export default combineReducers({
  counter: counterReducer
})
