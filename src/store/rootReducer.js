import { combineReducers } from 'redux'
import { enableBatching } from 'redux-batched-actions'

import exampleReducer from 'src/store/example'

export default enableBatching(combineReducers({
  exampleReducer
}))
